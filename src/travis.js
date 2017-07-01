const travis = {
  repo: process.env.CIRCLE_REPOSITORY_URL,
  token: process.env.github_token,
  event_type: 'pull_request',
  sha: process.env.CIRCLE_SHA1,
  branch: process.env.CIRCLE_BRANCH
}

module.exports = travis
