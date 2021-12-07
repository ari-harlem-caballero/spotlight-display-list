export function renderBobs(bob) {
    const bobsDiv = document.createElement('div');
    const bobInfo = document.createElement('p');
        
    bobsDiv.classList.add('bobs-burgers');

    bobInfo.textContent = `Character: ${bob.name}, Type: ${bob.type}, Job: ${bob.job}`;
        
    bobsDiv.append(bobInfo);

    const bestieDiv = document.createElement('div');

    bestieDiv.textContent = `Best friend is: ${bob.bestFriend.name}, and their favorite activity is: ${bob.bestFriend.favActivity}`;

    bestieDiv.classList.add('bobs-besties');
            
    bobsDiv.append(bestieDiv);

    return bobsDiv;
}