import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { flexcenter, makeht } from '../utils/dimensions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AppTextRegular } from './app-text';

import Ripple from 'react-native-material-ripple';

const APP_BAR_HEIGHT = 60;
const HEIGHT_STYLE = makeht(APP_BAR_HEIGHT);

const BARBTN_DISABLED_COLOR = '#656c77';


const NavbarButton = ({
    text,
    iconName,
    color,
    enabled = false,
    onPress = () => { }
}) => {
    let targetColor = enabled ? color : BARBTN_DISABLED_COLOR;

    return (
        <View style={{ flex: 1 }}>
            <Ripple
                style={flexcenter()}
                rippleColor={color}
                rippleOpacity={0.3}
                rippleDuration={250}
                rippleCentered={true}
                rippleSize={90}
                onPress={onPress}
            >
                <Icon name={iconName} color={targetColor} size={28} />
                <AppTextRegular style={{ fontSize: 14, color: targetColor }}>
                    {text}
                </AppTextRegular>
            </Ripple>
        </View>
    )
};


const AppNavigationBar = () => {

    const [active_page, SetActivePage] = useState('org');

    return (
        <View style={[HEIGHT_STYLE, {
            flex: 1,
            flexDirection: 'row',
            borderTopColor: '#dbdbdb',
            borderTopWidth: 1,
            paddingHorizontal: 10,
        }]}>
            <NavbarButton
                text='Home'
                iconName='foundation'
                // color='#00bf9f'
                color='#2771e2'
                enabled={active_page === 'org'}
                onPress={() => { SetActivePage('org') }}
            />

            <NavbarButton
                text='Favourites'
                iconName='favorite'
                // color="#2771e2"
                color="#2771e2"
                enabled={active_page === 'fav'}
                onPress={() => { SetActivePage('fav') }}
            />

            <NavbarButton
                text='Recent'
                iconName='history'
                // color="#fa0240"
                color="#2771e2"
                enabled={active_page === 'rec'}
                onPress={() => { SetActivePage('rec') }}
            />

            <NavbarButton
                text='Files'
                iconName='folder'
                color='#2771e2'
                enabled={active_page === 'files'}
                onPress={() => { SetActivePage('files') }}
            />
        </View>
    );
};

export default AppNavigationBar;