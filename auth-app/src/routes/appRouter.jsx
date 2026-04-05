import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";


function DashBoard(){
    return <h1>DashBoard here</h1>
}
function Signup(){
    return <h1>Signup here</h1>
}
function Login(){
    return <h1>Login here</h1>
}


function AppRouter(){
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element= {<Home />}/>
            <Route path="/login" element= {<Login />}/>
            <Route path="/signup" element= {<Signup />}/>
            <Route path="/dashboard" element= {<DashBoard />}/>
        </Routes>
    </BrowserRouter>
    
)

}

export default AppRouter