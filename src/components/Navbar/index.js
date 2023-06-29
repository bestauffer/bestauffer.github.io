import React from "react";
import { NavLink as Link } from "react-router-dom";
import '../../styles/styles.scss';

 
function Navbar (){
    return (
        <div>
        <>
            <div style={styles.nav}>
                <div style={styles.navMenu}>
                    <Link to="/" style={styles.navLink}>
                        Home
                    </Link>
                    <Link to="/about" style={styles.navLink}>
                        About
                    </Link>
                    <Link to="/projects" style={styles.navLink}>
                        Projects
                    </Link>
                    <Link to="/contact" style={styles.navLink}>
                        Contact
                    </Link>
                </div>
            </div>
        </>
        </div>
    );
}

const styles = {
nav: {
    background: "url('https://cdn.pixabay.com/photo/2014/10/29/10/52/binary-code-507786_1280.jpg')",
    height: 85,
    display: "flex",
    justifyContent: "space-around",
    padding: "0.2rem calc((100vw - 1000px) / 2)",
    //zIndex: 12,
    //width: "100%"
},
navMenu: {
    display: "flex",
    alignItems: "center",
    marginRight: -24,
},
navLink: {
    color: "#808080",
  background: "#ffff00",
  display: "flex",
  alignItems: "center",
  textDecoration: 'none',
  justifyContent: "center",
  padding: "0 1rem",
  height: "50%",
  cursor: "pointer",
}
};
 
export default Navbar;