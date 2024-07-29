import Navbar from '../components/Navbar.jsx'
import Footer from '../components/footer';

function BaseLayout(props) {
    return (
        <>
            <Navbar />
                {props.children}
            <Footer/>
        </>
    );
}

export default BaseLayout;