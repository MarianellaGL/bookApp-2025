import { useEffect, useState } from "react";
import { getBooks } from "../Services/getBooks";
import { Card, CardContent, CircularProgress, Typography } from "@mui/material";
import "./listbooks.css";
import { CardBook } from "../Components/Cardbook/CardBook";

export const ListBooks = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [booksList, setBooksList] = useState([]);

  const handleBooks = async () => {
    const response = await getBooks();
    console.log(response);
    setBooksList(response);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    handleBooks();
  }, []);

  if (isLoading) {
    return <CircularProgress color="secondary" />;
  }

  return (
    <div className="listbooks">
      {!isLoading &&
        booksList.length > 0 &&
        booksList?.map((cardBook) => <CardBook cardBook={cardBook} />)}
    </div>
  );
};
