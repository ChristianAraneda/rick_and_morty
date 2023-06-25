import Card from "./Card";

export default function Cards({ characters }) {
  const personajes = characters;
  console.log(personajes);
  return (
    <div>
      {personajes.map((personaje) => (
        <Card
          key={personaje.id}
          id={personaje.id}
          name={personaje.name}
          status={personaje.status}
          species={personaje.species}
          gender={personaje.gender}
          origin={personaje.origin.name}
          image={personaje.image}
          onClose={() => alert("Emulamos que se cierra la card")}
        />
      ))}
    </div>
  );
}
