import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="w-96 mx-auto bg-pink-100 p-10 pt-8 rounded-md">
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

                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" value="Login" className="btn btn-block border-none rounded-md bg-pink-500 hover:bg-pink-600" />
                <p>I don't have account <Link className="text-pink-500 font-semibold underline" to='/register'>Register</Link> </p>
            </form>
        </div>
    );
};

export default Login;