const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5001";

const headers = new Headers()
headers.append("Content-Type", "application/json")

async function fetchJson(url, options, onCancel) {
  try {
    const response = await fetch(url, options);

    if (response.status === 204) {
      return null;
    }

    const payload = await response.json();

    if (payload.error) {
      return Promise.reject({ message: payload.error });
    }
    return payload.data;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error(error.stack);
      throw error;
    }
    return Promise.resolve(onCancel);
  }
}

export async function getItemId(itemName, signal) {
    const url = `${API_BASE_URL}/searchRequest/${itemName}`
    return await fetchJson(url, {headers, signal }, [])
}
