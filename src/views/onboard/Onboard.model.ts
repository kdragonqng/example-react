import { BaseModel } from "../../common/types/baseModel";

export class OnboardModel extends BaseModel {
    public firstOpenApp: boolean = true;

    public isValid(): boolean {
        const me = this;
        me.errors = [];
        if (me.errors.length == 0) return true;
        return false;
    }

}