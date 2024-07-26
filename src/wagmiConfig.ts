import { createTestClient, publicActions, walletActions } from "viem";
import { mnemonicToAccount } from "viem/accounts";
import { http, createConfig } from "wagmi";
import { foundry } from "wagmi/chains";
import { mock } from "wagmi/connectors";

export const wagmiConfig = createConfig({
	chains: [foundry],
	connectors: [
		mock({
			accounts: [import.meta.env.VITE_TEST_ACCOUNT_ADDRESS],
		}),
	],
	client: ({ chain }) =>
		createTestClient({
			transport: http(),
			chain,
			mode: "anvil",
			account: mnemonicToAccount(import.meta.env.VITE_TEST_ACCOUNT_MNEMONIC),
		})
			.extend(publicActions)
			.extend(walletActions),
	multiInjectedProviderDiscovery: false,
});
