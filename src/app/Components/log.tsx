"use client"
import Link from "next/link";
import './log.css';
const Login=()=>{
    return(
        <>
        <div className="wrapper">
	<div className="logo">
		<img src="https://i.imgur.com/gr4XvFZ.png" alt="GitHub"/>
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
			<Link href="#" className="forgot">Forgot password?</Link>
		</div>
		<div className="btn">
			<input type="submit" value="Sign in" className="sign_btn"/>
		</div>
	</div>
	<div className="create_act">
		<p>New to GitHub? <a href="#">Create an account.</a></p>
	</div>
	
</div>	
</>
    )
}
export default Login;