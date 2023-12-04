import { View, Text, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "./common";
import { useAccount } from "wagmi";
import { W3mButton } from "@web3modal/wagmi-react-native";

export function Main() {
  const background = "bg-gradient-to-r from-primary to-secondary";
  const { isConnecting, address, isDisconnected } = useAccount();
  return (
    //
    <LinearGradient
      // Button Linear Gradient
      colors={[Colors.primary, Colors.secondary]}
    >
      <View
        className={`${background} flex justify-center items-center min-h-full min-w-full`}
      >
        <Text className="text-textColor text-2xl">
          Start a <Text className="text-accent text-2xl">Gam3eya</Text> now!
        </Text>
        {/* <Button title="Connect Wallet"></Button> */}
        {/* {!isDisconnected && !isConnecting && <ConnectButton />}*/}
        {(!isConnecting || isDisconnected) && <W3mButton />}
      </View>
    </LinearGradient>
  );
}
