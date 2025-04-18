import React from 'react';
import './Onboard.scss';
// import languageHook from '../../common/hooks/languageHook';
import NotReady from '../../common/components/notReady/NotReady';
import OnboardHook from './Onboard.hook';
import logo from '../../assets/image/logo.png';


function Onboard(): React.JSX.Element {
    // const language = languageHook();
    const elHook = OnboardHook();

    if (elHook.componentState.isReady) {
        return (
            <div className="onboard-view min-h-screen bg-[#07B07B] flex flex-col justify-between items-center px-6 py-10">
                {/* Nội dung trung tâm */}
                <div className="flex-1 flex flex-col items-center justify-center">
                    <img src={logo} alt="Logo" />
                    <span className="text-white mt-3 text-2xl font-bold">Shopper</span>
                </div>

                {/* Nút ở dưới cùng */}
                <button
                    onClick={() => {
                        elHook.handleLogin();
                    }}
                    className="w-full bg-white text-[#07B07B] font-semibold py-3 rounded-xl"
                >
                    Get Started
                </button>
            </div>
        );
    }
    else {
        return (
            <NotReady></NotReady>
        );
    }
}

export default Onboard;
