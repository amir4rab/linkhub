import MobileMenu from "./mobileMenu/mobileMenu";
import NavbarDesktop from "./navbarDesktop/navbarDesktop";
import { useRouter } from 'next/router'

function Layout({ children }) {
    const router = useRouter();
    return (
        <>
            <NavbarDesktop router={ router } />
            <MobileMenu router={ router } />
            { children }
        </>
    );
};

export default Layout;
