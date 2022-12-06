import { Model, Schema, model } from "mongoose";

interface IUser {
  email: string;
  password: string;
  role: string;
}

interface IUserMethods {
  createUser(): any;
  findOneUserByEmail(): any;
}

type UserModel = Model<IUser, {}, IUserMethods>;

const schema = new Schema<IUser, UserModel, IUserMethods>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
});

schema.method("findOneUserByEmail", async function findOneUserByEmail() {
  try {
    const user = await model("User").findOne({ email: this.email });
    return user;
  } catch (err) {
    return err;
  }
});

schema.method("createUser", async function createUser() {
  try {
    const user = await model("User").create({
      email: this.email,
      password: this.password,
      role: this.role,
    });
    return true;
  } catch (err) {
    return err;
  }
});

export const User = model<IUser, UserModel>("User", schema);
