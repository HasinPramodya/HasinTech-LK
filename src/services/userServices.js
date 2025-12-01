import apiClient from "../utils/api-client";

export function signUp(user, profilepic) {
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
    return apiClient.post("/user/signup", body, {
        headers: { "Content-Type": "multipart/form-data" },
    });
}