import "regenerator-runtime/runtime"; // If Live Server don't forget to comment this fr**king line.
export const fetched = async () => {
  const fetching = await fetch(
    "https://character-database.becode.xyz/characters"
  );
  return await fetching.json();
};
export const fetchedId = async (idSplit) => {
  const fetching = await fetch(
    `https://character-database.becode.xyz/characters/${idSplit}`
  );
  let charCard = await fetching.json();
  return charCard;
};
export const deleteChar = async (idSplit) => {
  await fetch(`https://character-database.becode.xyz/characters/${idSplit}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
};
