import { Link, useParams } from "react-router-dom";
import { useFetch } from "../utils/hooks/useFetch";
import { API_URL, PORTAL_URL } from "../config/index.js";

function Description() {
  const params = useParams();
  /**
   * @type {{
   *   data: {
   *     name: string;
   *     description: string;
   *     prices: {
   *       id: number;
   *       concept: string;
   *       variations: {
   *         id: number;
   *         concept: string;
   *         price: float;
   *         coin: string;
   *       }[];
   *     }[];
   *   }
   * }}
   */
  const { data, isLoading } = useFetch(`${API_URL}/services/${params.id}`);

  if (isLoading) return <h1>Cargando...</h1>;

  return (
    <>
      <br />
      <Link to={".."}>⬅ Regresar</Link>
      <h1>{data.name}</h1>
      <p>{data.description}</p>

      <h2>Precios</h2>
      {data.prices.map((price) => {
        return (
          <div key={price.id}>
            <h3>{price.concept}</h3>
            <p>{price.description}</p>

            <table>
              <thead>
                <tr>
                  <th style={{ width: "30%" }}>Concepto</th>
                  <th>Descripción</th>
                  <th style={{ width: "20%" }}>Precio</th>
                </tr>
              </thead>
              <tbody>
                {price.variations.map((variation) => (
                  <tr key={variation.id}>
                    <td>{variation.concept}</td>
                    <td>{variation.description}</td>
                    <td>
                      {parseFloat(variation.price) > 0
                        ? variation.price + " " + variation.coin
                        : "Gratis"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}

      <div style={{ marginBottom: "80px" }}>
        <button
          onClick={() =>
            window.open(
              `${PORTAL_URL}/app/serviceDescription/${params.id}`,
              "_blank"
            )
          }
        >
          Ver detalles en el portal de servicios
        </button>{" "}
        <button
          onClick={() =>
            window.open(`${PORTAL_URL}/requestService/${params.id}`, "_blank")
          }
        >
          Solicitar servicio
        </button>
      </div>
    </>
  );
}

export default Description;
