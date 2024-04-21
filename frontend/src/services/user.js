import axios from "axios";
import { createUrl, createErrorResult } from "./utils";

export async function register(name, email, password) {
  try {
    const url = createUrl("register");
    const body = { name, email, password };
    const response = await axios.post(url, body);
    return response.data;
  } catch (ex) {
    return createErrorResult(ex, "registration unsuccessful");
  }
}

export async function login(email, password) {
  try {
    const url = createUrl("login");
    const body = { email, password };
    const response = await axios.post(url, body);
    return response.data;
  } catch (ex) {
    return createErrorResult(ex, "login unsuccessful");
  }
}

export async function searchblog(title, contents) {
  try {
    const url = createUrl("searchblog");
    const token = sessionStorage.getItem("token");
    const body = { title, contents };
    const response = await axios.post(url, body, {
      headers: {
        token,
      },
    });
    return response.data;
  } catch (ex) {
    return createErrorResult(ex, "blog not found");
  }
}

export async function newblog(title, description) {
  try {
    const url = createUrl("newblog");
    const token = sessionStorage.getItem("token");
    const body = { title, description };
    const response = await axios.post(url, body, {
      headers: {
        token,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (ex) {
    return createErrorResult(ex, "adding blog failed");
  }
}

export async function addcategories(title, description) {
  try {
    const url = createUrl("addcategories");
    const token = sessionStorage.getItem("token");
    const body = { title, description };
    const response = await axios.post(url, body, {
      headers: {
        token,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (ex) {
    return createErrorResult(ex, "adding categories failed");
  }
}
