export default build =>
  build.query({
    query: id => `/users/${id}`,
  })
