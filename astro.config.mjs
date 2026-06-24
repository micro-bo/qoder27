import { defineConfig } from "astro/config";

const githubRepository = process.env.GITHUB_REPOSITORY;
const [githubOwner, githubRepo] = githubRepository?.split("/") ?? [];
const repositoryOwner = process.env.GITHUB_REPOSITORY_OWNER ?? githubOwner;
const isGitHubPagesBuild =
  process.env.GITHUB_ACTIONS === "true" && repositoryOwner && githubRepo;
const isUserOrOrgPage = githubRepo === `${repositoryOwner}.github.io`;

export default defineConfig({
  output: "static",
  site: isGitHubPagesBuild
    ? `https://${repositoryOwner}.github.io`
    : "http://localhost:4321",
  base: isGitHubPagesBuild && !isUserOrOrgPage ? `/${githubRepo}` : undefined
});
