
export const addToHistory = (mainSlug, epsSlug, episode) => {
    let histories = JSON.parse(localStorage.getItem('history') || '[]');
    const isAlreadyInHistory = histories.findIndex(item => item.mainSlug === mainSlug);

    if (isAlreadyInHistory !== -1) {
        histories[isAlreadyInHistory].epsSlug = epsSlug;
        histories[isAlreadyInHistory].episode = episode;
        const movedItem = histories.splice(isAlreadyInHistory, 1)[0];
        histories = [movedItem, ...histories];
    } else {
        histories = [{ mainSlug, epsSlug, episode }, ...histories];
    }

    localStorage.setItem('history', JSON.stringify(histories));

    return histories;
}