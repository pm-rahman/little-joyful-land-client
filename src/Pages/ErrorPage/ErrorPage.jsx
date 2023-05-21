import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
import Title from "../../Components/Title/Title";

const ErrorPage = () => {
    Title('Error')
    const naviGate = useNavigate()
    const goBackHandler =()=>{
        naviGate('/')
    }
    return (
        <div className="h-screen flex flex-col items-center gap-8 mt-28">
            <img className="h-56" src="https://i.ibb.co/r46yBrN/404-image.png" alt="" />
            <button onClick={goBackHandler} className="btn bg-blue-500 hover:bg-blue-600 border-0 gap-2">
            <Icon icon="fa-solid:arrow-left" />
                Back To Home
            </button>
        </div>
    );
};

export default ErrorPage;