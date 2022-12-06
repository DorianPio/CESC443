import { Model, Schema, model } from "mongoose";

interface IVirtualSlot {
  name: String;
  picture_Url: String;
  description: String;
  free: boolean;
  stats: Number;
  team_id: Schema.Types.ObjectId;
}

interface IVirtualSlotMethods {}

type VirtualSlotModel = Model<IVirtualSlot, {}, IVirtualSlotMethods>;

const schema = new Schema<IVirtualSlot, VirtualSlotModel, IVirtualSlotMethods>({
  name: { type: String, required: true },
  picture_Url: { type: String, required: true },
  description: { type: String, required: true },
  free: { type: Boolean, required: true, default: true },
  stats: { type: Number, required: true, default: 0 },
  team_id: { type: Schema.Types.ObjectId, required: true },
});

export const VirtualSlot = model<IVirtualSlot, VirtualSlotModel>(
  "VirtualSlot",
  schema
);
