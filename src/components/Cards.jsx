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
        fetch('data.json')
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

            const totalRemainig = time - countHr
            if (totalRemainig <= 0 && countHr > time) {
                toast.warning('Credit time is up..', {
                    position: toast.POSITION.TOP_CENTER
                });
            } else {
                setTotalCreditHr(countHr);
                setTotalPrice(price)
                setRemainingTime(totalRemainig);
                setSelectedCourse([...selectedCourse, course])
            }
        }
    }

    return (
        <div>
            <h1 className=" text-5xl text-center font-bold my-4">Course Registration</h1>
            <div className="flex container mx-auto">
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-4/5 gap-4 my-12">
                    {
                        courses.map(course =>
                            <div className="border-2 rounded-lg shadow-lg shadow-gray-400 p-2" key={course.id}>
                                <img className="w-full mx-auto" src={course.image} alt="" />
                                <h2 className=" text-lg font-semibold my-2">{course.title}</h2>
                                <h4 className=" text-sm p-2">{course.description}</h4>
                                <div className="flex justify-evenly text-gray-500 my-2 text-sm font-medium">
                                    <h5 className="flex items-center gap-2"><FiDollarSign></FiDollarSign>Price: {course.price}</h5>
                                    <h5 className="flex items-center gap-2"><FiBookOpen></FiBookOpen>Credit: {course.credit}hr</h5>
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        onClick={() => handaleSelectCourse(course)}
                                        className="py-2 px-20 my-2 bg-blue-500 text-white font-semibold capitalize text-sm rounded-lg">
                                        Select
                                    </button><ToastContainer />
                                </div>
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