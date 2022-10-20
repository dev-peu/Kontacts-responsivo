import { Button, TextField, Typography, Alert } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./styles.css";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
  });
  const [error, setError] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      await api.post("/usuarios", form);
      navigate("/login");
    } catch (error) {
      setError(error.response.data);
    }
  }
  return (
    <div className="container register">
      <main className="content">
        <form onSubmit={submit}>
          <Typography align="center" className="form-title" variant="h1">
            Cadastre-se
          </Typography>
          <section className="inputs">
            <TextField
              label="Nome"
              name="name"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              onFocus={() => setError("")}
            />
            <TextField
              label="E-mail"
              name="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              onFocus={() => setError("")}
            />
            <TextField
              label="Senha"
              name="password"
              type="password"
              value={form.senha}
              onChange={(e) => setForm({ ...form, senha: e.target.value })}
              onFocus={() => setError("")}
            />
            {error && (
              <Alert
                sx={{ color: "rgba(197, 0, 13, 0.65)" }}
                variant="outlined"
                severity="error"
              >
                {error}
              </Alert>
            )}
          </section>
          <section className="buttons">
            <Button
              type="submit"
              color="success"
              className="submit"
              variant="contained"
            >
              cadastrar
            </Button>
            <Button
              onClick={() => navigate("/login")}
              type="button"
              color="error"
              className="cancel"
              variant="contained"
            >
              cancelar
            </Button>
          </section>
        </form>
        <Typography variant="span">
          Já tem cadastro? <Link to={"/login"}>Clique aqui!</Link>
        </Typography>
      </main>
      <aside className="aside-image" />
    </div>
  );
}
