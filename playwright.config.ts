import { defineConfig, devices } from "@playwright/test";
import { loadEnv } from "vite";
const viteEnv = loadEnv("development", "./");

const baseURL = viteEnv.VITE_BASE_URL || "http://localhost:5137";

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
			reuseExistingServer: !process.env.CI,
		},
		{
			command: `anvil --fork-url=${viteEnv.VITE_ANVIL_FORK_URL} --fork-block-number=6373425 -m='${viteEnv.VITE_TEST_ACCOUNT_MNEMONIC}'`,
			port: 8545,
		},
	],
});
