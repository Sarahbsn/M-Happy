import React from "react";
import "../styles/Login.css";

export default function Login({
	email,
	setEmail,
	password,
	setPassword,
	handleLogin,
	handleSignup,
	hasAccount,
	setHasAccount,
	emailError,
	passwordError,
}) {
	return (
		<section className="login">
			<div className="loginContainer">
				<label>E-mail</label>
				<input
					type="text"
					autoFocus
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<p className="errorMsg">{emailError}</p>
				<label>Password</label>
				<input
					type="password"
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<p className="errorMsg">{passwordError}</p>
				<div className="btnContainer">
					{hasAccount ? (
						<>
							<button onClick={handleLogin}>Sign in</button>
							<p>
								Don't have an account ?
								<span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
							</p>
						</>
					) : (
						<>
							<button onClick={handleSignup}>Sign up</button>
							<p>
								Already have an account?
								<span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
							</p>
						</>
					)}
				</div>
			</div>
		</section>
	);
}
