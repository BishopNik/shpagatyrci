const modalWindow = document.querySelector('[data-modal]');
const findSubBtn = document.querySelector('.header__sabut');
const modalWindowClose = document.querySelector('[data-modal-close]');

findSubBtn.addEventListener('click', onClickFindSubBtn);

function onClickFindSubBtn(evt) {
    modalWindow.classList.toggle('is-hidden');
    window.addEventListener('keydown', onClickEsc);
    modalWindow.addEventListener('click', onClickClose);
}

function onClickEsc(evt) {
    const ESCAPE = 'Escape';
    const keyClicked = evt.key;
    if (keyClicked === ESCAPE) {        
        modalWindow.classList.toggle('is-hidden');
        window.removeEventListener('keydown', onClickEsc);
    }
}

function onClickClose(evt) {
    const overlayClick = evt.target === evt.currentTarget;
    const closeButton = evt.target.closest('[data-modal-close]');
    
    if (overlayClick || closeButton) {
        modalWindow.classList.toggle('is-hidden');
        modalWindow.removeEventListener('click', onClickClose);
        window.removeEventListener('keydown', onClickEsc);
        return
    }
}