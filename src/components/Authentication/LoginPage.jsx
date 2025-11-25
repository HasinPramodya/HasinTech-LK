import React, { useState } from "react";
import "./LoginPage.css";
import { z } from "zod";

const UserSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone_number: z
    .string()
    .min(10, "Phone number must be at least 10 characters")
    .regex(/^[0-9]+$/, "Phone number must contain only digits"),
});

export const LoginPage = () => {
  // const nameRef = useRef(null);
  // const phoneNumberRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({
    name: "",
    phone_number: 0,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = UserSchema.safeParse(user);
    if (!result.success) {
      setErrors(result.error.formErrors.fieldErrors);
      return;
    }
  };
  return (
    <section className="align-center form_page">
      <form action="" className="authentication_form">
        <h2>Login Form</h2>
        <div className="form_inputs">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="form_text_input"
              placeholder="Enter your name"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              value={user.name}
            />
            {/* show error */}
            {errors.name && <p style={{ color: "red" }}>{errors.name[0]}</p>}
          </div>
          <div>
            <label htmlFor="phone_number">Phone Number</label>
            <input
              type="number"
              id="phone_number"
              className="form_text_input"
              placeholder="Enter your phone number"
              onChange={(e) =>
                setUser({ ...user, phone_number: parseInt(e.target.value) })
              }
              value={user.phone_number}
            />
            
            {errors.name && <p style={{ color: "red" }}>{errors.name[0]}</p>}
          </div>
          <button className="search_button form_submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};
