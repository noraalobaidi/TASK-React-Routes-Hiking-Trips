import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import TripsList from "./components/TripsList";
import TripDetail from "./components/TripDetail";
import { Route, Routes } from "react-router-dom";
// import { Modal, Button } from "bootstrap";
import { Modal, Button } from "react-bootstrap";

function App() {
  return (
    <div id="page-top">
      <Nav />
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips-list" element={<TripsList />} />
        {/* : for varibale ,, expecting a variable */}
        <Route path={"/trip-detail/:tripSlug"} element={<TripDetail />} />
      </Routes>
    </div>
  );
}

export default App;
