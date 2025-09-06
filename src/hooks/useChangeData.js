import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { putBook } from "../Services/putBook";
import { useParams } from "react-router";

const initialState = {
  titulo: "",
  autor: "",
  categoria: "",
  estado: "Disponible",
  fechaPrestamo: dayjs(new Date()),
  fechaDevolucion: dayjs(new Date()),
};
export const useChangeData = (bookSelected, bookId) => {
  const [bookToModify, setBookToModify] = useState(initialState);
  const handleChange = (e, isFromDate) => {
    if (isFromDate) {
      setBookToModify((v) => ({
        ...v,
        fechaPrestamo: dayjs(e),
        fechaDevolucion: dayjs(e),
      }));
      return;
    }
    const { name, value } = e.target;
    setBookToModify((v) => ({ ...v, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        titulo: bookToModify.titulo.trim(),
        autor: bookToModify.autor.trim(),
        categoria: bookToModify.categoria.trim(),
        estado: bookToModify.estado,
        fechaPrestamo: bookToModify.fechaPrestamo.toISOString(),
        fechaDevolucion: bookToModify.fechaDevolucion.toISOString(),
      };
      await putBook(bookId, body);

      setBookToModify(initialState);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const newFechaPrestamo = dayjs(bookSelected?.fechaPrestamo);
    const newFechaDevolucion = dayjs(bookSelected?.fechaDevolucion);
    setBookToModify((prev) => ({
      ...prev,
      ...bookSelected,
      fechaPrestamo: newFechaPrestamo ?? null,
      fechaDevolucion: newFechaDevolucion ?? null,
    }));
  }, [bookSelected]);

  return {
    bookToModify,
    handleChange,
    handleSubmit,
    setBookToModify,
  };
};
