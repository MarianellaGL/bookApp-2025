import { Card, CardContent, Chip, Typography } from "@mui/material";
import "./CardBook.css";

export const CardBook = ({ handleRedirectToDetail, cardBook }) => {
  return (
    <Card className="cardStyle" key={cardBook._id} onClick={()=> handleRedirectToDetail(cardBook)}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <div className="bookContent">
          <Typography>{cardBook?.titulo}</Typography>
          <Typography>{cardBook?.autor}</Typography>
          <Typography>{cardBook?.categoria}</Typography>
        </div>

        <Chip label={cardBook?.estado} color="success" />
      </CardContent>
    </Card>
  );
};
