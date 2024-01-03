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
            className='h-screen flex font-kalpurush'
        >
            <div
                className='h-screen w-2/12 p-2 overflow-y-auto shadow-lg'
            >
                <NavLink
                    to='/dashboard'
                    className='block p-2'
                >
                    ড্যাশবোর্ড
                </NavLink>
                <NavLink
                    to='/alphabet/bn'
                    className='block p-2'
                >
                    সব বাংলা বর্ণ
                </NavLink>
                <NavLink
                    to='/alphabet/en'
                    className='block p-2'
                >
                    সব ইংরেজি বর্ণ
                </NavLink>
                <NavLink
                    to='/alphabet/ar'
                    className='block p-2'
                >
                    সব আরবি বর্ণ
                </NavLink>
                <NavLink
                    to='/days'
                    className='block p-2'
                >
                    দিন
                </NavLink>
                <NavLink
                    to='/months'
                    className='block p-2'
                >
                    মাস
                </NavLink>
                <NavLink
                    to='/seasons'
                    className='block p-2'
                >
                    ঋতু
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