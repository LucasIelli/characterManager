//  Get API
import { fetched } from "./callsAPI.js";
// loop in API to get each character + searchBar loop
import { clone, searchBar } from "./index.js";
// Call all the functions
let fetch = async () => {
  const data = await fetched();
  clone(data);
};
fetch();
document.getElementById("charSearch").addEventListener("keyup", () => {
  searchBar();
});
