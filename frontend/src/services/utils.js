const SERVER_URL = "http://localhost:4002/user";

export function createUrl(path) {
  return `${SERVER_URL}/${path}`;
}

export function createErrorResult(error) {
  return { status: "error", error };
}