import { useEffect, useState } from 'react';
// import { AppRouterName } from '../../AppRouter';
import { OnboardState } from './Onboard.state';
import { AppRouterName } from '../../AppRouter';
import { container } from 'tsyringe';
import { StorageService } from '../../common/services/storageService';
import { StorageKey } from '../../common/constants/storageKey';

function OnboardHook() {
    const [componentState, setcomponentState] = useState(new OnboardState());

    const storageService = container.resolve(StorageService);

    function handleLogin() {
        storageService.saveObject(StorageKey.hasVisited, true);
        window.location.href = AppRouterName.login;
    }
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
        handleLogin,
    };
}

export default OnboardHook;