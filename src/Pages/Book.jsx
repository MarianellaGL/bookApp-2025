import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getBook } from "../Services/getBook";

export const Book = () => {
  const { id } = useParams();
  const [bookSelected, setBookSelected] = useState();

  const handleBook = async () => {
    const result = await getBook(id);
    setBookSelected(result);
  };

  useEffect(() => {
    handleBook();
  }, [id]);

  return (
    <div>
      <div>
        <Typography>{bookSelected?._id}</Typography>
      </div>
    </div>
  );
};
