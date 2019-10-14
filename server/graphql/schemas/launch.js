const launchType =  /* GraphQL */`
  type Launch {
    id: String,
    title: String!,
    launchDate: String!,
    type: String!,
    payload: String!,
    successful: Boolean,
    remark: String,
    description: String
  }
`;

module.exports = {
  launchType
}
