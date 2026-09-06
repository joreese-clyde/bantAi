import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
  },
  logo: {
    width: 180,
    height: 180,
  },
  loadingTrack: {
    width: 120,
    height: 3,
    borderRadius: 99,
    backgroundColor: "#e8e8e8",
    overflow: "hidden",
  },
  loadingBar: {
    width: "50%",
    height: "100%",
    borderRadius: 99,
    backgroundColor: "#111111",
  },
});