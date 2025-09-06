import {
  Button,
  Card,
  CircularProgress,
  Dialog,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import { ESTADOS } from "../LoadBook/LoadBook";
import { DatePicker } from "@mui/x-date-pickers";
import { useChangeData } from "../../hooks/useChangeData";

export const ChangeBookData = ({ open, bookId, bookSelected, setOpen }) => {
  const { bookToModify, handleChange, handleSubmit, setBookToModify } =
    useChangeData(bookSelected, bookId);

  const isFromDate = true;
  return (
    <Dialog open={open} onClose={() => setOpen(!open)}>
      <Card component={"form"} onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            name="titulo"
            value={bookToModify?.titulo}
            onChange={(e) => handleChange(e)}
            required
            fullWidth
          />
          <TextField
            name="autor"
            value={bookToModify?.autor}
            onChange={(e) => handleChange(e)}
            required
            fullWidth
          />
          <TextField
            name="categoria"
            value={bookToModify?.categoria}
            onChange={(e) => handleChange(e)}
            required
            fullWidth
          />
          <DatePicker
            label="fechaPrestamo"
            name="fechaPrestamo"
            value={bookToModify?.fechaPrestamo}
            onChange={(newDate) => handleChange(newDate, isFromDate)}
          />
          <DatePicker
            label="fechaDevolucion"
            name="fechaDevolucion"
            value={bookToModify?.fechaPrestamo}
            onChange={(newDate) => handleChange(newDate, isFromDate)}
          />

          <TextField
            select
            name="estado"
            value={bookSelected?.estado}
            onChange={(e) => handleChange(e)}
            required
            fullWidth
          >
            {ESTADOS.map((opt) => {
              return (
                <MenuItem key={opt} value={opt}>
                  {opt}
                </MenuItem>
              );
            })}
          </TextField>
          <Button type="button" variant="text" disabled={false}>
            Limpiar
          </Button>
          <Button type="submit" variant="text" disabled={false}>
            {"Enviar"}
          </Button>
        </Stack>
      </Card>
    </Dialog>
  );
};
