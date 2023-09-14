import { useEffect } from "react";
import { useState } from "react";
import Carts from "./Carts";
import { FaDollarSign } from 'react-icons/fa';
import { FaBookOpen } from 'react-icons/fa';

const Cards = () => {

    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([])

    useEffect(() => {
        fetch('../../public/data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    const handaleSelectCourse = (course) => {
        // console.log(courses);
        const isSelectedCourse = selectedCourse.find(item => item.id === course.id) 
        setSelectedCourse(isSelectedCourse)
        console.log(isSelectedCourse);
    }

    return (
        <div>
            <h1 className=" text-5xl text-center font-bold my-4">Course Registration</h1>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-3/4 gap-8 ml-12 my-12">
                {
                    courses.map(course =>
                        <div className="border-2 rounded-lg shadow-lg shadow-gray-400 text-center p-2" key={course.id}>
                            <img className=" w-full mx-auto my-5" src={course.image} alt="" />
                            <h2 className=" text-3xl font-bold my-3">{course.title}</h2>
                            <h4 className=" text-xl p-5">{course.description}</h4>
                            <div className="flex justify-evenly text-gray-500 my-4 text-2xl font-semibold">
                                <h5 className="flex items-center gap-2"><FaDollarSign></FaDollarSign>Price: {course.price}</h5>
                                <h5 className="flex items-center gap-4"><FaBookOpen></FaBookOpen>Credit: {course.credit}hr</h5>
                            </div>
                            <button onClick={()=>handaleSelectCourse(course)} className="py-4 px-24 my-4 bg-blue-700 text-white font-bold capitalize text-2xl rounded-lg">Select</button>
                        </div>
                    )
                }
            </div>

            <Carts></Carts>
        </div>
    );
};

export default Cards;