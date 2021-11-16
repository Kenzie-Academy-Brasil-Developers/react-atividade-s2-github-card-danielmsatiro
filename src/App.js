import { useState } from "react";
import "./App.css";
import { Search } from "./components/Search";
import { Card } from "./components/Card";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <Search setSearch={setSearch} />
      {search !== "" && <Card search={search}/>}
    </div>
  );
}

export default App;
