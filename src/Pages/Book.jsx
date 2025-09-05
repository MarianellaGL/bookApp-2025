import { Chip, Divider, Typography } from "@mui/material";
import { useBooksSelected } from "../hooks/useBooksSelected";
import "./Book.css";

export const Book = () => {
  const { bookSelected } = useBooksSelected();

  console.log(bookSelected);
  return (
    <div className="container">
      <div className="cardBookSelected">
        <div className="containerTitle">
          <Typography>
            {bookSelected?.titulo} - {bookSelected?.autor}
          </Typography>
          <Typography>{bookSelected?.categoria}</Typography>
        </div>
        <Divider />
        <div className="containerTitle">
          <Chip label={bookSelected?.estado} color="success" />
        </div>
      </div>
    </div>
  );
};
