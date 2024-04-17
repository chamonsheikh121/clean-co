import PropTypes from "prop-types"
import { NavLink } from "react-router-dom";



const MainLayout = ({ children }) => {


    const navContent =
        <>
            <NavLink to='/about' className={({ isActive }) => isActive ? 'btn btn-primary' : "btn btn-ghost"}>About</NavLink>
            <NavLink to='/contact' className={({ isActive }) => isActive ? 'btn btn-primary' : "btn btn-ghost"}>Contact</NavLink>
            <NavLink to='/login' className={({ isActive }) => isActive ? 'btn btn-primary' : "btn btn-ghost"}>Login</NavLink>
            <NavLink to='/register' className={({ isActive }) => isActive ? 'btn btn-primary' : "btn btn-ghost"} >Register</NavLink>

        </>


    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-base-300">
                    <div className="w-full  max-w-7xl mx-auto">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2">Navbar Title</div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu gap-10 font-semibold uppercase menu-horizontal">
                                {/* Navbar menu content here */}

                                {
                                    navContent
                                }

                            </ul>
                        </div>
                    </div>
                </div>
                {/* Page content here */}
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    {/* Sidebar content here */}
                    {
                        navContent
                    }
                </ul>
            </div>
        </div>
    );
};

export default MainLayout;

MainLayout.protoTypes = {
    Children: PropTypes.node
}