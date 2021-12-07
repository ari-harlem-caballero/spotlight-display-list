// step 0: import array
import { renderBobs } from './render-bobs.js';
import { bobsChar } from './bobs-data.js';
// step 1: grab a div
const bobsDiv = document.getElementById('bobs-list');
// step 2: loop through array

for (let bob of bobsChar) {
  // step 3: render out an element for each item
    const bobsDiv = renderBobs(bob);
  // step 4: append that rendered elem for each item
    bobsDiv.append(bobsDiv);
}