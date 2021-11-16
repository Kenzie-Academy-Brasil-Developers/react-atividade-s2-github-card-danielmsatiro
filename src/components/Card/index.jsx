import { api } from "../../services/api";
import { useState } from "react";
import { useEffect } from "react";

export const Card = ({ search }) => {
  const [repository, setRepository] = useState([]);
  console.log(repository)

  useEffect(() => {
    api.get(`/repos/${search}`).then((response) => setRepository(response.data));
  }, []);
  return (
        <div>
            <img src={repository.owner?.avatar_url} alt=""/>
            <div>
                <h1>{repository.name}</h1>
                <p>{repository.description}</p>
            </div>
        </div>
    );
};
