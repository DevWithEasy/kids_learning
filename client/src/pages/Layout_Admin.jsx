const Layout_Admin = ({children}) => {
    return (
        <div
            className='flex'
        >
            <div
                className='w-2/12'
            >

            </div>
            <div
                className='w-10/12'
            >
                {children}
            </div>
        </div>
    );
};

export default Layout_Admin;