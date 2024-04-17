import { Outlet } from "react-router-dom";


const Admin = () => {
    return (
        <div className="h-screen flex">

            <div className="bg-blue-200 flex-[1]">
                <h1>hi</h1>
                
            </div>
            <div className="bg-green-200 flex-[3]">
            
            <Outlet></Outlet>

            </div>
            
        </div>
    );
};

export default Admin;