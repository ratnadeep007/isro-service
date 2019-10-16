const { launchMutation } = require('./launch');
const { launcherMutation } = require('./launcher');
const { stageMutation } = require('./stage');

const mutations = /* GraphQL */`
  type Mutation {
    ${launchMutation},
    ${launcherMutation},
    ${stageMutation}
  }
`

module.exports = mutations;