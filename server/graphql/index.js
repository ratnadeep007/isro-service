const { makeExecutableSchema } = require('apollo-server-express');
const { merge } = require('lodash');
const { launchType, launcherType } = require('./schemas');
const queries = require('./queries');
const muatations = require('./mutations');
const { launchResolvers, launcherResolvers } = require('./resolvers');

// export const schemas = makeExecutableSchema({
//   typeDefs: [userType, userQuery],
//   resolvers: merge(userResolvers)
// });

module.exports = {
  typeDefs: [queries, launchType, launcherType, muatations],
  resolvers: [launchResolvers, launcherResolvers]
}