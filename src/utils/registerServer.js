const registerServer = (opt, request) => {
  let server = {}
  for (let key in opt) {
    server[key] = (params) => {
      return request(opt[key].url, {
        method: opt[key].method,
        data: params,
      });
    }
  }
  return server;
}

export default registerServer;
