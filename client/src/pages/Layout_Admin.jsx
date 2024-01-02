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
                    to='/bn/add/alphabet'
                    className='block p-2'
                >
                    বাংলা বর্ণ যোগ
                </NavLink>
                <NavLink
                    to='/bn/all/alphabet'
                    className='block p-2'
                >
                    সব বাংলা বর্ণ
                </NavLink>
                <NavLink
                    to='/en/add/alphabet'
                    className='block p-2'
                >
                    ইংরেজি বর্ণ যোগ
                </NavLink>
                <NavLink
                    to='/en/all/alphabet'
                    className='block p-2'
                >
                    সব ইংরেজি বর্ণ
                </NavLink>
                <NavLink
                    to='/ar/add/alphabet'
                    className='block p-2'
                >
                    আরবি বর্ণ যোগ
                </NavLink>
                <NavLink
                    to='/ar/all/alphabet'
                    className='block p-2'
                >
                    সব আরবি বর্ণ
                </NavLink>
                <NavLink
                    to='/day/all'
                    className='block p-2'
                >
                    দিন
                </NavLink>
                <NavLink
                    to='/month/all'
                    className='block p-2'
                >
                    মাস
                </NavLink>
                <NavLink
                    to='/season/all'
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