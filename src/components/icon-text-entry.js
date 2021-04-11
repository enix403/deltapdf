import React from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';
import { makewd, makeht, flexcenter } from '../utils/dimensions';
import { AppTextRegular } from './app-text';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'row',
        // ...makeht(60),
        borderRadius: 10,
        overflow: 'hidden',
    },
    pressableContainer: {
        padding: 7,
        flex: 1,
        flexDirection: 'row',
    },
    
    iconContainer: {
        aspectRatio: 1,
    },
    
    icon: flexcenter(),

    textContainer: {
        flex: 1,
        justifyContent: "center",
        marginLeft: 10,
    },
    title: {
        fontSize: 17
    },
    subtitle: {
        fontSize: 15,
        color: "#636c75"
    }
});

// Probably the most weird name
const _IconTextEntry = ({
    title,
    subtitle,
    iconName,
    colorLight,
    colorDark,
    onTouch = () => { },
    onLongTouch = () => { },
    height = 60,
    iconSize = 30
}) => {
    return (
        <View style={[styles.root, makeht(height)]}>
            <Pressable
                style={styles.pressableContainer}
                android_ripple={{color: "#e0e0e0" }}
                onPress={onTouch}
                onLongPress={onLongTouch}
            >
                <View style={styles.iconContainer}>
                    <View style={[styles.icon, {
                        backgroundColor: colorLight,
                        borderRadius: height / 2
                    }]}>
                        <Icon name={iconName} size={iconSize} color={colorDark} />
                    </View>
                </View>

                <View style={styles.textContainer}>
                    <AppTextRegular 
                        ellipsizeMode="middle" 
                        numberOfLines={1} 
                        style={styles.title}
                    >
                        {title}
                    </AppTextRegular>
                    <AppTextRegular style={styles.subtitle}>{subtitle}</AppTextRegular>
                </View>

            </Pressable>
        </View>
    );
};

const IconTextEntry = React.memo(_IconTextEntry);

export default IconTextEntry;