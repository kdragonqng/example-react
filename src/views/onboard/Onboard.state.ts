import { ComponentState } from '../../common/types/componentState';
import { OnboardModel } from './Onboard.model';

export class OnboardState extends ComponentState {
    public model = new OnboardModel();
    public modelPropName = 'onboardModel';

    public async init(): Promise<void> {
        const me = this;
        me.isReady = true;
    }

}