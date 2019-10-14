const { launchMutation } = require('./launch');
const { launcherMutation } = require('./launcher');

const mutations = /* GraphQL */`
  type Mutation {
    ${launchMutation},
    ${launcherMutation}
  }
`

module.exports = mutations;