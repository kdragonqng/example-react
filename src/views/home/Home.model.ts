import { BaseModel } from '../../common/types/baseModel';

export class HomeModel extends BaseModel {
    public isOnboading: boolean = true;
    public isValid(): boolean {
        return true;
    }
}