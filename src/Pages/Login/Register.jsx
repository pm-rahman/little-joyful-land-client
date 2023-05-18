import { Icon } from "@iconify/react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import Title from "../../Components/Title/Title";
const Register = () => {
    const { user, createNewUser, loginWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState('')
    Title('Register')

    const { register, handleSubmit, formState: { errors } } = useForm();
    const naviGate = useNavigate()
    const onSubmit = data => {
        setError('')
        console.log(data.name,)
        const { name, email, photo, password } = data;
        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                updateUserHandler(user, name, photo)
                console.log(user);
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
    const updateUserHandler = (user, name, url) => {
        return updateProfile(user, {
            displayName: name, photoURL: url
        })
            .then(() => { })
            .catch(err => {
                setError(err.message)
            });
    }
    const loginButtonHandler = () => {
        user
            ? Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Your Are Already Login',
                showConfirmButton: false,
                timer: 1500
            })
            : naviGate('/login')
    }
    return (
        <div className="w-1/2 mx-auto bg-amber-50 p-14 pt-8 rounded-md">
            <h4 className="text-3xl mb-3 font-bold">Register</h4>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Your Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered w-full" />
                    </label>
                </div>
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
                        <span className="label-text font-semibold">Photo Url</span>
                    </label>
                    <label className="input-group">
                        <input type="url" {...register("photo", { required: true })} placeholder="photo url" className="input input-bordered w-full" />
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

                {errors.exampleRequired && <span className="text-red-500">This field is required</span>}
                <p className="font-semibold text-red-500">{error}</p>
                <input type="submit" value="Register" className="btn btn-block border-none rounded-md bg-amber-600 hover:bg-amber-600" />
                <p>I already have an account <Link onClick={loginButtonHandler} className="text-amber-600 font-semibold underline">Login</Link> </p>
            </form>
            <button onClick={googleUserHandler} className="mt-4 bg-blue-500 mx-auto rounded-md py-3 px-6 flex gap-1 items-center justify-center text-white"><span className="font-semibold text-md">Google</span><Icon className="text-sm" icon="fa-brands:google" /></button>
        </div>
    );
};

export default Register;