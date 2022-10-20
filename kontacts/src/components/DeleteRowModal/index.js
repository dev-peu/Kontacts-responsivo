import { Button, Typography } from "@mui/material";
import closeIcon from "../../assets/icons/close.svg";
import useUtils from "../../hooks/useUtils";
import api from "../../services/api";
import auth from "../../utils/auth";
import "./styles.css";

export default function DeleteRowModal() {
  const { kontactToDelete, setShowDeleteModal } = useUtils();

  async function submit(e) {
    e.preventDefault();

    try {
      await api.delete(`/contatos/${kontactToDelete.id}`, auth());
      setShowDeleteModal(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container modal-container">
      <form onSubmit={submit} className="delete-modal">
        <img
          onClick={() => setShowDeleteModal(false)}
          className="close-icon"
          src={closeIcon}
          alt="close-icon"
        />
        <Typography variant="h1" align="center" className="title">
          Confirme a exclusão
        </Typography>
        <Typography
          variant="span"
          align="center"
        >{`Deseja excluir o contato: "${kontactToDelete.nome}"?`}</Typography>
        <div className="buttons">
          <Button
            className="green"
            color="success"
            type="submit"
            variant="contained"
          >
            EXCLUIR
          </Button>
          <Button
            className="red"
            color="error"
            type="button"
            variant="contained"
            onClick={() => setShowDeleteModal(false)}
          >
            CANCELAR
          </Button>
        </div>
      </form>
    </div>
  );
}
