import React from 'react'
import { Text, StyleSheet, View, Dimensions } from 'react-native'


export default props => {
    return (
        <View style={styles.display}>
            <Text style = {styles.displayValue}
                    numberOfLines={1}>
                        {props.value}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
  display: {
    flex: 1,
    width: Dimensions.get("window").width,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
    alignItems: "flex-end",
  },
  displayValue: {
    fontSize: 60,
    color: "#fff",
  },
});