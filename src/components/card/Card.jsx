export default function Card({
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  id,
}) {
  return (
    <div>
      <h2>nombre: {name}</h2>
      <h2>Estado:{status}</h2>
      <h2>Especie:{species}</h2>
      <h2>Genero:{gender}</h2>
      <h2>Origen:{origin}</h2>
      <h2>id: {id}</h2>
      <img src={image} alt="{name}" />
      <button onClick={() => onClose(id)}>X</button>
    </div>
  );
}
