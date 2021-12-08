export function renderPets(pet) {
    //create the elems -- createEl div/p
    const petsDiv = document.createElement('div');
    const petName = document.createElement('p');
    const petInfo = document.createElement('div');
    const petType = document.createElement('p');
    const petRank = document.createElement('p');
    

    //add classlist to DIV -- classlist.add('ID')
    petsDiv.classList.add('my-pets');
    petInfo.classList.add('pet-info');
    petName.classList.add('names');
    petRank.classList.add('ranking');
    petInfo.classList.add('info');
    petType.classList.add('type');

    
    
    //add text to P -- textContent
    petName.textContent = `${pet.name}`;
    petType.textContent = `is a ${pet.type}, ${pet.age} years old, with ${pet.color} fur`;
    petRank.textContent = `ranked: ${pet.rank}`;
    
    if (petRank.textContent === `ranked: 1`) {
        petRank.style.backgroundColor = 'green'; 
    }
    if (petRank.textContent === `ranked: 2`) {
        petRank.style.backgroundColor = 'yellowgreen'; 
    }
    if (petRank.textContent === `ranked: 3`) {
        petRank.style.backgroundColor = 'orange'; 
    }
    if (petRank.textContent === `ranked: 4`) {
        petRank.style.backgroundColor = 'chocolate'; 
    }
    if (petRank.textContent === `ranked: 5`) {
        petRank.style.backgroundColor = 'red'; 
    }
    //append P to DIV
    petsDiv.append(petName, petInfo);

    petInfo.append(petType, petRank);
    //return DIV
    return petsDiv;
}