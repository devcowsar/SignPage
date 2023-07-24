"use client"
import Link from "next/link";
import './log.css';
import { BsGithub } from 'react-icons/bs';

const Login=()=>{
    return(
        <>
        <div className="wrapper">
	<div >
		<BsGithub className="logo"/>
	</div>
	<div className="title">
		<p>Sign in to GitHub</p>
	</div>
	<div className="form">
		<div className="input_field">
			<label>Username or email address</label>
			<input type="text" className="input"/>
		</div>
		<div className="input_field">
			<label>Password</label>
			<input type="password" className="input"/>
			<Link href={'/'} className="forgot">Forgot password?</Link>
		</div>
		<div className="btn">
			<input type="submit" value="Sign in" className="sign_btn"/>
		</div>
	</div>
	<div className="create_act">
		<p>New to GitHub? <Link href={"/"}>Create an account.</Link></p>
	</div>
	
</div>	
</>
    )
}
export default Login;