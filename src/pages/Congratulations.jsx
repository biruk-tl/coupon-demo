import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { useLocation, useNavigate } from "react-router-dom";
import supabase from "../config/supabase-config";

//useLocation

function Congratulations() {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location, "HIRUYYY");
    const couponData = location.state;
    console.log(couponData, "HIWNN");

    console.log(couponData, "BIRRRRRRRRRRRRR");

    //submit form

    return (
        <>
            <div>
                {couponData.restaurant === "Chanoly Noodles" ? (
                    <a href="https://vitejs.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                ) : (
                    <a href="https://react.dev" target="_blank">
                        <img
                            src={reactLogo}
                            className="logo react"
                            alt="React logo"
                        />
                    </a>
                )}
            </div>
            <h1>Congratulations!</h1>
            <h2>
                You have won a {couponData.amount}% discount from{" "}
                {couponData.restaurant}
            </h2>
        </>
    );
}

export default Congratulations;
