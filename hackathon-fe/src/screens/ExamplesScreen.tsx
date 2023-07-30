import * as Linking from "expo-linking";
import { Button, Image, Text } from "react-native";
import { atom, useRecoilState } from "recoil";

import { Screen } from "../components/Screen";

const testAtom = atom<"native" | "bright">({
  key: "testAtom",
  default: "native",
});

function LearnMoreLink({ url }: { url: string }) {
  return <Text onPress={() => Linking.openURL(url)}>Learn more</Text>;
}

export function ExamplesScreens() {
  const [future, setFuture] = useRecoilState(testAtom);

  return (
    <Screen>
      <div>Setting page</div>
    </Screen>
  );
}
