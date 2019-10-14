const { launchQuery } = require('./launch');
const { launcherQuery } = require('./launcher');

const queries = /* GraphQL */`
  type Query {
    ${launchQuery},
    ${launcherQuery}
  }
`

module.exports = queries