import React, { useCallback } from 'react';
import {
    View,
    FlatList,
    Pressable,
    StyleSheet,
    Animated,
} from 'react-native';

import IconTextEntry from './../components/icon-text-entry';


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
        backgroundColor: '#000000',
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


const DRAWER_ANIM_DURATION = 150;

class BottomDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            container_height: new Animated.Value(0),
            show: false
        };
    }

    componentDidMount() {
        if (this.props.enabled) {
            this.showDrawer();
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.enabled != this.props.enabled) {
            if (this.props.enabled) {
                this.showDrawer();
            }
            else {
                this.hideDrawer();
            }
        }
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.enabled != this.props.enabled;
    }

    showDrawer = () => {
        this.setState({ show: true });
        this.state.container_height.setValue(0);
        Animated.timing(this.state.container_height, {
                duration: DRAWER_ANIM_DURATION,
                toValue: 1,
                useNativeDriver: false
        }).start(({ finished }) => {
            if (!finished) {
                this.setState({ show: false });
            }
        });
    }


    hideDrawer = () => {
        if (!this.state.show) {
            return;
        }
        this.state.container_height.setValue(1);
        Animated.timing(this.state.container_height, {
            duration: DRAWER_ANIM_DURATION,
            toValue: 0,
            useNativeDriver: false
        }).start(() => {
            this.setState({ show: false });
        });
    }

    render() {
        if (!this.state.show) {
            return null;
        }

        return (
            <Pressable
                style={[bottombar_styles.overlay, {
                    opacity: this.state.container_height.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 0.6]
                    })
                }]}
                onPress={this.props.onBackdropPress}
            >
                <Animated.View style={[bottombar_styles.container, {
                    height: this.state.container_height.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 400]
                    })
                }]}>

                </Animated.View>
            </Pressable>
        );
    }
}


class BrowseFilesPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            overlay: false
        };
    }

    render() {
        return (
            <React.Fragment>
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
                                    onTouch={() => { this.setState({ overlay: true }) }}
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
                <BottomDrawer
                    onBackdropPress={() => {
                        this.setState({ overlay: false })
                    }}
                    enabled={this.state.overlay}
                />
            </React.Fragment>
        );
    }
};

export default BrowseFilesPage;
