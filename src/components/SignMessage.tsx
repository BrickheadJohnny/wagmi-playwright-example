import { useState } from "react";
import { useSignMessage } from "wagmi";

export function SignMessage() {
	const { signMessageAsync } = useSignMessage();
	const [signedMessage, setSignedMessage] = useState<
		`0x${string}` | undefined
	>();

	return (
		<div>
			<button
				type="button"
				onClick={() =>
					signMessageAsync({
						message: "This message will be signed with the mock wallet.",
					}).then(setSignedMessage)
				}
			>
				Sign message
			</button>
			{signedMessage && `Signature: ${signedMessage}`}
		</div>
	);
}
