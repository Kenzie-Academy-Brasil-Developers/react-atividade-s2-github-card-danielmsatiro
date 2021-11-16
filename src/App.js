import { useState } from "react";
import "./App.css";
import { Search } from "./components/Search";
import { Card } from "./components/Card";
import { Toaster } from "react-hot-toast";
import { Container, CssBaseline } from "@mui/material";

function App() {
  const [search, setSearch] = useState("");

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Search setSearch={setSearch} />
      {search !== "" && <Card search={search} />}
      <Toaster position="top-center" reverseOrder={false} />
    </Container>
  );
}

export default App;
