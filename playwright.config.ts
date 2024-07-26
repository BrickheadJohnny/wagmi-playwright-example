import { defineConfig, devices } from "@playwright/test";
import { loadEnv } from "vite";
const viteEnv = loadEnv("development", "./");

const baseURL =
	process.env.BASE_URL || viteEnv.VITE_BASE_URL || "http://localhost:5137";
const forkUrl = process.env.ANVIL_FORK_URL || viteEnv.VITE_ANVIL_FORK_URL;
const blockNumber = 6373425;
const mnemonic =
	process.env.TEST_ACCOUNT_MNEMONIC || viteEnv.VITE_TEST_ACCOUNT_MNEMONIC;

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
	testDir: "./tests",
	fullyParallel: true,
	retries: 2,
	reporter: "html",
	use: {
		baseURL,
		trace: "on-first-retry",
	},
	projects: [
		{
			name: "chromium",
			use: { ...devices["Desktop Chrome"] },
		},
	],
	webServer: [
		{
			command: "npm run preview",
			url: baseURL,
			reuseExistingServer: true,
		},
		{
			command: `anvil --fork-url=${forkUrl} --fork-block-number=${blockNumber} -m='${mnemonic}'`,
			port: 8545,
		},
	],
});
