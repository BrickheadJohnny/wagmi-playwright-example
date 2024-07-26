import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { ConnectWallet } from "./components/ConnectWallet";
import { wagmiConfig } from "./wagmiConfig";

const queryClient = new QueryClient();

function App() {
	return (
		<WagmiProvider config={wagmiConfig}>
			<QueryClientProvider client={queryClient}>
				<ConnectWallet />
			</QueryClientProvider>
		</WagmiProvider>
	);
}

export default App;
