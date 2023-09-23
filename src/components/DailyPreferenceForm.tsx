import React from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import TimePicker from "react-time-picker";

const DailyPreferenceForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const navigate = useNavigate();

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		console.log(data);
		// Navigate to the desired route
		navigate("/home");
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} style={formStyles}>
			<h2 style={headerStyles}>Lunch Preferences</h2>

			<div style={inputGroupStyles}>
				<label htmlFor="startTime" style={labelStyles}>
					Your lunch window - Start Time:
				</label>
				<TimePicker
					id="startTime"
					{...register("startTime", { required: true })}
					value={null} // You can set an initial time value here if needed
					onChange={(value) => console.log(value)} // Handle time changes here
					disableClock={true} // Disable the clock view to show only the time input
					format={"HH:mm"} // Display time in 24-hour format
					clearIcon={null} // Hide the clear icon
				/>
				{errors.startTime && <p style={errorStyles}>Start Time is required</p>}
			</div>

			<div style={inputGroupStyles}>
				<label htmlFor="endTime" style={labelStyles}>
					Your lunch window - End Time:
				</label>
				<TimePicker
					id="endTime"
					{...register("endTime", { required: true })}
					value={null} // You can set an initial time value here if needed
					onChange={(value) => console.log(value)} // Handle time changes here
					disableClock={true} // Disable the clock view to show only the time input
					format={"HH:mm"} // Display time in 24-hour format
					clearIcon={null} // Hide the clear icon
				/>
				{errors.endTime && <p style={errorStyles}>End Time is required</p>}
			</div>

			{/* Rest of the form fields (cuisine, distance) remain the same */}

			<button type="submit" style={submitButtonStyles}>
				Submit
			</button>
		</form>
	);
};

// Inline CSS styles (unchanged)
// ...

export default DailyPreferenceForm;

// Inline CSS styles
const formStyles: React.CSSProperties = {
	maxWidth: "400px",
	margin: "0 auto",
	padding: "20px",
	border: "1px solid #ccc",
	borderRadius: "5px",
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
