import 'reflect-metadata';
import { useEffect, useState } from 'react';
import { HomeState } from './Home.state';
import { AppRouterName } from '../../AppRouter';

export function HomeHook() {
    const [componentState, setcomponentState] = useState(new HomeState());

    async function loadData(): Promise<void> {
        const pageState: HomeState = componentState.copy();
        await pageState.init();
        setcomponentState(pageState);
    }

    async function logout(): Promise<void> {
        const pageState: HomeState = componentState.copy();
        const loginStatus = await pageState.logout();
        if (loginStatus) {
            window.location.href = AppRouterName.login;
        }
        else {
            setcomponentState(pageState);
        }
    }

    useEffect(() => {
        // userEffect implement here
        loadData();
    }, []);
    return {
        componentState,
        logout
    };
}