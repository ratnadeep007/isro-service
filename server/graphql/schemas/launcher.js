const launcherType =  /* GraphQL */`
  type Launcher {
    id: String,
    title: String!,
    shortDescription: String,
    longDescription: String,
    launches: [Launch],
    height: Float,
    diameter: Float,
    numberOfStages: Float,
    liftOfMass: Float,
    variants: Int,
    variantsList: [String],
    firstFlight: Date,
    stages: [Stage]
  }
`;

module.exports = {
  launcherType
}
