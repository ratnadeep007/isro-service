const launchQuery = /* GraphQL */`
  launch(title: String, type: String): [Launch!]!
`;

module.exports = {
  launchQuery
}