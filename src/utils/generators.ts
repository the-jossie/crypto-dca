const generateId = (length = 5) => Math.random().toString(36).substr(2, length);

export { generateId };
