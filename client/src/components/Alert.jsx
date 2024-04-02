/* eslint-disable react/prop-types */
const Alert = ({ type, message }) => {
    const alertClasses = {
        success: 'bg-green-200 text-green-800',
        error: 'bg-red-200 text-red-800',
        info: 'bg-blue-200 text-blue-800',
    };

    return (
        <div className={`p-4 rounded ${alertClasses[type]} my-4`}>
            {message}
        </div>
    );
};

export default Alert;