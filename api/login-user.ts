export async function loginUser(username: string, password: string) {
  return fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
      expiresInMins: 30, // optional, defaults to 60
    }),
    credentials: "omit", // Include cookies (e.g., accessToken) in the request
  }).then((res) => {
    if (res.status === 400) {
      return res.json().then((json) => Promise.reject(json));
    }
    return res.json();
  });
}
