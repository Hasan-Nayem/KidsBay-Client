import { Bars } from 'react-loader-spinner';
import './Loader.css';
const Loader = () => {
    return (
        <div className="loader">
            <Bars
                height="80"
                width="80"
                color="#ff8441"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                />
        </div>
    );
};

export default Loader;