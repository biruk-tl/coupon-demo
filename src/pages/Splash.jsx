import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../config/supabase-config";

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
    return <>Loading....</>;
}

export default Splash;
