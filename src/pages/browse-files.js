import React, { useState, useRef } from 'react';
import { View, FlatList, Pressable, StyleSheet, Animated } from 'react-native';

import IconTextEntry from './../components/icon-text-entry';
import { AppTextRegular } from '../components/app-text';
// backgroundColor: '#212531'


const FileEntry = ({ fileName, fileInfo, onTouch = () => { }, onLongTouch = () => { } }) => {
    return (
        <IconTextEntry
            title={fileName}
            subtitle={fileInfo}
            colorLight="#fed6d6"
            colorDark="#ed5151"
            iconName="description"
            onTouch={onTouch}
            onLongTouch={onLongTouch}
        />
    );
};

const files = [
    {
        key: 1,
        name: "SYSINFO.pdf",
        size: "2.1 MB",
        dateCreated: "06-Feb-2021"
    },
    {
        key: 2,
        name: "Linear-Algebra-Done-Right.pdf",
        size: "2.1 MB",
        dateCreated: "06-Feb-2021"
    },
    {
        key: 3,
        name: "Number-Theory.pdf",
        size: "2.1 MB",
        dateCreated: "06-Feb-2021"
    },
    {
        key: 4,
        name: "Operating_System_Design.pdf",
        size: "2.1 MB",
        dateCreated: "06-Feb-2021"
    },
    {
        key: 5,
        name: "OS-TEP.pdf",
        size: "2.1 MB",
        dateCreated: "06-Feb-2021"
    },
    {
        key: 6,
        name: "3D Math Primer for Graphics.pdf",
        size: "2.1 MB",
        dateCreated: "06-Feb-2021"
    },
    {
        key: 7,
        name: "Foundations of Game Development and nice little toy car.pdf",
        size: "2.1 MB",
        dateCreated: "06-Feb-2021"
    },
    {
        key: 8,
        name: "The Dragon Book.pdf",
        size: "2.1 MB",
        dateCreated: "06-Feb-2021"
    },
    {
        key: 9,
        name: "01-W-1.pdf",
        size: "2.1 MB",
        dateCreated: "06-Feb-2021"
    },
    {
        key: 10, name: "01-W-2.pdf",
        size: "2.1 MB",
        dateCreated: "06-Feb-2021"
    },
    {
        key: 12,
        name: "Crafting_Interpreters.pdf",
        size: "2.1 MB",
        dateCreated: "06-Feb-2021"
    },
    {
        key: 1324,
        name: "Build-Your-Own-Lisp.pdf",
        size: "2.1 MB",
        dateCreated: "06-Feb-2021"
    },
    {
        key: 324,
        name: "Engineering_A_Compiler.pdf",
        size: "2.1 MB",
        dateCreated: "06-Feb-2021"
    },
    {
        key: 1314,
        name: "Convex-Optimization.pdf",
        size: "2.1 MB",
        dateCreated: "06-Feb-2021"
    },
    {
        key: 53531,
        name: "How To Prove It.pdf",
        size: "2.1 MB",
        dateCreated: "06-Feb-2021"
    },
];

const bottombar_styles = StyleSheet.create({
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,

        zIndex: 5,
    },
    container: {
        backgroundColor: '#ffffff',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 400,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    }
});

const BottomBar = () => {

    const fadeAnim = useRef(new Animated.Value(0)).current;  // Initial value for opacity: 0

    React.useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 400,
                duration: 1000,
            }
        ).start();
    }, [fadeAnim])

    return (
        <Pressable style={bottombar_styles.overlay}>
            <Animated.View style={[bottombar_styles.container, {height: fadeAnim}]}>

            </Animated.View>
        </Pressable>
    );
};

class BrowseFilesPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <View style={{
                    flex: 1,
                    paddingHorizontal: 10,
                    backgroundColor: '#ffffff',
                }}>
                    <FlatList
                        data={files}
                        renderItem={({ item: file }) => {
                            return (
                                <FileEntry
                                    fileName={file.name}
                                    fileInfo={file.dateCreated + " (" + file.size + ")"}
                                />
                            );
                        }}
                        keyExtractor={file => file.key}
                        ListFooterComponent={View}
                        ListFooterComponentStyle={{ height: 100 }}
                        ListHeaderComponent={View}
                        ListHeaderComponentStyle={{ height: 10 }}
                    />
                </View>
                {/* <BottomBar /> */}
            </>
        );
    }
};

export default BrowseFilesPage;
