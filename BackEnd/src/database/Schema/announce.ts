import { Model, Schema, model } from "mongoose";

interface IAdvertisement {
  name: String;
  picture_Url: String;
  description: String;
  free: boolean;
  stats: Number;
  team_id: Schema.Types.ObjectId;
}

interface IAdvertisementMethods {}

type AdvertisementModel = Model<IAdvertisement, {}, IAdvertisementMethods>;

const schema = new Schema<
  IAdvertisement,
  AdvertisementModel,
  IAdvertisementMethods
>({
  name: { type: String, required: true },
  picture_Url: { type: String, required: true },
  description: { type: String, required: true },
  free: { type: Boolean, required: true, default: true },
  stats: { type: Number, required: true, default: 0 },
  team_id: { type: Schema.Types.ObjectId, required: true },
});

export const Advertisement = model<IAdvertisement, AdvertisementModel>(
  "Advertisement",
  schema
);
