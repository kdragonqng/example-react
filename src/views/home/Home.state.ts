import { container } from 'tsyringe';
import { ComponentState } from '../../common/types/componentState';
import { AuthProfileObject } from '../../types/authObject';
import { HomeModel } from './Home.model';
import { AuthService } from '../../services/auth.Service';
import { SystemError } from '../../common/services/baseService';
import { ObjectHelper } from 'one-frontend-framework';
import { AppRouterName } from '../../AppRouter';

export class HomeState extends ComponentState {
    private readonly authService = container.resolve(AuthService);

    public model: HomeModel = new HomeModel();
    public modelPropName = 'model';
    public currentProfile!: AuthProfileObject;

    public async init(): Promise<void> {
        const me = this;
        const isOnboading = await me.handleOnboard();
        if (isOnboading) {
            window.location.href = AppRouterName.onboard;
        } else {
            const profileInfo = await me.authService.getLocalProfile();
            if (ObjectHelper.hasApiError(profileInfo)) {
                me.alertService.addAlert(me.alertType.error.toString(), (profileInfo as SystemError).message);
            }
            else {
                me.currentProfile = profileInfo as AuthProfileObject;
                me.isReady = true;
            }
        }

    }

    public async logout(): Promise<boolean> {
        const me = this;
        me.loadingService.show();
        const response = await me.authService.logout();
        me.loadingService.hide();
        if (ObjectHelper.hasApiError(response)) {
            me.alertService.addAlert(me.alertType.error.toString(), (response as SystemError).message);
        }
        else {
            return true;
        }
        return false;
    }

    public async handleOnboard(): Promise<boolean> {
        const me = this;
        // me.loadingService.show();
        if (me.model.isOnboading) {
            return true;
        } else {
            return false;
        }
    }
}