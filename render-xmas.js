export function renderXmas(xmasData) {
    const xmasElem = document.createElement('p');

    xmasElem.textContent = xmasData;
    xmasElem.classList.add('xmas-items');

    return xmasElem;
}