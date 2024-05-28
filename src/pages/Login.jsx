//login with email and password
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import supabase from "../config/supabase-config";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        const response = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        console.log(response);
        // supabaseKey;

        const { data, error } = response;

        if (error === null) {
            const { user, session } = data;
            //set seeion sorage
            sessionStorage.setItem("user", JSON.stringify(user));
            await supabase.auth.setSession(session);
            navigate("/winners");
        } else {
            console.log("error", error);
            alert(
                "There was an error logging in. Please check your email and password."
            );
        }

        // if (error) {
        //     console.log("error", error);
        // } else {
        //     console.console.log("user", user);
        //     console.log("session", session);
        //     navigate("/coupons");
        // }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
