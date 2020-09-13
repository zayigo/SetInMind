$(document).ready(() => {
  $('form').on('submit', () => {
    const input = $('form input'); // user input
    fetch('/', {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item: input.val() }),
    })
      .then(window.location.reload())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  });
});

const deleteNote = (noteId) => {
  fetch('/', {
    method: 'delete',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ noteId }),
  })
    .then(window.location.reload())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
