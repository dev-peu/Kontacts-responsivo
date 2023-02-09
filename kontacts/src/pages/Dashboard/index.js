import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import TableTitleRow from "../../components/TableTitleRow";
import TableRow from "../../components/TableRow";
import api from "../../services/api";
import auth from "../../utils/auth";
import TableModal from "../../components/TableModal";
import useUtils from "../../hooks/useUtils";
import "./styles.css";
import DeleteRowModal from "../../components/DeleteRowModal";

export default function Dashboard() {
  const [kontacts, setKontacts] = useState([]);
  const { modal, setModal, showDeleteModal } = useUtils();

  useEffect(() => {
    async function getKontacts() {
      try {
        const response = await api.get("/contatos", auth());
        setKontacts([...response.data]);
      } catch (error) {
        console.log(error.response.data);
      }
    }
    getKontacts();
  }, [kontacts]);

  return (
    <div className="container dashboard">
      <Header />
      <main className="content">
        <Button
          className="button-add"
          onClick={() => setModal({ status: true, type: "add" })}
          color="success"
          variant="contained"
        >
          Adicionar
        </Button>
        <div className="table">
          <TableTitleRow titles={["Nome", "Email", "Telefone"]} />
          <div className="rows">
            {/* {kontacts.map((kontact) => (
              <TableRow key={kontact.id} kontact={kontact} />
            ))} */}
            <TableRow/>
          </div>
        </div>
      </main>
      {modal.status === true ? (
        modal.type === "add" ? (
          <TableModal type={"add"} />
        ) : (
          <TableModal type={"edit"} />
        )
      ) : (
        ""
      )}
      {showDeleteModal && <DeleteRowModal />}
    </div>
  );
}
