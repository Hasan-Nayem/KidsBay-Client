import './Main.css';
import Header from '../Header/Header';
import { Outlet, ScrollRestoration, useNavigation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';

const Main = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
                {
                    navigation.state === 'loading'? <Loader></Loader> : <Outlet></Outlet>
                }
            <Footer></Footer>
            <ScrollRestoration />
        </div>
    );
};

export default Main;