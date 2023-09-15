import PropTypes from 'prop-types'
const Carts = ({ selectedCourse, totalCreditHr, remainingTime, totalPrice }) => {
    return (
        <div className="ml-4 shadow-lg shadow-gray-500 h-full mt-12 p-2 rounded-lg w-1/5 sticky top-14 ">
            <h2 className="p-2 font-semibold text-blue-600 mb-4">Credit Hour Remaining {remainingTime} hr</h2><hr />
            <div>
                <h2 className="text-xl font-bold text-center my-2">Course Name:</h2>
                {
                    selectedCourse.map((course,index) => (
                            <li key={index} className='list-decimal font-bold text-gray-500 my-2'>{course.title}</li>
                        
                    ))
                }
            </div><hr />
            <h3 className="text-lg text-gray-600 my-2 font-semibold">Total Credit Hourse: {totalCreditHr}</h3><hr />
            <h3 className="text-lg text-gray-600 my-2 font-semibold">Total Price: {totalPrice} USD</h3>
        </div>
    );
};

Carts.propTypes = {
    selectedCourse: PropTypes.array.isRequired,
    totalCreditHr: PropTypes.number.isRequired,
    remainingTime: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired
}

export default Carts;