const Carts = () => {
    return (
        <div className="ml-20 shadow-lg shadow-gray-500 mt-12 mr-16 p-12 rounded-lg w-1/4">
            <h2 className="text-2xl font-bold text-blue-600 mb-6">Credit Hour Remaining 7 hr</h2><hr />
            <div>
                <h2 className="text-3xl font-bold my-4">Course Name</h2>
                <ol className="list-decimal my-4">
                    <li>Course Name</li>
                    <li>Course Name</li>
                    <li>Course Name</li>
                </ol><hr />
            </div>
            <h3 className="text-2xl text-gray-600 my-3 font-semibold">Total Credit Hourse:</h3><hr />
            <h3 className="text-2xl text-gray-600 my-3 font-semibold">Total Price: USD</h3>
        </div>
    );
};

export default Carts;