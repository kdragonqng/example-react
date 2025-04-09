import React from 'react';
import './Onboard.scss';
// import languageHook from '../../common/hooks/languageHook';
import NotReady from '../../common/components/notReady/NotReady';
import OnboardHook from './Onboard.hook';

function Onboard(): React.JSX.Element {
    // const language = languageHook();
    const elHook = OnboardHook();

    if (elHook.componentState.isReady) {
        return (
            <div className="container">

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
