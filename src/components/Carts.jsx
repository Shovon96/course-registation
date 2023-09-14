import PropTypes from 'prop-types'
const Carts = ({ selectedCourse, totalCreditHr }) => {
    return (
        <div className="ml-16 shadow-lg shadow-gray-500 h-full mt-12 mr-16 p-8 rounded-lg w-1/4">
            <h2 className="text-2xl font-bold text-blue-600 mb-6">Credit Hour Remaining 7 hr</h2><hr />
            <div>
                <h2 className="text-3xl font-bold my-4">Course Name:</h2>
                {
                    selectedCourse.map((course,index) => (
                            <li key={index} className='list-decimal text-2xl font-bold text-gray-500 my-3'>{course.title}</li>
                        
                    ))
                }
            </div><hr />
            <h3 className="text-2xl text-gray-600 my-3 font-semibold">Total Credit Hourse: {totalCreditHr}</h3><hr />
            <h3 className="text-2xl text-gray-600 my-3 font-semibold">Total Price: USD</h3>
        </div>
    );
};

Carts.propTypes = {
    selectedCourse: PropTypes.array.isRequired,
    totalCreditHr: PropTypes.number.isRequired
}

export default Carts;