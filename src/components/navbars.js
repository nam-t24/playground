import Logo from '../assets/images/N.png';
import { Link } from "react-router-dom";

const Navbars = () => {
    return(
        <>
        <div className='navbarsBg fixed top-0 left-0 min-h-screen w-screen'></div>
        <div className="min-h-screen">
            {/* Navbar one */}
           <div className="w-full flex justify-between items-center my-5">
                <Link to="/">
                    <img src={Logo} alt="" className = "sm:w-12 w-10 ml-10"></img>
                </Link>
                <div className="navbar flex justify-around py-4 md:px-4 px-1 w-1/2 md:text-xl text-sm rounded-l-full">
                    <Link to="/navbars">Navbars</Link>
                    <div>About</div>
                    <div>FAQ</div>
                    <div>Contact</div>
                </div>
            </div>

            {/* Navbar two */}
            <div className='bg-white flex justify-between items-center my-10 py-2'>
                <Link to="/">
                    <img src={Logo} alt="" className = "sm:w-12 w-10 ml-10"></img>
                </Link>
                <div className='notLastChild flex text-xl font-medium mr-10'>
                    <div className='px-5'>Navbars</div>
                    <div className='px-5'>About</div>
                    <div className='px-5'>FAQ</div>
                    <div className='px-5'>Contact</div>
                </div>
            </div>

            {/* Navbar three */}
            <div className='bg-white flex justify-center items-center max-h-[4rem] h-[4rem] my-10'>
                <div className='flex text-xl font-medium font-light'>
                    <div className='px-8'>Navbars</div>
                    <div className='px-8'>About</div>
                </div>
                <Link to="/" className='w-24 h-24 bg-white rounded-b-full translate-y-4 flex justify-center items-center mx-6'>
                    <img src={Logo} alt="" className = "sm:w-14 w-12"></img>
                </Link>
                <div className='flex text-xl font-light'>
                    <div className='px-8'>FAQ</div>
                    <div className='px-8'>Contact</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbars;