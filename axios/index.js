axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => {
    console.log('get request successful!', response);
  })
  .then(() => {
    return axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'hello world'
    });
  })
  .then((response) => {
    console.log('post request successful!', response);
  })
  .catch(err => {
    console.error('error!', err);
  });
