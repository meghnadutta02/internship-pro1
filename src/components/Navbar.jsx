import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { useMediaQuery } from "react-responsive";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";
import { AiOutlineLogin } from "react-icons/ai"

const Navbar = ({search}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 640 }); // Define the breakpoint for mobile screens
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  }, []);

  const handleNavClick = (path) => {
    if (isMobile) {
      setShowDropdown(false);
      navigate(path);
    } else {
      navigate(path);
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const styles = "font-semibold py-3 text-md cursor-pointer";
  const styles1 = "font-semibold  py-1.5 px-1 text-sm cursor-pointer";
  return (
    <header className="border-b shadow-md sticky top-0 bg-[#91C8E4] left-0 right-0 z-40 p-1.5">
      <div className="w-5/6 mx-auto flex justify-between items-center">
        <div className="flex items-center gap-1.5" onClick={() => handleNavClick("/")}>
          <img
            src={logo}
            alt="logo"
            className="sm:h-9 sm:w-9 h-7 w-7 cursor-pointer"

          />
          <span className="logo text-2xl cursor-pointer">CodeSphere</span>
        </div>
        {isMobile ? (
          <>
            <div
              className={`${showDropdown ? "block" : "hidden"
                } fixed top-0 left-0 right-0 bg-[#91C8E4] border-b p-3`}
            >
              <div
                className={`${styles1} ${location.pathname === "/" && "underline decoration-[#4682A9] underline-offset-8"
                  }`}
                onClick={() => handleNavClick("/")}
              >
                Home
              </div>
              
              
              {!loggedIn ? (
                <div
                  className={`${styles1} ${location.pathname === "/sign-in" && "underline decoration-[#4682A9] underline-offset-8"
                    }`}
                  onClick={() => handleNavClick("/sign-in")}
                >
                  Sign in
                </div>
              ) : <div
                className={styles}
                onClick={() => auth.signOut()}
              >
                Sign Out<AiOutlineLogin className="inline ml-1 w-5 h-5" />
              </div>
              }
            </div>
            <div
              className="cursor-pointer sm:hidden"
              onClick={() => toggleDropdown()}
            >
              {showDropdown ? (
                <FiX className="h-6 w-6 z-50 absolute top-5 right-5" />
              ) : (
                <FiMenu className="h-6 w-6 my-3" />
              )}
            </div>
          </>
        ) : (

          <div className="flex md:gap-9 gap-6">
            <div
              className={`${styles} ${location.pathname === "/" &&
                "border-b-[3px]  border-b-[#4682A9]"
                }`}
              onClick={() => handleNavClick("/")}
            >
              Home
            </div>
            
            {!loggedIn ? (
              <div
                className={`${styles} ${location.pathname === "/sign-in" &&
                  "border-b-[3px] border-b-[#4682A9]"
                  }`}
                onClick={() => handleNavClick("/sign-in")}
              >
                Sign in
              </div>
            ) : (



              <div
                className={styles}
                onClick={() => auth.signOut()}
              >
                Sign Out<AiOutlineLogin className="inline ml-1 w-5 h-5" />
              </div>

            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
