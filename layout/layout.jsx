import MobileMenu from "./mobileMenu/mobileMenu";
import NavbarDesktop from "./navbarDesktop/navbarDesktop";

function Layout({ children }) {
    return (
        <>
            <NavbarDesktop />
            <MobileMenu />
            { children }
        </>
    );
};

export default Layout;
