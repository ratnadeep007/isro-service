const launcherMutation = /* GraphQL */`
  launcher  (
    title: String!, 
    shortDescription: String, 
    longDescription: String, 
    launches: [String]
    height: Float,
    diameter: Float,
    numberOfStages: Float,
    liftOfMass: Float,
    variants: Int,
    variantsList: [String],
    firstFlight: Date,
  ): Launcher!,
  launcherUpdate(
    title: String!,
    launches: [String]!
  ): Launcher!
`;

module.exports = {
  launcherMutation
}