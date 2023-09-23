import axios from "axios";
import React from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const navigate = useNavigate();

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		console.log(data);
		const postData = async () => {
			try {
				const url = "http://20.93.5.89:8080/login";
				const dataToSend = {
					password: data.password,
					email: data.email,
				};

				const response = await axios.post(url, dataToSend, {
					withCredentials: true,
				});
				console.log(response);

				if (response.status === 200) {
					console.log("Data successfully posted:", response.data);
				} else {
					console.error("Failed to post data:", response.statusText);
				}
			} catch (error) {
				console.error("An error occurred:", error);
			}
		};
		postData();
		navigate("/home");
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} style={formStyles}>
			<h2 style={headerStyles}>Login</h2>

			<div style={inputGroupStyles}>
				<label htmlFor="email" style={labelStyles}>
					Email
				</label>
				<input
					type="email"
					id="email"
					{...register("email", { required: true })}
					style={inputStyles}
				/>
				{errors.email && <p style={errorStyles}>Email is required</p>}
			</div>

			<div style={inputGroupStyles}>
				<label htmlFor="password" style={labelStyles}>
					Password
				</label>
				<input
					type="password"
					id="password"
					{...register("password", { required: true })}
					style={inputStyles}
				/>
				{errors.password && <p style={errorStyles}>Password is required</p>}
			</div>

			<button type="submit" style={submitButtonStyles}>
				Login
			</button>
		</form>
	);
};

// Inline CSS styles
const formStyles: React.CSSProperties = {
	maxWidth: "400px",
	margin: "0 auto",
	padding: "20px",
	border: "1px solid #ccc",
	borderRadius: "5px",
	borderColor: "black",
};

const headerStyles: React.CSSProperties = {
	textAlign: "center",
	marginBottom: "20px",
};

const inputGroupStyles: React.CSSProperties = {
	marginBottom: "15px",
};

const labelStyles: React.CSSProperties = {
	display: "block",
	marginBottom: "5px",
};

const inputStyles: React.CSSProperties = {
	width: "90%",
	padding: "10px",
	fontSize: "16px",
	border: "1px solid #ccc",
	borderRadius: "5px",
};

const errorStyles: React.CSSProperties = {
	color: "red",
	fontSize: "14px",
};

const submitButtonStyles: React.CSSProperties = {
	width: "100%",
	padding: "10px",
	fontSize: "16px",
	backgroundColor: "#3498db",
	color: "white",
	border: "none",
	borderRadius: "5px",
	cursor: "pointer",
};

export default LoginForm;
