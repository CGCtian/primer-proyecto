import { useState } from "react";
import { Typography, TextField, Button, Grid, Paper } from "@mui/material";

const App = () => {
  const [result, setResult] = useState("");
  const [name, setName] = useState("");
  const [num1, setNum1] = useState(undefined);
  const [num2, setNum2] = useState(undefined);

  const sumar = () => {
    const result = Number(num1) + Number(num2);
    setResult(`Hola ${name} el valor es ${result}`);
  };

  return (
    <Grid container spacing={1} p={2}>
      <Grid item xs={12} textAlign='center'>
        <Typography variant='h2' color='primary'>
          Cristian App
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id='name'
          label='Nombre'
          value={name}
          onChange={(evento) => {
            setName(evento.target.value);
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          type='number'
          id='n1'
          label='1do numero'
          value={num1}
          onChange={(evento) => {
            setNum1(evento.target.value);
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          type='number'
          id='n2'
          label='2do numero'
          value={num2}
          onChange={(evento) => {
            setNum2(evento.target.value);
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          fullWidth
          variant='contained'
          color='primary'
          sx={{ height: 60 }}
          onClick={sumar}
        >
          Sumar
        </Button>
      </Grid>
      {result !== "" && (
        <Grid item xs={12}>
          <Paper
            elevation={7}
            sx={{
              bgcolor: "grey",
              height: 150,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant='h3'
              color='primary.contrastText'
              textAlign='center'
            >
              {result}
            </Typography>
          </Paper>
        </Grid>
      )}
    </Grid>
  );
};

export default App;
