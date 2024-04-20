const SERVER_URL = "http://localhost:4009/user";

export function createUrl(path) {
  return `${SERVER_URL}/${path}`;
}

export function createErrorResult(error) {
  return { status: "error", error };
}