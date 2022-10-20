import { Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import closeIcon from "../../assets/icons/close.svg";
import useUtils from "../../hooks/useUtils";
import api from "../../services/api";
import auth from "../../utils/auth";
import "./styles.css";

export default function TableModal(props) {
  const { modal, setModal, err, setErr } = useUtils();
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
  });

  useEffect(() => {
    setErr({ status: false });
  }, [form, setErr]);

  useEffect(() => {
    if (props.type === "edit") {
      const { nome, email, telefone } = modal.kontact;
      setForm({
        nome,
        email,
        telefone,
      });
    }
  }, [props.type, modal.kontact]);

  async function submit(e) {
    e.preventDefault();
    const { nome, email, telefone } = form;

    if (props.type === "add") {
      try {
        if (!nome) {
          return setErr({
            status: true,
            local: "inputName",
            error: "O nome é obrigatório!",
          });
        }

        if (!email) {
          return setErr({
            status: true,
            local: "inputEmail",
            error: "O email é obrigatório!",
          });
        }

        if (telefone.length < 11 || telefone.length > 11) {
          return setErr({
            status: true,
            local: "inputTel",
            error: "Digite um número de contato de 11 dígitos válido.",
          });
        }

        await api.post("/contatos", { ...form }, auth());
        setModal({ status: false });
      } catch (error) {
        console.log(error);
      }
    }

    if (props.type === "edit") {
      try {
        if (!nome) {
          return setErr({
            status: true,
            local: "inputName",
            error: "O nome é obrigatório!",
          });
        }

        if (!email) {
          return setErr({
            status: true,
            local: "inputEmail",
            error: "O email é obrigatório!",
          });
        }

        if (telefone.length < 11 || telefone.length > 11) {
          return setErr({
            status: true,
            local: "inputTel",
            error: "Digite um número de contato de 11 dígitos válido.",
          });
        }

        const { id } = modal.kontact;
        await api.put(`/contatos/${id}`, { ...form }, auth());
        setModal({ status: false });
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <div className="container modal-container">
      <div className="modal">
        <form onSubmit={submit}>
          <img
            className="close-icon"
            onClick={() => setModal({ status: false })}
            src={closeIcon}
            alt="close-icon"
          />
          <Typography align="center" className="title" variant="h1">
            {props.type === "add" ? "Novo Contato" : "Editar Contato"}
          </Typography>
          <div className="inputs">
            <TextField
              type="text"
              label="Nome"
              name="name"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              error={err.local === "inputName" ? true : false}
              helperText={err.local === "inputName" ? err.error : ""}
            />
            <TextField
              type="email"
              label="E-mail"
              name="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              error={err.local === "inputEmail" ? true : false}
              helperText={err.local === "inputEmail" ? err.error : ""}
            />
            <TextField
              type="number"
              label="Telefone"
              name="tel"
              value={form.telefone}
              onChange={(e) => setForm({ ...form, telefone: e.target.value })}
              error={err.local === "inputTel" ? true : false}
              helperText={err.local === "inputTel" ? err.error : ""}
            />
          </div>
          <div className="buttons">
            <Button
              className="green"
              color="success"
              type="submit"
              variant="contained"
            >
              {props.type === "add" ? "Adicionar" : "Salvar"}
            </Button>
            <Button
              className="red"
              onClick={() =>
                props.type === "add"
                  ? setForm({ nome: "", email: "", telefone: "" })
                  : setModal({ status: false })
              }
              color="error"
              type="button"
              variant="contained"
            >
              {props.type === "add" ? "Limpar" : "Cancelar"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
