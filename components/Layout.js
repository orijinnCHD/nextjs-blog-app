import Header from "./Header";
import Navbar from "./Navbar";
// children  =notre apps
// le layout permet une accessibilité un composant dans l'ensemble de apps
// ainsi on englobe <component> dans le _app.js 
//
const Layout = ({children}) => {
    return (
        //
        <>
            <Navbar/>
            <Header/>
            <main>{children}</main>

        </>
    );
};

export default Layout;