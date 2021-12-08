export function renderTvShows(tvShow) {
    console.log(tvShow);
    const tvDiv = document.createElement('div');
    const tvTitle = document.createElement('p');

    tvDiv.classList.add('tv-show');

    tvTitle.textContent = `${tvShow.title}: ${tvShow.episodes}, ${tvShow.active}`;

    tvDiv.append(tvTitle);

    for (let shows of tvShow.quotes) {
        const showEl = document.createElement('p');

        showEl.textContent = shows;

        showEl.classList.add('quotes');

        tvDiv.append(showEl);
    }
    return tvDiv;
}