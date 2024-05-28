import { useLocation, useNavigate } from "react-router-dom";
import supabase from "../config/supabase-config";
import {
    FormControl,
    TextField,
    Card,
    Stack,
    Button,
    Box,
} from "@mui/material";
import { useState } from "react";

//useLocation

function FillInformation() {
    const navigate = useNavigate();
    const location = useLocation();
    const couponData = location.state;
    const [submitting, setSubmitting] = useState(false);

    //submit form
    const handleClaim = async (e) => {
        setSubmitting(true);
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
        setSubmitting(false);
    };

    return (
        //a box with white background placed right at the center of the screen
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

                backgroundColor: "white",
                borderRadius: "10px",
            }}
        >
            <div
                style={{
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
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
            </div>
            <h1
                style={{
                    bgcolor: "black",
                    color: "black",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                }}
            >
                {couponData.restaurant}
            </h1>
            <div>
                <h2
                    style={{
                        color: "black",
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                    }}
                >
                    Fill Information to claim coupon
                </h2>
                {/* //name and phone number form with claim button */}
                {/* MUI form with mui components */}

                <Card>
                    <form onSubmit={handleClaim}>
                        <Stack spacing={3}>
                            <FormControl>
                                <TextField
                                    id="name"
                                    name="name"
                                    label="Name"
                                    variant="outlined"
                                />
                            </FormControl>
                            <FormControl>
                                <TextField
                                    id="phone"
                                    name="phone"
                                    label="Phone Number"
                                    variant="outlined"
                                />
                            </FormControl>
                            <Button
                                disabled={submitting}
                                type="submit"
                                variant="contained"
                                sx={{ bgcolor: "black" }}
                            >
                                {submitting ? "Please wait..." : "Claim"}
                            </Button>
                        </Stack>
                    </form>
                </Card>
            </div>
        </Box>
    );
}

export default FillInformation;
