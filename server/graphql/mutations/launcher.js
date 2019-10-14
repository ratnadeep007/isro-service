const launcherMutation = /* GraphQL */`
  launcher  (
    title: String!, 
    shortDescription: String, 
    longDescription: String, 
    launches: [String]
  ): Launcher!,
  launcherUpdate(
    title: String!,
    launches: [String]!
  ): Launcher!
`;

module.exports = {
  launcherMutation
}