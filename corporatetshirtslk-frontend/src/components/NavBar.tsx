import { Link } from 'react-router-dom';

import menuIcon from '@/assets/icons/menu.svg';
import logoIcon from '@/assets/icons/logo.svg';
import heartIcon from '@/assets/icons/heart.svg';
import userIcon from '@/assets/icons/user.svg';

const NavBar = () => {
    return (
        <header className="md:px-13 md:pt-13 px-5 pt-7 font-beatrice-medium tracking-2px">
            <nav className="flex justify-between items-center ">
                <div className="flex justify-start items-center gap-8">
                    <img src={menuIcon} alt="Menu Icon" width={26} height={16} className="inline-block" />

                    <div className="md:flex items-center gap-8 hidden">
                        <Link to="/" className="">Home</Link>
                        <Link to="/collections" className="">Collections</Link>
                        <Link to="/new" className="">New</Link>
                    </div>
                </div>

                <div className="">
                    <Link to="/">
                        <img src={logoIcon} alt="logo" className="inline-block md:w-13 md:h-13 w-10 h-10" />
                    </Link>
                </div>

                <div className="flex justify-end items-center gap-1">
                    <Link to="/wishlist">
                        <img src={heartIcon} alt="View wishlist" className="inline-block md:w-13 md:h-13 w-10 h-10" />
                    </Link>
                    <Link to="/login">
                        <img src={userIcon} alt="User icon" className="inline-block md:w-13 md:h-13 w-10 h-10" />
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;