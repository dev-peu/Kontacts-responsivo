import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo/kontacts.svg";
import "./styles.css";

export default function Header() {
  const navigate = useNavigate();

  function logOff() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <header className="header">
      <div className="empty" />
      <img src={logo} alt="logo-kontacts" />
      <div onClick={logOff} className="logoff" />
    </header>
  );
}
