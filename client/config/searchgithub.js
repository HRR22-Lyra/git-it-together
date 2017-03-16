var searchGitHub = ({key, query, max = 5}, callback) => {
  $.get('https://www.github.com', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: ''
  })
  .done(({items}) => {
    if (callback) {
      callback(items);
    }
  })
  .fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) =>
      console.log(err));
  });
};

window.searchGitHub = searchGitHub;