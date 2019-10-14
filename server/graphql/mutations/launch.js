const launchMutation = /* GraphQL */`
  launch(
    title: String!, 
    launchDate: String!, 
    type: String!, 
    payload: String!,
    successful: Boolean,
    remark: String,
    description: String
  ): Launch!
`;

module.exports = {
  launchMutation
}