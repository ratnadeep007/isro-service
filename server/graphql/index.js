const { makeExecutableSchema } = require('apollo-server-express');
const { merge } = require('lodash');
const { launchType, launcherType, stageType } = require('./schemas');
const queries = require('./queries');
const muatations = require('./mutations');
const { launchResolvers, launcherResolvers, stageResolvers } = require('./resolvers');

// export const schemas = makeExecutableSchema({
//   typeDefs: [userType, userQuery],
//   resolvers: merge(userResolvers)
// });

module.exports = {
  typeDefs: [queries, launchType, launcherType, stageType, muatations],
  resolvers: [launchResolvers, launcherResolvers, stageResolvers]
}