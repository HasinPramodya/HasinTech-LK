import "./SignupPage.css";
import user from "../../assets/user.webp";
import { useState } from "react";
import {z} from "zod";
import { signUp } from "../../services/userServices";
import { useNavigate } from "react-router-dom";

const signupSchema=z.object({
    name: z.string().min(3, { message: "Name should be at least 3 characters." }),  
    email: z.string().email({ message: "Please enter valid email." }),
    password: z.string().min(8, { message: "Password must be at least 8 characters." }),
    cpassword: z.string(),
    address: z.string().min(15, { message: "Address must be at least 15 characters." }),

}).refine((data) => data.password === data.cpassword, {
    message: "Confirm Password does not match Password",
    path: ["cpassword"], // path of error
  });
const SignupPage = () => {
    const [userDetails,setUserDetails]=useState({
        name:"",
        email:"",
        password:"",
        cpassword:"",
        address:""
    });

    const [errors,setErrors] = useState({});
    const [profilepic,setProfilepic]=useState(null);
    const navigate=useNavigate();
    const handlesubmit = async (e) => {
        e.preventDefault();

        const result = signupSchema.safeParse(userDetails);

        if (!result.success) {
            const formattedErrors = result.error.flatten().fieldErrors;
            setErrors(formattedErrors);
            return;
        }

        setErrors({}); // Clear errors

        console.log("Form submitted successfully", userDetails);
        try {
            const res = await signUp(userDetails, profilepic);
            console.log('Signup successful', res);
            // TODO: redirect or show success message
           window.location.href="/";
        } catch (err) {
            console.error('Signup failed', err);
            setErrors({ error: err.response.data.message });
        }
    }
    
    return (
        <section className='align-center form_page'>
            <form className='authentication_form signup_form' onSubmit={handlesubmit}>
                <h2>SignUp Form</h2>
                {errors.general && <p className="error_msg">{errors.general}</p>}

                <div className='image_input_section'>
                    <div className='image_preview'>
                        <img src={profilepic ? URL.createObjectURL(profilepic) : user} id='file-ip-1-preview' />
                    </div>
                    <label htmlFor='file-ip-1' className='image_label'>
                        Upload Image
                    </label>
                    <input type='file' id='file-ip-1' className='image_input' onChange={(e)=>{
                        setProfilepic(e.target.files[0]);
                    }}/>
                </div>

                {/* Form Inputs */}
                <div className='form_inputs signup_form_input'>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input
                            id='name'
                            className='form_text_input'
                            type='text'
                            placeholder='Enter your name'
                            value={userDetails.name}
                            onChange={(e)=>{
                                setUserDetails({...userDetails,name:e.target.value})
                            }}
                             
                        />
                         {errors.name && <p className="error_msg">{errors.name[0]}</p>}
                    </div>

                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            id='email'
                            className='form_text_input'
                            type='email'
                            placeholder='Enter your email address'
                            value={userDetails.email}
                            onChange={(e)=>{
                                setUserDetails({...userDetails,email:e.target.value})
                            }}
                            
                        />
                         {errors.email && <p className="error_msg">{errors.email[0]}</p>}
                    </div>

                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            id='password'
                            className='form_text_input'
                            type='password'
                            placeholder='Enter your password'
                            value={userDetails.password}
                            onChange={(e)=>{
                                setUserDetails({...userDetails,password:e.target.value})
                            }}
                            
                        />
                         {errors.password && <p className="error_msg">{errors.password[0]}</p>}
                    </div>

                    <div>
                        <label htmlFor='cpassword'>Confirm Password</label>
                        <input
                            id='cpassword'
                            className='form_text_input'
                            type='password'
                            placeholder='Enter confirm password'
                            value={userDetails.cpassword}
                            onChange={(e)=>{
                                setUserDetails({...userDetails,cpassword:e.target.value})
                            }}
                            
                        />
                         {errors.cpassword && <p className="error_msg">{errors.cpassword[0]}</p>}
                    </div>

                    <div className='signup_textares_section'>
                        <label htmlFor='address'>Delivery Address</label>
                        <textarea
                            id='address'
                            className='input_textarea'
                            placeholder='Enter delivery address'
                            value={userDetails.address}
                            onChange={(e)=>{
                                setUserDetails({...userDetails,address:e.target.value})
                            }}
                            
                        />
                         {errors.address && <p className="error_msg">{errors.address[0]}</p>}
                    </div>
                </div>
               {errors.error && <em className="error_msg">{errors.error}</em>}
                <button className='search_button form_submit' type='submit'>
                    Submit
                </button>
            </form>
        </section>
    );
};

export default SignupPage;

// name - Name should be at least 3 characters.
// email - Please enter valid email
// password - Password must be at least 8 characters.
// confirmPassword - Confirm Password does not match Password
// deliveryAddress - Address must be at least 15 characters.
