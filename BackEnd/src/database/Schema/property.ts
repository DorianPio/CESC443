import { Model, Schema, model } from "mongoose";

interface IProperties {
  name: String;
  description: String;
  picture_Url: String;
  id_team: Schema.Types.ObjectId;
  id_thing: Schema.Types.ObjectId;
}

interface IPropertiesMethods {}

type PropertiesModel = Model<IProperties, {}, IPropertiesMethods>;

const schema = new Schema<IProperties, PropertiesModel, IPropertiesMethods>({
  name: { type: String, required: true },
  id_team: { type: Schema.Types.ObjectId, required: true },
  id_thing: { type: Schema.Types.ObjectId, required: true },
  description: { type: String, required: true },
  picture_Url: { type: String, required: true },
});

export const Properties = model<IProperties, PropertiesModel>(
  "Properties",
  schema
);
