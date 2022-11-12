module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        basePath: false,
        permanent: false
      }
    ]
  }
}
