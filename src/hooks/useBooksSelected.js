import { useEffect, useState } from "react";
import { useParams } from "react-router";
//import { getBook } from "../Services/getBook";
import { bookSelectedMockup } from "../mockup/bookSelectedMockup";
import { useBookContext } from "../context/BookContext";

export const useBooksSelected = () => {
  const { id } = useParams();
  const {bookSelected, setBookSelected} = useBookContext()
  const [open, setOpen] = useState(false);

  const handleBook = async () => {
    //const result = await getBook(id);
    //setBookSelected(result);
    setBookSelected(bookSelectedMockup);
  };

  useEffect(() => {
    handleBook();
    //setBookSelected(bookSelectedMockup) o handleBook es LO MISMO en este caso particular
  }, [id]);

  return { bookSelected, id, open, setOpen };
};
