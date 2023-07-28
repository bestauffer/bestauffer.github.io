import React from "react";
import { NavLink as Link } from "react-router-dom";
import '../../styles/styles.scss';


function Navbar() {
    
    return (
        <header>
            <>
                <div style={styles.nav}>
                    <div style={styles.navMenu}>
                        <Link to="/" style={styles.navLink}>
                            <b>Home</b>
                        </Link>
                        <Link to="/about" style={styles.navLink}>
                            <b>About</b>
                        </Link>
                        <Link to="/projects" style={styles.navLink}>
                            <b>Projects</b>
                        </Link>
                        <Link to="/contact" style={styles.navLink}>
                            <b>Contact</b>
                        </Link>
                    </div>
                </div>
            </>
        </header>
    );
}

const color_grey = "#ffffff";

const styles = {
    nav: {
        background: "url('https://cdn.pixabay.com/photo/2014/10/29/10/52/binary-code-507786_1280.jpg')",
        height: 85,
        display: "flex",
        flex: 1,
        justifyContent: "space-around",
        padding: "0.2rem calc((100vw - 1000px) / 2)",
        position: 'fixed',
        zIndex: 12,
        width: "100%"
    },
    navMenu: {
        display: "flex",
        alignItems: "center",
        marginRight: -24,
    },
    navLink: {
        color: color_grey, //grey
        background: "#001800", //yellow
        display: "flex",
        alignItems: "center",
        textDecoration: 'none',
        justifyContent: "center",
        padding: "0 1rem",
        height: "50%",
        cursor: "pointer",
        border: '1px dotted',
        borderColor: color_grey
    }
};

export default Navbar;