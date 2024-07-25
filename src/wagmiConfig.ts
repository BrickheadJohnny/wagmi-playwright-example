import { createTestClient, publicActions, walletActions } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { http, createConfig } from "wagmi";
import { foundry } from "wagmi/chains";
import { mock } from "wagmi/connectors";

const TEST_ACCOUNT = {
	address: import.meta.env.VITE_TEST_ACCOUNT_ADDRESS,
	key: import.meta.env.VITE_TEST_ACCOUNT_PRIVATE_KEY,
} as const;

export const wagmiConfig = createConfig({
	chains: [foundry],
	connectors: [
		mock({
			accounts: [TEST_ACCOUNT.address],
		}),
	],
	client: () =>
		createTestClient({
			transport: http(),
			chain: foundry,
			mode: "anvil",
			account: privateKeyToAccount(TEST_ACCOUNT.key),
		})
			// Extend the client with public and wallet actions, so it can also act as a Public Client and Wallet Client
			.extend(publicActions)
			.extend(walletActions),
});
