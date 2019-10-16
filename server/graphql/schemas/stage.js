const stageType =  /* GraphQL */`
  scalar Date
  type Stage {
    id: String
    title: String!
    description: String
    launcherId: String
    engine: String
    fuel: String
    maxThrust: Float
    burnTime: Float
  }
`;

module.exports = {
  stageType
}
