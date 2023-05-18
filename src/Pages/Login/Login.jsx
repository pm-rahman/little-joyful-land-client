import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Icon } from "@iconify/react";
import Title from "../../Components/Title/Title";
const Login = () => {
    const [error, setError] = useState('')
    const { user, loginUser, loginWithGoogle } = useContext(AuthContext);
    Title('Login')

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        setError('')
        console.log(data,name)
        const { email, password } = data;
        console.log(email,password)
        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                naviGate('/')
            })
            .catch(err => {
                setError(err.message)
            })

    };
    const googleUserHandler = () => {
        setError('');
        loginWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                naviGate('/')
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const naviGate = useNavigate()
    const registerButtonHandler = () => {
        user
            ? Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Your Are Already Login',
                showConfirmButton: false,
                timer: 1500
            })
            : naviGate('/register')
    }


    return (
        <div className="w-1/3 mx-auto bg-blue-50 p-12 pt-10 rounded-md">
            <h4 className="text-3xl mb-3 font-bold">Login</h4>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Your Email</span>
                    </label>
                    <label className="input-group">
                        <input type="email" {...register("email", { required: true })} placeholder="Email" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Password</span>
                    </label>
                    <label className="input-group">
                        <input type="password" {...register("password", { required: true })} placeholder="Password" className="input input-bordered w-full" />
                    </label>
                </div>

                {errors.exampleRequired && <span className="font-semibold text-red-500">This field is required</span>}
                <p className="font-semibold text-red-500">{error}</p>
                <input type="submit" value="Login" className="btn btn-block border-none rounded-md bg-blue-600 hover:bg-blue-600" />
                <p>I don't have account <Link onClick={registerButtonHandler} className="text-blue-600 font-semibold underline" >Register</Link> </p>
            </form>
            <button onClick={googleUserHandler} className="mt-4 bg-blue-500 mx-auto rounded-md py-3 px-6 flex gap-1 items-center justify-center text-white"><span className="font-semibold text-md">Google</span><Icon className="text-sm" icon="fa-brands:google" /></button>
        </div>
    );
};

export default Login;