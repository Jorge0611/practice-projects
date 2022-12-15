import { useState } from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "../components/searchBar";
import { useFetch } from "../utils/hooks/useFetch";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading } = useFetch(
    "http://devbackofficeservicios.aduanas.gob.do/api/services"
  );

  const getData = () => {
    return data
      .flatMap((service) => service.services)
      .filter((service) =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  };

  return (
    <div>
      <h1>Servicios</h1>
      <h2>Listado de Servicios</h2>

      <SearchBar onSearch={(value) => setSearchTerm(value)} />

      {!isLoading ? (
        <ul>
          {getData().map((service) => {
            return (
              <li key={service.id}>
                <Link to={`/${service.id}`}>{service.name}</Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <h3>Cargando...</h3>
      )}
    </div>
  );
}

export default App;
