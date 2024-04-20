import axios from "axios";
import { createUrl, createErrorResult } from "./utils";

export async function register(name, email,password, phone) {
  try {
    const url = createUrl("register");
    const body = { name, email, password, phone};
    const response = await axios.post(url, body);
    return response.data
  } catch (ex) {
    return createErrorResult(ex);
  }
}

export async function login( email,password ) {
  try {
    const url = createUrl("login");
    const body = {  email, password };
    const response = await axios.post(url, body);
    return response.data
  } catch (ex) {
    return createErrorResult(ex);
  }
}