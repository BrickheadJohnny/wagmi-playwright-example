import { WagmiProvider } from "wagmi";
import { wagmiConfig } from "./wagmiConfig";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectWallet } from "./components/ConnectWallet";

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
