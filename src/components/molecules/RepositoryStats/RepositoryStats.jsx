import React from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "../../atoms/StyledText/StyledText";

const parseThousands = value => {
  return value >= 100
    ? `${Math.round(value / 100) / 10}k`
    : String(value);
};

const RepositoryStats = props => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <StyledText align="center" fontWeight="bold">
          {parseThousands(props.forksCount)}
        </StyledText>
        <StyledText align="center" color="secondary">Forks</StyledText>
      </View>

      <View style={styles.item}>
        <StyledText align="center" fontWeight="bold">
          {parseThousands(props.star)}
        </StyledText>
        <StyledText align="center" color="secondary">Stars</StyledText>
      </View>

      
      <View style={styles.item}>
        <StyledText align="center" fontWeight="bold">
          {props.rating}
        </StyledText>
        <StyledText align="center" color="secondary">Rating</StyledText>
      </View>
    </View>
  );
};

// Estilos

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  item: {
    flex: 1,
    paddingHorizontal: 8,
  },
});

export default RepositoryStats;
