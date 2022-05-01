module.exports = {
    images: {
      loader: 'custom'
    },
    exportPathMap: async function (
        defaultPathMap,
      ) {
        return {
          '/': { page: '/' },
          '/about': { page: '/about' },
        }
      },
  }