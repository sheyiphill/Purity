import React, { useState } from "react";
import styled from "styled-components";

const HeaderComp = () => {
     const [link, setLink] = useState("home");
     const [open, setOpen] = useState(false);

    return (
        <Header>
            <nav className ="navbar">
                <div className="container">
                    <a href ="/" className ="navbar-brand">
                     <img src ="./favicon.ico" alt ="logo" />
                    </a>

                    <ul className="nav d-none d-md-flex">
                        {navList.map((nav, i) => (
                        <li className="nav-item" key={i}>
                            <a 
                                href={nav.link} 
                                className={`nav-link $(nav.link === link ? "active")`}
                                onClick={() => {
                                    setLink(nav.link)
                                    setOpen(false);
                                }}
                                >
                                {nav.title}
                            </a>
                        </li>
                        ))}
                    </ul>
                
                <button 
                    onClick={()=>setOpen(true)} 
                    href="/#" 
                    className="btn toggler d-md-none">
                    <i className="fas fa-bars"></i>
                </button> 
                </div>

                <div className={`mobile-nav ${open ? "d-flex": "d-none"}`}>
                    <button 
                        className="btn text-light fs-1 fw-bold"
                        onClick={() => setOpen(false)}>
                        X
                    </button>
                    <ul className="mobile-nav-menu">
                    {navList.map((nav, i) => (
                    <li className="nav-item" key={i}>
                        <a href={nav.link} 
                            className={`nav-link ${nav.link===link}`}
                            onClick={() => setLink(nav.link)} 
                            >
                                {nav.title}
                            </a>
                        </li>
                        ))}
                    </ul>
                 </div>
            </nav>
        </Header>
    );
};
export default HeaderComp;
 
const Header = styled.header`
    .navbar{
        position: relative;
        &-brand {
            img {
             width:100%;
             max-width: 3.5rem;
            }
        }
        .toggler{
            z-index:2;
        }

        .mobile-nav{
            position:absolute;
            background-color:rgba(0, 146,63,0.3);
            // background-color:rgba(8, 29,17,0.3);
            height:100vh;
            width:100%;
            top: 0;
            right:0;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            &-menu{
                list-style: none;
                margin:0;
                padding:0;
                display:flex;
                flex-direction:column;
                justify-content:space-around;
                align-items:center;
                height: 70%;
            
                .nav-item{
                    margin-bottom:2rem;
                    .nav-link{
                        color:white;
                        font-size:2rem;
                    }
                }
            }
        }
    }
`;

const navList = [
    {title:"Home",link:"#home"},
    {title:"Products",link:"#products"},
    {title:"About Us",link:"#about"},
    {title:"Contact",link:"#contact"},
];