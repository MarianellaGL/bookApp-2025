import { Button, Chip, Divider, Typography } from "@mui/material";
import { useBooksSelected } from "../hooks/useBooksSelected";
import "./Book.css";
import { ChangeBookData } from "./ChangeBookData/ChangeBookData";

export const Book = () => {
  const { bookSelected, id, open, setOpen } = useBooksSelected();

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
          <Button type="button" onClick={() => setOpen(!open)}>
            {" "}
            Modificar{" "}
          </Button>
        </div>
      </div>
      <ChangeBookData
        open={open}
        bookSelected={bookSelected}
        bookId={id}
        setOpen={setOpen}
      />
    </div>
  );
};
