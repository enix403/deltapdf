import React from 'react';
import { Text } from 'react-native';


// const FONT_BLACK_ITALIC = "FiraSans-BlackItalic"
// const FONT_XXBOLD_ITALIC = "FiraSans-ExtraBoldItalic"
// const FONT_XBOLD_ITALIC = "FiraSans-SemiBoldItalic"
// const FONT_BOLD_ITALIC = "FiraSans-BoldItalic"
// const FONT_MEDIUM_ITALIC = "FiraSans-MediumItalic"
// const FONT_REGULAR_ITALIC = "FiraSans-Italic"
// const FONT_LIGHT_ITALIC = "FiraSans-LightItalic"
// const FONT_THIN_ITALIC = "FiraSans-ThinItalic"
// const FONT_XLIGHT_ITALIC = "FiraSans-ExtraLightItalic"

// const FONT_BLACK = "FiraSans-Black"
// const FONT_XXBOLD = "FiraSans-ExtraBold"
// const FONT_XBOLD = "FiraSans-SemiBold"
const FONT_BOLD = "FiraSans-Bold"
const FONT_MEDIUM = "FiraSans-Medium"
const FONT_REGULAR = "FiraSans-Regular"
const FONT_LIGHT = "FiraSans-Light"
// const FONT_THIN = "FiraSans-Thin"
// const FONT_XLIGHT = "FiraSans-ExtraLight"

export const AppTextRegular = (props) => {
    const { style, ...otherProps } = props;
    return (
        <Text 
            style={[{fontFamily: FONT_REGULAR}, style]}
            {...otherProps}
        >
            {props.children}
        </Text>
    );
};

export const AppTextMedium = (props) => {
    const { style, ...otherProps } = props;
    return (
        <Text
            style={{fontFamily: FONT_MEDIUM, ...style}}
            {...otherProps}
        >
            {props.children}
        </Text>
    );
};

export const AppTextBold = (props) => {
    const { style, ...otherProps } = props;
    return (
        <Text
            style={{fontFamily: FONT_BOLD,...style}}
            {...otherProps}
        >
            {props.children}
        </Text>
    );
};


export const AppTextLight = (props) => {
    const { style, ...otherProps } = props;
    return (
        <Text
            style={{fontFamily: FONT_LIGHT,...style}}
            {...otherProps}
        >
            {props.children}
        </Text>
    );
};
