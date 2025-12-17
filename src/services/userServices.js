import apiClient from "../utils/api-client";
import { jwtDecode } from "jwt-decode";

const tokenName = "token";

export async function signUp(user, profilepic) {
    const body = new FormData();

    body.append("name", user.name || "");
    body.append("email", user.email || "");
    body.append("password", user.password || "");
    // map address field from frontend to backend's deliveryAddress
    body.append("deliveryAddress", user.address || "");
    // map confirm password field from frontend (cpassword) to backend expected key
    body.append("password_confirmation", user.cpassword || "");

    if (profilepic) {
        body.append("profilePic", profilepic);
    }

    // Note: endpoint corrected from '/user/sinup' -> '/user/signup'
    const { data } = await apiClient.post("/user/signup", body, {
        headers: { "Content-Type": "multipart/form-data" },
    });

    localStorage.setItem(tokenName, data.token);
}

export async function login (user) {
  const {data} = await  apiClient.post("/user/login", user);
  localStorage.setItem(tokenName, data.token);
  console.log(data.token);

}

export function logout() {
  localStorage.removeItem(tokenName);
}


export function getUser() {
    const jwt =localStorage.getItem(tokenName);
    const jwtUser = jwtDecode(jwt);
    return jwtUser;
}

export function getJwt() {
  return localStorage.getItem(tokenName);
}