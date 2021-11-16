import { useState } from "react";
import "./App.css";
import { Search } from "./components/Search";
import { Card } from "./components/Card";
import { Toaster } from "react-hot-toast";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <Search setSearch={setSearch} />
      {search !== "" && <Card search={search} />}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
