import "@walletconnect/react-native-compat";
import { WagmiConfig } from "wagmi";
import { polygon, polygonMumbai } from "viem/chains";
import {
  createWeb3Modal,
  defaultWagmiConfig,
} from "@web3modal/wagmi-react-native";

export function Web3ModalConnection() {
  // // 1. Get projectId at https://cloud.walletconnect.com
  // const projectId = 'b444185fa903ddf729af809910c4897c'

  // // 2. Create config
  // const metadata = {
  //   name: 'Web3Modal RN',
  //   description: "This is the connection point for Gam3eya app on react native",
  //   url: "https://web3modal.com",
  //   icons: ["https://avatars.githubusercontent.com/u/37784886"],
  //   // redirect: {
  //   //   native: "http://",
  //   //   universal: "meltohamy.xyz",
  //   // },
  // };

  // const chains = [polygon, polygonMumbai];

  // const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

  // // 3. Create modal
  // createWeb3Modal({
  //   projectId,
  //   chains,
  //   wagmiConfig,
  // });

  // return wagmiConfig;
}
