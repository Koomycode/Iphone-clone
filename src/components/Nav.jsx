import Logo from "../assets/images/Logo.svg"
import Search from "../assets/images/Search.svg"
import Store from "../assets/images/Store.svg"


function Nav() {
    return (
        <nav className="nav-wrapper">
            <div className="nav-content">
                <ul className="list-styled">
                    <li>
                        <img src={Logo} alt="Apple Logo" />
                    </li>
                    <li>
                        <a href="#" className="link-styled">
                            Store
                        </a>
                    </li>
                    <li>
                        <a href="#" className="link-styled">
                            Mac
                        </a>
                    </li>
                    <li>
                        <a href="#" className="link-styled">
                            IPad
                        </a>
                    </li>
                    <li>
                        <a href="#" className="link-styled">
                            IPhone
                        </a>
                    </li>
                    <li>
                        <a href="#" className="link-styled">
                            Watch
                        </a>
                    </li>
                    <li>
                        <a href="#" className="link-styled">
                            AirPods
                        </a>
                    </li>
                    <li>
                        <a href="#" className="link-styled">
                            Tv & Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="link-styled">
                            Entertainment
                        </a>
                    </li>
                    <li>
                        <a href="#" className="link-styled">
                            Accessories
                        </a>
                    </li>
                    <li>
                        <a href="#" className="link-styled">
                            Support
                        </a>
                    </li>
                    <li>
                        <img src={Search} alt="Search icon" />
                    </li>
                    <li>
                        <img src={Store} alt="Store icon" />  
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;