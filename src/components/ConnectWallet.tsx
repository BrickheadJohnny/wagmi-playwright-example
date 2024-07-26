import { useAccount, useConnect, useDisconnect } from "wagmi";
import { SignMessage } from "./SignMessage";

export function ConnectWallet() {
	const { isConnected, address } = useAccount();
	const { connectors, connect } = useConnect();
	const { disconnect } = useDisconnect();

	if (isConnected)
		return (
			<div>
				<span data-testid="address">{`Connected address: ${address?.toLowerCase()}`}</span>
				<button
					type="button"
					onClick={() => disconnect()}
					data-testid="disconnect-button"
				>
					Disconnect
				</button>
				<SignMessage />
			</div>
		);

	return (
		<div>
			{connectors.map((connector) => (
				<button
					key={connector.id}
					type="button"
					data-testid={`${connector.id}-connect-button`}
					onClick={() => connect({ connector })}
				>
					{connector.name}
				</button>
			))}
		</div>
	);
}
