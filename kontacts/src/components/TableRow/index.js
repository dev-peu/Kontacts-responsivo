import editIcon from "../../assets/icons/pen.svg";
import trashIcon from "../../assets/icons/trash.svg";
import useUtils from "../../hooks/useUtils";
import "./styles.css";

export default function TableRow({ kontact }) {
  const { nome, email, telefone } = kontact;
  const { setModal, setShowDeleteModal, setKontactToDelete } = useUtils();

  return (
    <div className="row-container">
      <span>{nome}</span>
      <span>{email}</span>
      <span>{`(${telefone.slice(0, 2)}) ${telefone.slice(
        2,
        3
      )} ${telefone.slice(3, 7)}-${telefone.slice(7, 11)}`}</span>
      <div className="icons">
        <img
          onClick={() => [setModal({ status: true, type: "edit", kontact })]}
          src={editIcon}
          alt="edit-icon"
        />
        <img
          onClick={() => [
            setKontactToDelete(kontact),
            setShowDeleteModal(true),
          ]}
          src={trashIcon}
          alt="trash-icon"
        />
      </div>
    </div>
  );
}
