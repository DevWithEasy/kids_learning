import { Link, NavLink } from "react-router-dom";

const Layout_Admin = ({children}) => {
    return (
        <div
            className='h-screen flex'
        >
            <div
                className='h-screen w-2/12 p-2 overflow-y-auto shadow-lg'
            >
                <NavLink
                    to='/bangla/add/alphabate'
                    className='block p-2'
                >
                    Add Bangla Alphabate
                </NavLink>
            </div>
            <div
                className='h-screen w-10/12 px-4 py-2 overflow-y-auto'
            >
                {children}
            </div>
        </div>
    );
};

export default Layout_Admin;