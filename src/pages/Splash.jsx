import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../config/supabase-config";
import { Box, Card, CircularProgress, LinearProgress } from "@mui/material";

function Splash() {
    // /coupons/couchanwom24
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        console.log("This is effect");
        const fetchCoupon = async () => {
            const response = await supabase
                .from("Coupons")
                .select()
                .eq("coupon_name", id);

            const { data, error } = response;

            console.log(response);
            if (error) {
                console.log(error, "MORALLLLLLLLLLLLLLLLLLll");
            }
            console.log(data, "oooooooooooooooooooooo");
            if (data[0] == null) {
                alert("Coupon not found");
                return;
            }
            if (data) {
                if (!data[0].available) {
                    alert("Coupon already redeemed");
                    return;
                }
                navigate("/fill-information", {
                    state: data[0],
                });
                return;
            }
        };
        fetchCoupon();
    }, []);
    return (
        <Box
            sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                padding: "20px",
                backgroundColor: "transparent",
                borderRadius: "10px",
            }}
        >
            <CircularProgress
                sx={{
                    color: "black",
                }}
            />
        </Box>
    );
}

export default Splash;
