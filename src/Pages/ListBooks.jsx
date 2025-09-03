import { useEffect, useState } from "react";
import { getBooks } from "../Services/getBooks";
import { Card, CardContent, CircularProgress, Typography } from "@mui/material";
import "./listbooks.css";
import { CardBook } from "../Components/Cardbook/CardBook";
import { useNavigate } from "react-router";

export const ListBooks = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [booksList, setBooksList] = useState([]);

  const handleBooks = async () => {
    const response = await getBooks();
    console.log(response);
    setBooksList(response);
    setIsLoading(false);
  };

  const handleRedirectToDetail = (cardBook) => {
    console.log(cardBook);
    navigate(`/book/${cardBook?._id}`);
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
        booksList?.map((cardBook) => (
          <CardBook
            cardBook={cardBook}
            handleRedirectToDetail={handleRedirectToDetail}
          />
        ))}
    </div>
  );
};
