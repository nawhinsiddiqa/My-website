import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>

            <div className="navbar bg-orange-200 shadow-sm w-10/12 mx-auto my-7 top-sticky-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                            <p NavLink to="/"><a>Home</a></p>
                            <p NavLink to="/"><a>About</a></p>
                            <p NavLink to="/"><a>Skills</a></p>
                            <p><a>Education</a></p>
                            <p><a>Projects</a></p>
                            <p><a>Contact</a></p>

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Logo</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4 font-bold">
                        
                        <Link to='/'  ><a>Home</a></Link>
                        <Link to="/"><a>About</a></Link>
                       <Link to="/skills"><a>Skills</a></Link>
                        
                        <Link to="/"><p><a>Education</a></p></Link>
                        <Link to="/projects"><p><a>Projects</a></p></Link>
                        <Link to="/"><p><a>Contact</a></p></Link>


                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Resume</a>
                </div>
            </div>









        </div>
    );
};

export default Navbar;