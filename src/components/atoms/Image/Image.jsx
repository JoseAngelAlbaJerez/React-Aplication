import React from "react";
import { Image, StyleSheet } from 'react-native';

const ImageAtom = ({ source, style }) => (
    <Image source={source} style={[styles.image, style]} />
);

const styles = StyleSheet.create({
    image: {
        width: 48,
        height: 48,
        borderRadius: 4
    }
});

export default ImageAtom;
