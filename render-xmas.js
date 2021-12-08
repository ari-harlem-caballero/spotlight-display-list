export function renderXmas(xmasData) {
    const xmasElem = document.createElement('p');

    xmasElem.textContent = xmasData;
    xmasElem.classList.add('xmas-items');

    if (xmasData === 'tree') {
        xmasElem.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2020/12/19/15/32/socks-5844679_960_720.jpg')";
    }

    return xmasElem;
}