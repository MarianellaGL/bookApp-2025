import {
  Button,
  Card,
  CardContent,
  CardHeader,
  MenuItem,
  Stack,
  TextField,
  CircularProgress,
} from "@mui/material";

import { useLoadBook } from "../../hooks/useLoadBook";

const initialState = {
  titulo: "",
  autor: "",
  categoria: "",
  estado: "Disponible",
  fechaPrestamo: "",
  fechaDevolucion: "",
};

export const ESTADOS = ["Disponible", "Prestado"];

export const LoadBook = () => {
  const { handleChange, handleSubmit, valueBook, loading } =
    useLoadBook(initialState);

  return (
    <Card component="form" onSubmit={handleSubmit} noValidate>
      <CardHeader title="Nuevo libro" subheader="Carga un nuevo libro" />
      <CardContent>
        <Stack spacing={2}>
          <TextField
            label="Titulo"
            name="titulo"
            value={valueBook.titulo}
            onChange={(e) => handleChange(e)}
            required
            fullWidth
          />
          <TextField
            label="Autor"
            name="autor"
            value={valueBook.autor}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Categoria"
            name="categoria"
            value={valueBook.categoria}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            select
            label="Estado"
            name="estado"
            value={valueBook.estado}
            onChange={handleChange}
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
          <Button type="button" variant="text" disabled={loading}>
            Limpiar
          </Button>
          <Button type="submit" variant="text" disabled={loading}>
            {loading ? <CircularProgress /> : "Enviar"}
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};
