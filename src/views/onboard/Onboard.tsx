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
            <div className="onboard-view flex-1 bg-[#07B07B] items-center justify-center flex-col" >
                <img src={logo} />
                <text className='text-white mt-3 text-2xl font-bold'>
                    Shopper
                </text>
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
