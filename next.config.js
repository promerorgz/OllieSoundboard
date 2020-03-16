const withImages = require('next-images')

module.exports = withImages({
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.(mp3|m4a|)$/i,
      use: [
        defaultLoaders.babel,
        {
          loader: 'url-loader',
        },
      ],
    })
    return config
  },
})