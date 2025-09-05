import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getBook } from "../Services/getBook";

export const useBooksSelected = () => {
  const { id } = useParams();
  const [bookSelected, setBookSelected] = useState();

  const handleBook = async () => {
    const result = await getBook(id);
    setBookSelected(result);
  };

  useEffect(() => {
    handleBook();
  }, [id]);

  return { bookSelected };
};
