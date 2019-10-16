const launchMutation = /* GraphQL */`
  launch(
    title: String!, 
    launchDate: String!, 
    type: String!, 
    payload: String!,
    successful: Boolean,
    remark: String,
    description: String
    launcherType: String
    orbit: String
  ): Launch!
`;

module.exports = {
  launchMutation
}