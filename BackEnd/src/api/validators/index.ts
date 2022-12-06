import { dispatcher } from "./dispatcher";

export const createMethodForDispatch = (req, res, next, methodContent) => {
  dispatcher.dispatcherMethod(req, res, next, methodContent);
};
