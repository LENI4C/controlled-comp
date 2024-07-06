import React from "react";
import { useState } from "react";

export const Form = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPass: "",
        joinNews: false,
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type == "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        formData.password == formData.confirmPass
            ? console.log("passwords match")
            : console.log("passwords do not match");
        // find out why this ternary is not functioning as it should
        // formData.joinNews == true ? "thank you for signing up" : "null";
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                name="email"
                placeholder="email@email.com"
                value={formData.email}
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
            />
            <input
                type="password"
                name="confirmPass"
                placeholder="Confirm password"
                value={formData.confirmPass}
                onChange={handleChange}
            />
            <input
                type="checkbox"
                name="joinNews"
                id="joinNewsLetter"
                checked={formData.joinNews}
                onChange={handleChange}
            />
            <label htmlFor="joinNewsLetter">
                I want to join the news letter
            </label>
            <button>Sign Up</button>
        </form>
    );
};

export default Form;
