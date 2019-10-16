const stageMutation = /* GraphQL */`
  stage (
    id: String
    title: String!
    description: String
    launcherId: String
    engine: String
    fuel: String
    maxThrust: Float
    burnTime: Float
  ): Stage!,
`;

module.exports = {
  stageMutation
}