import { useEffect } from "react";
import { useState } from "react";
import Carts from "./Carts";
import { FiDollarSign } from 'react-icons/fi';
import { FiBookOpen } from 'react-icons/fi';

const Cards = () => {

    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([])
    const [totalCreditHr, setTotalCreditHr] = useState(0)
    const [remaining, setRemaining] = useState(0)

    useEffect(() => {
        fetch('../../public/data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    const handaleSelectCourse = (course) => {
        const isSelectedCourse = selectedCourse.find(item => item.id === course.id)
        let countHr = course.credit;
        if (isSelectedCourse) {
            alert('This one is already selected')
        } else {
            selectedCourse.forEach((item) => {
                countHr = countHr + item.credit
            })
            setTotalCreditHr(countHr);
            setSelectedCourse([...selectedCourse, course])
        }
        // console.log(isSelectedCourse);
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
                                </button>
                            </div>
                        )
                    }
                </div>

                <Carts
                    selectedCourse={selectedCourse}
                    totalCreditHr={totalCreditHr}
                ></Carts>
            </div>
        </div>
    );
};

export default Cards;