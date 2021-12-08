export function renderXmas(xmasData) {
    const xmasElem = document.createElement('p');

    xmasElem.textContent = xmasData;
    xmasElem.classList.add('xmas-items');

    if (xmasData === 'tree') {
        xmasElem.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2016/03/27/19/16/tree-1283772_960_720.jpg')";
    }

    if (xmasData === 'lights') {
        xmasElem.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2021/11/03/06/14/stars-6764778_960_720.jpg')";
    }

    if (xmasData === 'decorations') {
        xmasElem.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2014/11/29/16/23/christmas-market-550323_960_720.jpg')";
    }

    if (xmasData === 'stories') {
        xmasElem.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2020/10/24/10/11/santa-sleigh-5681097_960_720.jpg')";
    }

    if (xmasData === 'socks') {
        xmasElem.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2020/12/19/15/32/socks-5844679_960_720.jpg')";
    }

    return xmasElem;
}