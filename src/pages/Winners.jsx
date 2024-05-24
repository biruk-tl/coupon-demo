import supabase from "../config/supabase-config";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Winners() {
    const [winners, setWinners] = useState([]);
    const [loading, setLoading] = useState(true);
    // const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const fetchCoupon = async () => {
            const response = await supabase.from("Winners").select();
            const { data, error } = response;

            console.log(response);
            if (error) {
                console.log(error, "MORALLLLLLLLLLLLLLLLLLll");
            }
            if (data[0] == null) {
                alert("Error fetching winners");
                return;
            }
            if (data) {
                console.log("THIS IS THE DATAAAA", data);
                setWinners(data);
                return;
            }
        };
        fetchCoupon();
        setLoading(false);
    }, []);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="right">
                                        Phone Number
                                    </TableCell>
                                    <TableCell align="right">Coupon</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {winners.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{
                                            "&:last-child td, &:last-child th":
                                                {
                                                    border: 0,
                                                },
                                        }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.phone_number}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.coupon}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            )}
        </div>
    );
}

export default Winners;
