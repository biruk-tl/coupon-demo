import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { useLocation, useNavigate } from "react-router-dom";
import supabase from "../config/supabase-config";
import { Box } from "@mui/material";
//useLocation

function Congratulations() {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location, "HIRUYYY");
    const couponData = location.state;
    console.log(couponData, "HIWNN");

    console.log(couponData, "BIRRRRRRRRRRRRR");

    return (
        <Box
            sx={{
                width: {
                    xs: "90%",
                    sm: "50%",
                },
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                padding: "20px",
                backgroundColor: "transparent",
                borderRadius: "10px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "10px",
                }}
            >
                {couponData.restaurant === "Chanoly Noodles" ? (
                    <a href="https://vitejs.dev" target="_blank">
                        <img
                            //height and width
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEsTmf95ZbNgtxf-_059V0hh229LugZ310NN2GwB3DoQ&s"
                            className="chanoly"
                            alt="Chanoly logo"
                        />
                    </a>
                ) : (
                    <a href="https://react.dev" target="_blank">
                        {/* <img
                            src={reactLogo}
                            className="logo react"
                            alt="React logo"
                        /> */}
                        {/* //src url img */}
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ-xScZTMzBPM449SOYSqzbHP7JMTEm9pet-cdSIz8tw&s"
                            className="logo react"
                            alt="React logo"
                        />
                    </a>
                )}

                <h1
                    style={{
                        bgcolor: "black",
                        color: "black",
                        fontSize: "2.5rem",
                        fontWeight: "bold",
                    }}
                >
                    Congratulations!
                </h1>
                <h2
                    style={{
                        bgcolor: "black",
                        color: "black",
                        fontSize: "1.5rem",
                        // fontWeight: "bold",
                    }}
                >
                    You have won a {couponData.amount}% discount from{" "}
                    {couponData.restaurant}
                </h2>
            </div>
        </Box>
    );
}

export default Congratulations;
