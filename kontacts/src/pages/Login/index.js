import { Button, Typography, TextField, Alert } from "@mui/material";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./styles.css";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    senha: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    const { email, senha } = form;

    if (!email || email === "") {
      return setError("Preencha todos os campos!");
    }

    if (!senha || senha === "") {
      return setError("Preencha todos os campos!");
    }

    try {
      const response = await api.post("/login", form);
      localStorage.setItem("token", `Bearer ${response.data.token}`);

      navigate("/dashboard");
    } catch (error) {
      setError(error.response.data);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");

    token && navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="container login">
      <aside className="aside-image" />
      <main className="login-content">
        <form onSubmit={submit}>
          <Typography align="left" className="welcome" variant="h3">
            Bem vindo
          </Typography>
          <Typography className="form-title" variant="h1">
            Faça o login com sua conta
          </Typography>
          <section className="inputs">
            <TextField
              type="email"
              label="E-mail"
              name="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              onFocus={() => setError("")}
            />
            <TextField
              type="password"
              label="Senha"
              name="password"
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
          <Button type="submit" color="success" variant="contained">
            Login
          </Button>
        </form>
        <Typography variant="span">
          Não tem cadastro? <Link to={"/cadastro"}>Clique aqui!</Link>
        </Typography>
      </main>
    </div>
  );
}
