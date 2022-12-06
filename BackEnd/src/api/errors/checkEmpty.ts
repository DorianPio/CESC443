const emptyValidator = (...args: any[]): { error: string } | undefined => {
  if (args.every((x) => typeof x !== "undefined")) {
    return undefined;
  }
  return {
    error:
      "Missing parameter ! Please check the documentation for more information",
  };
};

export const manageErrors = {
  emptyValidator,
};
