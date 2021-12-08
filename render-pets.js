export function renderPets(pet) {
    //create the elems -- createEl div/p
    const petsDiv = document.createElement('div');
    const petName = document.createElement('p');
    const petRank = document.createElement('p');
    const petInfo = document.createElement('p');

    //add classlist to DIV -- classlist.add('ID')
    petsDiv.classList.add('my-pets');
    //add text to P -- textContent
    petName.textContent = `${pet.name}`;
    petRank.textContent = `ranked: ${pet.rank}`;
    petInfo.textContent = `is a ${pet.type}, ${pet.age} years old, with ${pet.color} fur`;
    //append P to DIV
    petsDiv.append(petName, petRank, petInfo);
    //return DIV
    return petsDiv;
}