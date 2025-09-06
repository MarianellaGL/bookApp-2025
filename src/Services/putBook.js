const BOOKS = import.meta.env.VITE_BOOKS;
const AUTH = import.meta.env.VITE_TOKEN_BOOKS;

export const putBook = async (bookId, body) => {
  const response = await fetch(`${BOOKS}/${bookId}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
  console.log(response);
  const result = await response.json();
  console.log(result);
  return result;
};
