import AnimatedLogo from "../assets/images/logo-animated.gif"


function Loader() {
    return ( 
        <div className="loader">
            <img src={AnimatedLogo} alt="Animated logo" className="logo" />
        </div>
     );
}

export default Loader;