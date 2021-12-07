export function renderBobs(bobsData)

const bobsDiv = document.querySelector(#bobs-list);

for (let bobChar of bobsData)
    const bobsDiv = document.createElement('div');
    const bobsName = document.createElement('p');
    const bobsType = document.createElement('p');
    const bobsJob = document.createElement('p');

    const bestieDiv = document.createElement('div');
    const bestieName = document.createElement('p');
    const bestieActivity = document.createElement('p');

    bobsDiv.classList.add('bobs-burgers');
    bestieDiv.classList.add('bobs-besties');

    bobsName.textContent = bobsChar.name;
    bobsType.textContent = bobsChar.type;
    bobsJob.textContent = bobsChar.job;
    bestieName.textContent = bobsChar.bestFriend.name;
    bestieActivity.textContent = bobsChar.bestFriend.favActivity;

    bestieDiv.append(bestieName, bestieActivity);

    bobsDiv.append(bobsName, bobsType, bobsJob, bestieDiv);
}