import { useEffect, useState } from 'react';
// import { AppRouterName } from '../../AppRouter';
import { OnboardState } from './Onboard.state';

function OnboardHook() {
    const [componentState, setcomponentState] = useState(new OnboardState());


    /**
     * Load page
     */
    async function loadPage(): Promise<void> {
        const pageState: OnboardState = componentState.copy();
        await pageState.init();
        setcomponentState(pageState);
    }

    useEffect(() => {
        // userEffect implement here
        loadPage();
    }, []);
    return {
        componentState,
    };
}

export default OnboardHook;