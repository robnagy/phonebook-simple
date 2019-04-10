import Http from 'axios';

const NetClient = {
  request: ({ url, method }, data, params, onSuccess, onError) => {
    Http.request({
      method,
      url,
      data,
      params,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        onSuccess(response.data);
      })
      .catch((e) => {
        onError(e, url)
      });
  },
}

export default NetClient;