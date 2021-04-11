import React from 'react';
import { View, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AppTextMedium as AppTextBold } from './app-text';

const HEADER_MARGIN_TOP = StatusBar.currentHeight;
const NAV_ICON_SIZE = 24;

const NavHeader = () => {
    return (
        <View style={{
            marginTop: HEADER_MARGIN_TOP,
            height: 60,
            maxHeight: 60,
            paddingHorizontal: 20,
            backgroundColor: '#ffffff',
            flex: 1,
            flexDirection: "row",
            justifyContent: 'flex-start',
            alignItems: "center",

            // elevation: 2

        }}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#e3e3e3" translucent={true} />

            {/* Side Drawer icom */}
            <View style={{
                flex: 1,
            }}>
                <Icon name="format-list-bulleted" size={NAV_ICON_SIZE} />
            </View>

            {/* Page Name */}
            <View style={{
                flex: 2,
                flexDirection: "row",
                justifyContent: "center",
            }}>
                <AppTextBold style={{
                    fontSize: 23
                }}>
                    Device Files
                </AppTextBold>
            </View>
            
            {/* Search and options icon */}
            <View style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-end",
            }}>
                <Icon name="search" size={NAV_ICON_SIZE} style={{ marginRight: 20 }} />
                <Icon name="more-vert" size={NAV_ICON_SIZE} />
            </View>

        </View>
    );
};

export default NavHeader;