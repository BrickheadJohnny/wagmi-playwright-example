# Wagmi & Playwright example

This is an example repository for writing E2E tests for [wagmi](https://wagmi.sh) apps with [Playwright](https://playwright.dev).

## Getting started

We've created a [Test Client](https://viem.sh/docs/clients/test#test-client), passed it to the `wagmiConfig` & used the [Mock connector](https://wagmi.sh/core/api/connectors/mock) in the tests. Before running the tests we spin up an Anvil node, so we can use it in our tests for onchain interactions (see the `webServer` property in `playwright.config.ts`).

1. [Install Foundry](https://book.getfoundry.sh/getting-started/installation)
2. Install the dependencies with `npm install`
3. Define the required environment variables in an `.env` file
4. Run the dev server with `npm run dev` (or it with `npm run build`)
5. Run the tests with `npm run test` (you can also run tests in ui or debug mode with the `test:ui` or `test:debug` scripts)

## Credits
This solution is heavily inspired by [Thiago Brezinski's](https://www.callstack.com/blog/testing-expo-web3-apps-with-wagmi-and-anvil#connecting-to-the-local-blockchain) and [Rommert Zijlstra's](https://medium.com/renftlabs/end-to-end-testing-dapps-with-playwright-rainbowkit-wagmi-and-anvil-90d1d143512c) solution. I highly recommend reading these articles!