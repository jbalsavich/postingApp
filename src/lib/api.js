import { isServer } from "solid-js/web";
const pokemon = (path) => `https://pokeapi.co/api/v2/${path}`;
export default async function fetchAPI(path) {
  const url = path.startsWith("user") ? user(path) : pokemon(path);
  const headers = isServer
    ? {
        "User-Agent": "chrome",
      }
    : {};
  try {
    let response = await fetch(url, {
      headers,
    });
    let text = await response.text();
    try {
      if (text === null) {
        return {
          error: "Not found",
        };
      }
      return JSON.parse(text);
    } catch (e) {
      console.error(`Recevied from API: ${text}`);
      console.error(e);
      return {
        error: e,
      };
    }
  } catch (error) {
    return {
      error,
    };
  }
}
