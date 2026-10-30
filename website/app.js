const dialog = document.querySelector('#preview-dialog');
document.querySelectorAll('[data-preview]').forEach((button) =>
  button.addEventListener('click', () => {
    const image = dialog.querySelector('img');
    image.src = button.dataset.preview;
    image.alt = button.querySelector('img').alt;
    dialog.querySelector('p').textContent = button.dataset.caption;
    dialog.showModal();
  }),
);
document.querySelector('#close-preview').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) {
    const r = dialog.getBoundingClientRect();
    if (
      event.clientX < r.left ||
      event.clientX > r.right ||
      event.clientY < r.top ||
      event.clientY > r.bottom
    )
      dialog.close();
  }
});
document.querySelector('#share').addEventListener('click', async () => {
  const status = document.querySelector('#share-status');
  try {
    await navigator.clipboard.writeText('https://cooplab.sigmas.club/');
    status.textContent = 'Site link copied.';
  } catch {
    status.textContent = 'Share: https://cooplab.sigmas.club/';
  }
});
