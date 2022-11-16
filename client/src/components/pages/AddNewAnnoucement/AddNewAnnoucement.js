import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AddNewAnnoucement() {
  const user = localStorage.getItem("token");

  return user ? (
   <h1>Dodaj ogłoszenie</h1>
  ):(
    <h2>Unauthorized</h2>
  );
}
