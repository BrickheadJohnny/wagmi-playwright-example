import { useAccount, useConnect, useDisconnect } from "wagmi";
import { SignMessage } from "./SignMessage";

export function ConnectWallet() {
	const { isConnected, address } = useAccount();
	const { connectors, connect } = useConnect();
	const { disconnect } = useDisconnect();

	if (isConnected)
		return (
			<div>
				<span>{`Connected address: ${address}`}</span>
				<button type="button" onClick={() => disconnect()}>
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
					data-testid={`${connector.id}-connector`}
					onClick={() => connect({ connector })}
				>
					{connector.name}
				</button>
			))}
		</div>
	);
}
