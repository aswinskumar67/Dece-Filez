import React from 'react';
import Icon from "./images/icons/favicon.ico";
import "./vendor/animate/animate.css";
import "./vendor/css-hamburgers/hamburgers.min.css";
import "./vendor/select2/select2.min.css";
import "./css/util.css";
import "./css/main.css";

class Login extends React.Component {
	render(){
		return (
			<div className="limiter" >
				<div className="container-login100">
					<div className="wrap-login100">
						<div className="login100-pic js-tilt" data-tilt>
							<img src={Icon} alt="IMG"/>
						</div>
		
						<form className="login100-form validate-form">
							<span className="login100-form-title">
								Member Login
							</span>
		
							<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
								<input className="input100" type="text" name="email" placeholder="Email"/>
								<span className="focus-input100"></span>
								<span className="symbol-input100">
									<i className="fa fa-envelope" aria-hidden="true"></i>
								</span>
							</div>
		
							<div className="wrap-input100 validate-input" data-validate = "Password is required">
								<input className="input100" type="password" name="pass" placeholder="Password"/>
								<span className="focus-input100"></span>
								<span className="symbol-input100">
									<i className="fa fa-lock" aria-hidden="true"></i>
								</span>
							</div>
							
							<div className="container-login100-form-btn">
								<button className="login100-form-btn">
									Login
								</button>
							</div>
		
							<div className="text-center p-t-12">
								<span className="txt1">
									Forgot
								</span>
								<p>
									Username / Password?
								</p>
							</div>
		
							<div className="text-center p-t-136">
								<p>
									Create your Account
									<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}
export default Login;
	
	
/*

	
<!--===============================================================================================-->	
	<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/bootstrap/js/popper.js"></script>
	<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/select2/select2.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/tilt/tilt.jquery.min.js"></script>
	<script >
		$('.js-tilt').tilt({
			scale: 1.1
		})
	</script>
<!--===============================================================================================-->
	<script src="js/main.js"></script>
*/