function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}