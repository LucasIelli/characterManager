import { imageUploaded } from "./index.js";
import { fetchedId } from "./callsAPI.js";
document.getElementById("fileId").addEventListener("change", imageUploaded);

(async () => {
  // gather ID
  let splitted = window.location.href.split("?");
  let idSplit = splitted[1];
  // Fetch ID and display
  let charCard = await fetchedId(idSplit);
  // Display with existing data
  let base64String = charCard.image;
  document.getElementById(
    "importedIMG"
  ).src = `data:image/png;base64,${charCard.image}`;
  document.getElementById("inCharName").value = charCard.name;
  document.getElementById("inShortDescr").value = charCard.shortDescription;
  document.getElementById("inDescription").children[0].innerHTML =
    charCard.description;

  document.getElementById("inCharSave").addEventListener("click", async () => {
    //Gather all fields with data ID
    //Except with the IMG Base64 data
    let inputs = Array.from(document.querySelectorAll(".data"));
    let inDescription =
      document.getElementById("inDescription").children[0].innerHTML;
    let values = inputs.map(({ value }) => {
      return value.trim();
    });
    if (values.some((value) => value === "")) {
      alert("Please fill in all fields");
      return;
    }
    let [name, shortDescription] = values;
    await fetch(`https://character-database.becode.xyz/characters/${idSplit}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `${name}`,
        shortDescription: `${shortDescription}`,
        description: `${inDescription}`,
        image: `${base64String}`,
      }),
    });
    window.location.replace(`single.html?${idSplit}`);
  });
})();
