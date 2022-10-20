export default function authorization() {
  const auth = {
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    },
  };

  return auth;
}
