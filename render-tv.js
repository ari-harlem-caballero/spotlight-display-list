export function renderTvShows(tvShow) {

    const tvDiv = document.createElement('div');
    const tvTitle = document.createElement('p');
    
    tvDiv.classList.add('tv-show');
    
    tvTitle.textContent = `${tvShow.title}: ${tvShow.episodes}, ${tvShow.active}`;

    if (tvTitle.textContent === `${tvShow.title}: ${tvShow.episodes}, ${tvShow.active}`) {
        tvTitle.style.backgroundColor = 'darkgrey'; 
    }
    
    tvDiv.append(tvTitle);
    
    for (let shows of tvShow.quotes) {
        const showEl = document.createElement('p');
        
        showEl.textContent = shows;
        
        showEl.classList.add('single-quotes');

        tvDiv.append(showEl);
    }
    return tvDiv;
}