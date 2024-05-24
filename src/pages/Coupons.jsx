import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { useLocation, useNavigate } from "react-router-dom";
import supabase from "../config/supabase-config";

//useLocation

function Coupons() {
    const navigate = useNavigate();
    const location = useLocation();
    const couponData = location.state;

    //submit form
    const handleClaim = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get("name");
        const phone = formData.get("phone");

        //send to backend
        console.log(name, phone);

        // send to supabase

        const response = await supabase.from("Winners").insert([
            {
                coupon: couponData.coupon_name,
                name: name,
                phone_number: phone,
            },
        ]);

        console.log(response);

        if (response.status === 201) {
            console.log("CONGRATSSSSSS");
            navigate("/congratulations", {
                state: couponData,
            });

            return;
        } else {
            console.log("Error", response.error);
        }
    };

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
            <h1>{couponData.restaurant}</h1>
            <div className="card" color="white">
                <h2>Fill Information to claim coupon</h2>
                {/* //name and phone number form with claim button */}
                <form onSubmit={handleClaim}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>
                    <button type="submit">Claim</button>
                </form>
            </div>
        </>
    );
}

export default Coupons;
