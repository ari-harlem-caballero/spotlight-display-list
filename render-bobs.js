export function renderBobs(bob) {
    console.log(bob);
    const bobsDiv = document.createElement('div');
    const bobInfo = document.createElement('p');
        
    bobsDiv.classList.add('bobs-burgers');

    bobInfo.textContent = `${bob.name}, ${bob.type}, ${bob.job}`;
        
    bobsDiv.append(bobInfo);
        
    console.log(bob.bestFriend.name);

    const bestieDiv = document.createElement('div');

    bestieDiv.textContent = `${bob.bestFriend.name}, ${bob.bestFriend.favActivity}`;

    bestieDiv.classList.add('bobs-besties');
            
    bobsDiv.append(bestieDiv);

    return bobsDiv;
}