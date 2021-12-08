// step 0: import array
import { renderBobs } from './render-bobs.js';
import { renderPets } from './render-pets.js';
import { bobsChar } from './bobs-data.js';
import { myPets } from './pets-data.js';
// step 1: grab a div
const bobsDiv = document.getElementById('bobs-list');
const petsDiv = document.getElementById('pet-list');
// step 2: loop through array

for (let bob of bobsChar) {
  // step 3: render out an element for each item
    const bobsList = renderBobs(bob);
  // step 4: append that rendered elem for each item
    bobsDiv.append(bobsList);
}

for (let pet of myPets) {
    const petList = renderPets(pet);

    petsDiv.append(petList);
}