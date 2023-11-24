import Card from "../card/Card";

const Cards = ({ characters, onClose }) => {
  return (
    <div>
      {characters.map((char) => {
        return (
          <Card
            key={char.id}
            onClose={onClose}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin.name}
            image={char.image}
            id={char.id}
          />
        );
      })}
    </div>
  );
};
export default Cards;
