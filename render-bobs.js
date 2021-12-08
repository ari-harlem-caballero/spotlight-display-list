export function renderBobs(bob) {
    const bobsDiv = document.createElement('div');
    const bobName = document.createElement('p');
    const bobType = document.createElement('p');
    const bobJob = document.createElement('p');
        
    const bestieDiv = document.createElement('div');
    const bestieName = document.createElement('p');
    const bestieActivity = document.createElement('p');

    bobsDiv.classList.add('bobs-burgers');
    bestieDiv.classList.add('bobs-besties');

    bobName.textContent = `Character: ${bob.name}`;
    bobType.textContent = `Type: ${bob.type}`;
    bobJob.textContent = `Job: ${bob.job}`;
    bestieName.textContent = `Best Friend: ${bob.bestFriend.name}`;    
    bestieActivity.textContent = `Their Favorite Activity: ${bob.bestFriend.favActivity}`;    


    bestieDiv.append(bestieName, bestieActivity);
    bobsDiv.append(bobName, bobType, bobJob, bestieDiv);


    // bestieDiv.textContent = `Best friend is: ${bob.bestFriend.name}, and their favorite activity is: ${bob.bestFriend.favActivity}`;

            
    bobsDiv.append(bestieDiv);

    return bobsDiv;
}