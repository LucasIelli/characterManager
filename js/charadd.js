import { imageUploaded } from "./index.js";
import { base64String } from "./index.js";
document.getElementById("fileId").addEventListener("change", imageUploaded);

// Gather & Export data
document.getElementById("inCharAdd").addEventListener("click", async () => {
  let inputs = Array.from(document.querySelectorAll(".data"));
  let values = inputs.map(({ value }) => {
    return value.trim();
  });
  if (values.some((value) => value === "")) {
    alert("Please fill in all fields");
    return;
  }
  let [name, shortDescription, description] = values;
  await fetch("https://character-database.becode.xyz/characters", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      shortDescription,
      description,
      image: base64String,
    }),
  });
  window.location.replace(`index.html`);
  alert(`Thank you for adding ${name}`);
});
