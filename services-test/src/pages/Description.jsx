import { Link, useParams } from "react-router-dom";
import { useFetch } from "../utils/hooks/useFetch";

function Description() {
  const params = useParams();
  const { data, isLoading } = useFetch(
    `http://devbackofficeservicios.aduanas.gob.do/api/services/${params.id}`
  );

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
              `http://devservicios.aduanas.gob.do/app/serviceDescription/${params.id}`,
              "_blank"
            )
          }
        >
          Mas información
        </button>{" "}
        <button
          target="_blank"
          onClick={() =>
            window.open(
              `http://devservicios.aduanas.gob.do/app/requestService/${params.id}`,
              "_blank"
            )
          }
        >
          Solicitar
        </button>
      </div>
    </>
  );
}

export default Description;
