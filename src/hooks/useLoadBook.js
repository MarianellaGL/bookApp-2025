import { useState } from "react";
//import { postBook } from "../Services/postBook";
import { useBookContext } from "../context/BookContext";
import { useNavigate } from "react-router";

export const useLoadBook = (initialState) => {
  const navigate = useNavigate();
  const [valueBook, setValueBook] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const { books, setBooks } = useBookContext();

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setValueBook((v) => ({ ...v, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        titulo: valueBook.titulo.trim(),
        autor: valueBook.autor.trim(),
        categoria: valueBook.categoria.trim(),
        estado: valueBook.estado,
        //fechaPrestamo
        //fechaDevolucion
      };
      setLoading(true);
      //await postBook(body);

      setLoading(false);
      setBooks((prevBooks) => [body, ...prevBooks]);
      setValueBook(initialState);
    } catch (error) {
      console.error(error);

      setLoading(false);
    }
  };

  const handleRedirectToDetail = (cardBook) => {
    console.log(cardBook);
    navigate(`/book/${cardBook?._id}`);
  };
  return {
    handleSubmit,
    handleChange,
    valueBook,
    loading,
    books,
    handleRedirectToDetail,
  };
};
