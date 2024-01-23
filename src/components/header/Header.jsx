import  { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation, Link } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";

const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();
    const location = useLocation();


    //this useEffect will help bring our scroll back to top when
    // we change our location or when we navigate to another page
    //here we are using useLocation hook bcoz it keeps track of our location as we switch to different routes 
    useEffect(() =>{
        window.scrollTo(0, 0)
    },[location])

    const controlNavbar = () => {
        if(window.scrollY > 200){
            if(window.scrollY > lastScrollY && !mobileMenu){
                setShow('hide')
            }else{
                setShow('show')
            }   
        }else{
            setShow("top")
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar)
        // whenever we add an event in react then always remember to also remove
        // that event to prevent memory leakages in console. so in return statement below we are removing that event
        return () => {
            window.removeEventListener("scroll", controlNavbar)
        }
    },[lastScrollY])


    const searchQueryHandler = (event) => {
        if (event.key === "Enter" || event.type === "click" && query.length > 0) {
            navigate(`/search/${query}`);
            setTimeout(() => {
                setShowSearch(false);
            }, 1000);
        }
    };

    const openSearch = () => {
        setMobileMenu(false)
        setShowSearch(true)
    };

    const openMobileMenu = () => {
        setMobileMenu(true)
        setShowSearch(false)
    };

    const navigationHandler = (type) =>{
        if(type === 'movie'){
            navigate('/explore/movie')
        }else{
            navigate('/explore/tv')
        }
        setMobileMenu(false)
    };


    return (

        //the base class of header element will be 'header' 
        //the 'mobileview' class will be conditionally added to header element if mobileMenu state is true and empty if false
        //and ${show} this part in line below adds the value of the show state variable as a class name to the header element//
        <header className={ `header ${mobileMenu ? "mobileView" : ""} ${show}`}>
            {/* this code is for hamburger menu  */}
            <ContentWrapper>
                <div className="logo">
                    <Link to= "/"> <img src={logo} alt="" /> </Link>
                </div>
                <ul className="menuItems">
                    <li className="menuItem" onClick={() => navigationHandler("movie")}>Movies</li>
                    <li className="menuItem" onClick={() => navigationHandler("tv")}>TV Shows</li>
                     
                   {/* <Link to="/explore/movie"><li className="menuItem">Movies</li></Link> 
                   <Link to="/explore/tv"><li className="menuItem">TV Shows</li></Link>   */}

                    <li className="menuItem">
                        <HiOutlineSearch onClick={openSearch} />
                    </li>
                </ul>

            {/* this code is also for hamburger menu  */}
                <div className="mobileMenuItems">
                    <HiOutlineSearch onClick={openSearch} />
                    {mobileMenu ? <VscChromeClose onClick={() => setMobileMenu(false)}/> 
                                : <SlMenu onClick={openMobileMenu} /> }
                </div>
            </ContentWrapper>

            {/* the below code is for the top seach icon to drop a search field when clicked */}
            {showSearch && <div className="searchBar">
                <ContentWrapper>
                <div className="searchInput">
                        <input type="text"
                            name='searchQuery'
                            placeholder='Search for a movie or tv show'
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                        />
                       <VscChromeClose style={{backgroundColor: 'black'}} onClick={() => setShowSearch(false)}/>
                    </div>
                </ContentWrapper>
            </div>}
        </header>
    );
};

export default Header;