// Get API
import { fetchedId, deleteChar } from "./callsAPI.js";
// Get Ids
let splittedCurrent = window.location.href.split("?");
let idSplit = splittedCurrent[1];
// Call all the functions
document.addEventListener("DOMContentLoaded", async () => {
  const charCard = await fetchedId(idSplit);
  document.getElementById(
    "charIMG"
  ).src = `data:image/png;base64,${charCard.image}`;
  document.getElementById("charName").innerHTML = charCard.name;
  document.getElementById("shortDescr").innerHTML = charCard.shortDescription;
  document.getElementById("longDescr").innerHTML = charCard.description;
  document.getElementById("charUpdate").href = `charedit.html?${idSplit}`;
});
// Delete button
document.getElementById("charDelete").addEventListener("click", async () => {
  if (confirm("Are you sure you want delete this character?")) {
    await deleteChar(idSplit);
    window.location.href = `index.html`;
  }
});
