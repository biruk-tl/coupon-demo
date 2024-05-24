//router

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Splash from "../pages/Splash";
import FillInformation from "../pages/FillInformation";
import Congratulations from "../pages/Congratulations";
import Winners from "../pages/Winners";
import Coupons from "../pages/Coupons";

// import Home from '../pages/Home';
// import Login from '../pages/Login';
// import Register from '../pages/Register';
// import FillInformation from '../pages/FillInformation';
// import Congrats from '../pages/Congrats';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/coupons/:id" element={<Splash />} />
                <Route path="/fill-information" element={<FillInformation />} />
                <Route path="/congratulations" element={<Congratulations />} />
                <Route path="/winners" element={<Winners />} />
                <Route path="/coupons" element={<Coupons />} />

                {/* <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
