const contentful = require('contentful')
const ctfConfig = require('../.contentful.json')


// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js
const config = {
  space: ctfConfig.CTF_SPACE_ID,
  accessToken: ctfConfig.CTF_CDA_ACCESS_TOKEN
}

// export `createClient` to use it in page components
module.exports = {
  createClient() {
    return contentful.createClient(config)
  }
}
