import { test, expect } from "@playwright/test";

test("can connect wallet", async ({ page }) => {
	await page.goto("/");
	const connectButton = await page.getByTestId("mock-connect-button");
	await connectButton.click();
	const addressSpan = await page.getByTestId("address");
	await expect(addressSpan).toHaveText(
		/0x246c702ac938badff4391d8c9a3500e2198d0561/,
	);
});

test("can sign message", async ({ page }) => {
	await page.goto("/");
	const connectButton = await page.getByTestId("mock-connect-button");
	await connectButton.click();

	const signMessageButton = await page.getByTestId("sign-message-button");
	await signMessageButton.click();

	const signature = await page.getByTestId("signature");
	await expect(signature).toHaveText(/0x/);
});
