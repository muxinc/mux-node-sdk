
const convertQueryParams = (queryParams) => {
  let queryString = '?';
  Object.keys(queryParams).forEach((param, index) => {
    queryString += `${param}=${queryParams[param]}`;
    if (index !== 0) {
      queryString = `&${queryString}`;
    }
  });
  return queryString;
};

module.exports = {
  convertQueryParams,
}
