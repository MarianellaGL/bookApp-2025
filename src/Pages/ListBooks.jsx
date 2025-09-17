import { useEffect, useState } from "react";
import { Card, CardContent, CircularProgress, Typography } from "@mui/material";
import "./listbooks.css";
import { CardBook } from "../Components/Cardbook/CardBook";
import { useNavigate } from "react-router";
import { useBookContext } from "../context/BookContext";
import { getBookMockup } from "../mockup/getBookMockup";
import { STATE, useThemeContext } from "../context/ThemeContext";

export const ListBooks = () => {
  const { theme } = useThemeContext();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { books, setBooks } = useBookContext();

  /*const handleBooks = async () => {
    const response = await getBooks();
    console.log(response);
    setBooks(response);
    setIsLoading(false);
  };*/

  const handleRedirectToDetail = (cardBook) => {
    navigate(`/book/${cardBook?._id}`);
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setBooks(getBookMockup);
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return <CircularProgress color="secondary" />;
  }

  return (
    <div
      className="listbooks"
      style={{
        backgroundColor: theme === STATE.LIGHT ? "#d7d5d5ff" : "#000000",
      }}
    >
      {!isLoading &&
        books.length > 0 &&
        books?.map((cardBook) => (
          <CardBook
            cardBook={cardBook}
            handleRedirectToDetail={handleRedirectToDetail}
          />
        ))}
    </div>
  );
};
