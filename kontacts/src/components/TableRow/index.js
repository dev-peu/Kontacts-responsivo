import editIcon from "../../assets/icons/pen.svg";
import trashIcon from "../../assets/icons/trash.svg";
import clipIcon from "../../assets/icons/clip.svg";
// import useUtils from "../../hooks/useUtils";
import "./styles.css";

export default function TableRow({ kontact }) {
  // const { nome, email, telefone } = kontact;
  // const { setKontactToDelete, setModal, setShowDeleteModal } = useUtils();


  return (
    // <div className="row-container">
    //   <span>{nome}</span>
    //   <span>{email}</span>
    //   <span>{`(${telefone.slice(0, 2)}) ${telefone.slice(
    //     2,
    //     3
    //   )} ${telefone.slice(3, 7)}-${telefone.slice(7, 11)}`}</span>
    //   <div className="icons">
    //     <img
    //       onClick={() => [setModal({ status: true, type: "edit", kontact })]}
    //       src={editIcon}
    //       alt="edit-icon"
    //     />
    //     <img
    //       onClick={() => [
    //         setKontactToDelete(kontact),
    //         setShowDeleteModal(true),
    //       ]}
    //       src={trashIcon}
    //       alt="trash-icon"
    //     />
    //   </div>
    // </div>
    <div className="row-container">
      <span className="name">Pedro</span>
      <span >
        pedrocadast@gmail.com
      </span>
      <span>38998273349</span>
      <div className="icons">
        <img
          // onClick={() => [setModal({ status: true, type: "edit", kontact })]}
          src={editIcon}
          alt="edit-icon"
        />
        <img
          // onClick={() => [
          //   setKontactToDelete(kontact),
          //   setShowDeleteModal(true),
          // ]}
          src={trashIcon}
          alt="trash-icon"
        />
      </div>
    </div>
  );
}
