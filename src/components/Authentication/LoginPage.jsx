import React, { useState } from "react";
import "./LoginPage.css";
import { z } from "zod";
import { login } from "../../services/userServices";

const UserSchema = z.object({
  email: z.string().email({ message: "Please enter valid email." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
});

export const LoginPage = () => {
  // const nameRef = useRef(null);
  // const phoneNumberRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = UserSchema.safeParse(user);
    if (!result.success) {
      const formatted = result.error.flatten().fieldErrors;
      setErrors(formatted);
      return;
    }

    setErrors({});
    try {
      const res = await login(user);
      console.log("Login successful", res);
      // TODO: store token / redirect on success
    } catch (err) {
      console.error("Login error", err);
      const message = err?.response?.data?.message || err.message || "Login failed";
      setErrors({ general: message });
    }
  };

  return (
    <section className="align-center form_page">
      <form action="" className="authentication_form" onSubmit={handleSubmit}>
        <h2>Login Form</h2>
        <div className="form_inputs">
          <div>
            <label htmlFor="name">Email</label>
            <input
              type="email"
              id="email"
              className="form_text_input"
              placeholder="Enter your name"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              value={user.email}
            />
            {/* show error */}
            {errors.name && <p className="error_msg">{errors.name[0]}</p>}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              className="form_text_input"
              placeholder="Enter your phone number"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              value={user.password}
            />
            {errors.password && (
              <p className="error_msg">{errors.password[0]}</p>
            )}
            {errors.general && (
              <em className="form_error">{errors.general}</em>
            )}
          </div>
          <button type="submit" className="search_button form_submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};
