const BOOKS = import.meta.env.VITE_BOOKS;
const AUTH = import.meta.env.VITE_TOKEN_BOOKS;

/*export const postBook = async (body) => {
  const response = await fetch(`${BOOKS}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `${AUTH}`,
    },
    body: JSON.stringify(body),
  });
  console.log(response);
  const result = await response.json();
  console.log(result);
  return result;
};
*/