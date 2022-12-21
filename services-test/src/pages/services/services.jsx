import { useState } from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "../../components/searchBar.jsx";
import { useFetch } from "../../utils/hooks/useFetch.js";
import { API_URL } from "../../config/index.js";
import { MainLayout } from "../../components/mainLayout.jsx";

export function Services() {
  const [searchTerm, setSearchTerm] = useState("");
  /**
   * @type {{
   *   data: {
   *     services: {
   *       id: number;
   *       name: string;
   *     }[];
   *   };
   * }}
   */
  const { data, isLoading } = useFetch(`${API_URL}/services`);

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
                <Link to={`/services/${service.id}`}>{service.name}</Link>
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
