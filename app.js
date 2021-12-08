// step 0: import array
import { renderBobs } from './render-bobs.js';
import { renderPets } from './render-pets.js';
import { renderTvShows } from './render-tv.js';
import { renderXmas } from './render-xmas.js';
import { bobsChar } from './bobs-data.js';
import { myPets } from './pets-data.js';
import { favTvShows } from './tv-data.js';
import { xmasThings } from './xmas-data.js';

// step 1: grab a div
const bobsDiv = document.getElementById('bobs-list');
const petsDiv = document.getElementById('pet-list');
const tvDiv = document.getElementById('tv-show-list');
const xmasElem = document.getElementById('christmas-list');
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

for (let tvShow of favTvShows) {
    const tvList = renderTvShows(tvShow);

    tvDiv.append(tvList);
}

for (let xmasData of xmasThings) {
    const xmasList = renderXmas(xmasData);

    xmasElem.append(xmasList);
}