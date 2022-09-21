import { Schema, model } from "mongoose";

interface IUser {
    username: string,
    password: string,
    google: {
        id: string,
    }
}

const userSchema = new Schema<IUser>({
    username: String,
    password: String,
    google: {
        id: String,
    }
})

const UserModel = model<IUser>('User', userSchema);

export {UserModel}