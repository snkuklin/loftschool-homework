const URL = "https://loft-taxi.glitch.me/register";

interface AuthData {
  email: string;
  password: string;
}

export const login = async (data: AuthData) => {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  return await response.json();
};
