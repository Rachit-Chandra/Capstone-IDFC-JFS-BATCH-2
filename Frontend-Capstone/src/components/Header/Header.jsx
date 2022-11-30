import React, { useRef, useEffect } from "react";
import { Container } from "reactstrap";
// import logo from "../../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

import "../../styles/header.css";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Medicines",
    path: "/medicines",
  },
  {
    display: "Request Medicine",
    path: "/request",
  },
  {
    display: "Contact Us",
    path: "/contact",
  },
  {
    display: "Cart",
    path: "/cart",
  }
];


const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  const fun = () =>{
    console.log("sadas");
    // alert("tt");
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (
  //       document.body.scrollTop > 80 ||
  //       document.documentElement.scrollTop > 80
  //     ) {
  //       headerRef.current.classList.add("header__shrink");
  //     } else {
  //       headerRef.current.classList.remove("header__shrink");
  //     }
  //   });

  //   return () => window.removeEventListener("scroll");
  // }, []);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center gap-4  justify-content-between">
          <div className="logo " >
            {/* <img src={logo} alt="logo" /> */}
            <h1>Quick Medi</h1>
          </div>

          {/* ======= menu ======= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-right gap-4 " >
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>
          

          {/* ======== nav right icons ========= */}
          <div className="nav__right d-flex align-items-center gap-5 justify-content-between">
            <span className="user cart__icon" onClick={toggleCart}>
             <i class="ri-first-aid-kit-line"></i>
              {/* <span className="cart__badge">{totalQuantity}</span> */}
            </span>

            <span className="user" onclick={fun}>
              <Link to="/login" >
                {/* <i class="ri-user-line">{sessionStorage.getItem("name")}</i> */}
                <i>{sessionStorage.getItem("name")}</i>
              </Link>
            </span>

            {/* <span className="user">
              <h5>{sessionStorage.getItem("name")}</h5>
              <i class="ri-user-line">{sessionStorage.getItem("name")}</i>
            </span> */}
            <span className="mobile__menu" onClick={toggleMenu}>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
