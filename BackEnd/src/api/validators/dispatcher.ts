const dispatcherMethod = (req, res, next, methodContent) => {
  for (const methodName in methodContent) {
    if (methodName.toString() === req.method) {
      methodContent[methodName](req, res, next);
    }
  }
};

export const dispatcher = {
  dispatcherMethod,
};
