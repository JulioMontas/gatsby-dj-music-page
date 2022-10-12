// gatsby-node.js
exports.createPages = async ({ graphql, actions }) => {
	const { createRedirect } = actions;

	createRedirect({
    fromPath: `/mixes`,
    toPath: `/music/mixes`,
  });
}
