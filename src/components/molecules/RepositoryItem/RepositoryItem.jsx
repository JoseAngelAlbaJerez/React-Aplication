import React from "react";
import { View, StyleSheet } from 'react-native';
import RepositoryItemHeader from "../RepositoryItemHeader/RepositoryItemHeader";
import RepositoryStats from "../RepositoryStats/RepositoryStats";

const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>
        <RepositoryItemHeader {...props} />
        <RepositoryStats {...props} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingVertical: 5,
    }
});

export default RepositoryItem;