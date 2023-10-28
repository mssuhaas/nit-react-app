import './App.css'
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';
import Dummy from './components/test';

function Sec() {
    // const selectedComponent = 1;

    return (
        <div className="App">
            <div className="AppGlass">
                <Sidebar />
                {/* {selectedComponent == 1 && <MainDash />}
                {selectedComponent == 2 && <Dummy />} */}
                <Dummy />
                <RightSide />
            </div>
        </div>
    );
}

export default Sec;
