const personas = [
  {
    name: "eduardo",
    lastname: "gutierrez",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_4Uxp9EWg0qTCJVs6efAjd85UpcL9nfBuOQ&usqp=CAU",
  },

  {
    name: "kevin",
    lastname: "fonseca",
    imagen: "https://img.wattpad.com/cover/270106124-288-k461693.jpg",
  },
  {
    name: "nahuel",
    lastname: "afino",
    imagen:
      "https://static.wikia.nocookie.net/el_random/images/9/98/Shrek.png/revision/latest/smart/width/250/height/250?cb=20200510164459&path-prefix=es",
  },

  {
    name: "ivan",
    lastname: "matulevicius",
    imagen: "https://whts.club/uploads/posts/2023-06/thumbs/gente-random.webp",
  },
];

export const Personas = () => {
  return (
    <>
      {personas.map((item) => (
        <>
          <p>{item.name}</p>
        </>
      ))}
    </>
  );
};
