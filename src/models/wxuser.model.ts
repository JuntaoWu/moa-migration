
import { prop, Typegoose, ModelType, InstanceType } from "typegoose";

/**
 * WxUser Schema
 */
export class WxUser extends Typegoose {
    @prop()
    userId: Number;
    @prop()
    wxgameOpenId: String;
    @prop()
    nativeOpenId: String;
    @prop()
    unionId: String;
    @prop()
    session_key: String;
    @prop()
    avatarUrl?: String;
    @prop()
    city?: String;
    @prop()
    country?: String;
    @prop()
    gender?: Number;
    @prop()
    language?: String;
    @prop()
    nickName?: String;
    @prop()
    province?: String;
    @prop()
    registeredAt?: Date;
    @prop()
    migrated?: Boolean;
}

const WxUserModel = new WxUser().getModelForClass(WxUser, {
    schemaOptions: {
        timestamps: true,
    }
});

export default WxUserModel;