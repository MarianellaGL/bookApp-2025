import { useState } from "react";
import { postBook } from "../Services/postBook";

export const useLoadBook = (initialState) => {
  const [valueBook, setValueBook] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setValueBook((v) => ({ ...v, [name]: value }));
  };

  console.log(valueBook);

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
      await postBook(body);

      setLoading(false);
      setValueBook(initialState);
    } catch (error) {
      console.error(error);

      setLoading(false);
    }
  };

  return { handleSubmit, handleChange, valueBook, loading };
};
