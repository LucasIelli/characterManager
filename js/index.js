import "regenerator-runtime/runtime"; // If Live Server don't forget to comment this fr**king line.
// Start main.js
export const clone = (para1) => {
  para1.forEach(({ id, image, name, shortDescription }) => {
    let characterClone = document
      .getElementById("tpl-char")
      .content.cloneNode(true);
    characterClone.getElementById(
      "charIMG"
    ).src = `data:image/png;base64,${image}`;
    characterClone.getElementById("charName").innerHTML = name;
    characterClone.getElementById("shortDescr").innerHTML = shortDescription;
    characterClone.getElementById("charLink").href = `single.html?${id}`;
    document.getElementById("target").appendChild(characterClone);
  });
};
// Search bar
export const searchBar = () => {
  let toUpCase = document.getElementById("charSearch").value.toUpperCase();
  let charCards = document.querySelectorAll("#container");
  // Loop through all list items, and hide those who don't match the search query
  for (let i = 0; i < charCards.length; i++) {
    let characterName = charCards[i].querySelector("#charName");
    let charTxtValue = characterName.textContent || characterName.innerText;
    if (charTxtValue.toUpperCase().indexOf(toUpCase) > -1) {
      charCards[i].style.display = "";
    } else {
      charCards[i].style.display = "none";
    }
  }
};
// End of main.js
// charadd.js and charedit.js
// IMG Convertion
export let base64String = " ";
export let imageUploaded = () => {
  var file = document.querySelector("#fileId")["files"][0];
  var reader = new FileReader();
  reader.onload = () => {
    base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
    document.getElementById(
      "importedIMG"
    ).src = `data:image/jpeg;base64,${base64String}`;
  };
  reader.readAsDataURL(file);
};
