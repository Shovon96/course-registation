import { useEffect } from "react";
import { useState } from "react";
import Carts from "./Carts";
import { FiDollarSign } from 'react-icons/fi';
import { FiBookOpen } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cards = () => {

    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([])
    const [totalCreditHr, setTotalCreditHr] = useState(0)
    const [remainingTime, setRemainingTime] = useState(20)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        fetch('../../public/data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    let time = 20;
    const handaleSelectCourse = (course) => {
        const isSelectedCourse = selectedCourse.find(item => item.id === course.id)
        let countHr = course.credit;
        let price = course.price;
        if (isSelectedCourse) {
            toast.warning('Course already selected...', {
                position: toast.POSITION.TOP_CENTER
            });
        } else {
            selectedCourse.forEach((item) => {
                countHr = countHr + item.credit
                price = price + item.price
            });
            setTotalPrice(price)

            const totalRemainig = time - countHr
            if (totalRemainig <= 0 && countHr > time) {
                toast.warning('Credit time is up..', {
                    position: toast.POSITION.TOP_CENTER
                });
            } else {
                setTotalCreditHr(countHr);
                setRemainingTime(totalRemainig);
                setSelectedCourse([...selectedCourse, course])
            }
        }
    }

    return (
        <div>
            <h1 className=" text-5xl text-center font-bold my-4">Course Registration</h1>
            <div className="flex">
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-3/4 gap-8 ml-12 my-12">
                    {
                        courses.map(course =>
                            <div className="border-2 rounded-lg shadow-lg text-center shadow-gray-400 p-4" key={course.id}>
                                <img className=" w-full mx-auto my-5" src={course.image} alt="" />
                                <h2 className=" text-2xl font-bold my-2">{course.title}</h2>
                                <h4 className=" text-xl p-5">{course.description}</h4>
                                <div className="flex justify-evenly text-gray-500 my-2 text-2xl font-semibold">
                                    <h5 className="flex items-center gap-2"><FiDollarSign></FiDollarSign>Price: {course.price}</h5>
                                    <h5 className="flex items-center gap-4"><FiBookOpen></FiBookOpen>Credit: {course.credit}hr</h5>
                                </div>
                                <button
                                    onClick={() => handaleSelectCourse(course)}
                                    className="py-3 px-36 mx-auto my-4 bg-blue-500 text-white font-bold capitalize text-2xl rounded-lg">
                                    Select
                                </button><ToastContainer />
                            </div>
                        )
                    }
                </div>

                <Carts
                    selectedCourse={selectedCourse}
                    totalCreditHr={totalCreditHr}
                    remainingTime={remainingTime}
                    totalPrice={totalPrice}
                ></Carts>
            </div>
        </div>
    );
};

export default Cards;