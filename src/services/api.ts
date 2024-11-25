import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchClips = async (
  params: Record<string, string | undefined>
) => {
  const VITE_SECRET_KEY = import.meta.env.VITE_SECRET_KEY;

  try {
    const response = await axios.get(API_URL, {
      params: {
        "x-storyteller-api-key": VITE_SECRET_KEY,
        ClientPlatform: "iOS",
        ClientVersion: "10.6.2",
        ...params,
      },
    });
    return response.data;
  } catch (err) {
    throw new Error(
      axios.isAxiosError(err)
        ? err.response?.data?.message || "Failed to fetch data from the server"
        : "An unexpected error occurred."
    );
  }
};
