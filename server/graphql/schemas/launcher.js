const launcherType =  /* GraphQL */`
  type Launcher {
    id: String,
    title: String!,
    shortDescription: String,
    longDescription: String,
    launches: [Launch]
  }
`;

module.exports = {
  launcherType
}
