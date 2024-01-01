import { Link, NavLink } from "react-router-dom";

const Layout_Admin = ({children}) => {
    const links = [
        {
            heading : 'Bangla',
            paths : [
                {
                    path : '/bn/add/alphabet',
                    title : 'Add',
                    icon : ''
                },
                {
                    path : '/bn/all/alphabet/',
                    title : '',
                    icon : ''
                },
                {
                    path : '',
                    title : '',
                    icon : ''
                },
            ]
        },
        {
            heading : 'English',
            paths : [
                {
                    path : '',
                    title : '',
                    icon : ''
                }
            ]
        },
        {
            heading : 'Math',
            paths : [
                {
                    path : '',
                    title : '',
                    icon : ''
                }
            ]
        },
        {
            heading : '',
            paths : [
                {
                    path : '',
                    title : '',
                    icon : ''
                }
            ]
        },
    ]
    return (
        <div
            className='h-screen flex'
        >
            <div
                className='h-screen w-2/12 p-2 overflow-y-auto shadow-lg'
            >
                <NavLink
                    to='/dashboard'
                    className='block p-2'
                >
                    Dashboard
                </NavLink>

                <NavLink
                    to='/bn/add/alphabet'
                    className='block p-2'
                >
                    Add Bangla Alphabate
                </NavLink>
                <NavLink
                    to='/bn/all/alphabet'
                    className='block p-2'
                >
                    All
                </NavLink>
                <NavLink
                    to='/en/add/alphabet'
                    className='block p-2'
                >
                    Add english Alphabate
                </NavLink>
                <NavLink
                    to='/en/all/alphabet'
                    className='block p-2'
                >
                    All
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