import { useState } from "react";

function useUtilsProvider() {
  const [modal, setModal] = useState({
    status: false,
    type: "",
  });
  const [kontactToDelete, setKontactToDelete] = useState({});
  const [err, setErr] = useState({ status: false });
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return {
    modal,
    setModal,
    kontactToDelete,
    setKontactToDelete,
    err,
    setErr,
    showDeleteModal,
    setShowDeleteModal,
  };
}

export default useUtilsProvider;
