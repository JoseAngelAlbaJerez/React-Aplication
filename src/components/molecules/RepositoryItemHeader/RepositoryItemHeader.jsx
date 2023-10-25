import React from "react";
import { View, StyleSheet } from 'react-native';
import StyledText from "../../atoms/StyledText/StyledText.jsx";
import theme from "../../../theme.js";
import ImageAtom from "../../atoms/Image/Image.jsx";

const RepositoryItemHeader = (props) => (
    <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
        <View style={{ paddingRight: 10 }}>
            <ImageAtom source={{ uri: props.image }} />
        </View>
        <View style={{ flex: 1 }}>
            <StyledText fontWeight={'bold'}>{props.fullname}</StyledText>
            <StyledText color={'secondary'}>{props.description}</StyledText>
            <StyledText style={styles.language}>{props.language}</StyledText>
        </View>
    </View>
);

const styles = StyleSheet.create({
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        marginVertical: 4,
        borderRadius: 4,
        overflow: 'hidden'
    }
});

export default RepositoryItemHeader;
