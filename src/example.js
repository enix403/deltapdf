/**
 * Copyright (c) 2017-present, Wonday (@wonday.org)
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    Dimensions,
    SafeAreaView,
    View,
    Text,
    Platform
} from 'react-native';

import Pdf from 'react-native-pdf';

const WIN_WIDTH = Dimensions.get('window').width;
const WIN_HEIGHT = Dimensions.get('window').height;

const Hello = () => {
    // return (
        
    // );
};

export default class PDFExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            scale: 1,
            numberOfPages: 0,
            darkMode: false,
            width: WIN_WIDTH
        };

        this.pdf = null;
    }

    prePage = () => {
        let prePage = this.state.page > 1 ? this.state.page - 1 : 1;
        this.pdf.setPage(prePage);
        console.log(`prePage: ${prePage}`);
    };

    nextPage = () => {
        let nextPage = this.state.page + 1 > this.state.numberOfPages ? this.state.numberOfPages : this.state.page + 1;
        this.pdf.setPage(nextPage);
        console.log(`nextPage: ${nextPage}`);
    };

    zoomOut = () => {
        let scale = this.state.scale > 1 ? this.state.scale / 1.2 : 1;
        // let scale = Math.min(1, scale / 1.2);
        this.setState({ scale: scale });
        console.log(`zoomOut scale: ${scale}`);
    };

    zoomIn = () => {
        let scale = this.state.scale * 1.2;
        scale = scale > 3 ? 3 : scale;
        // let scale = Math.max(3, scale * 1.2);
        this.setState({ scale: scale });
        console.log(`zoomIn scale: ${scale}`);
    };

    switchDarkMode = () => {
        this.setState({ darkMode: !this.state.darkMode, scale: 1 });
    };

    render = () => {
        
        // let source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };
        //let source = {uri:'http://samples.leanpub.com/thereactnativebook-sample.pdf',cache:true};
        //let source = {uri: 'ms-appx:///test.pdf'}
        //let source = require('./test.pdf');  // ios only
        //let source = {uri:'bundle-assets://test.pdf'};
        
        //let source = {uri:'file:///sdcard/test.pdf'};
        let source = {uri:'bundle-assets://test-file.pdf'};

        return (
            <SafeAreaView style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableHighlight disabled={this.state.page === 1}
                        style={this.state.page === 1 ? styles.btnDisable : styles.btn}
                        onPress={() => this.prePage()}>
                        <Text style={styles.btnText}>{'-'}</Text>
                    </TouchableHighlight>
                    <View style={styles.btnText}><Text style={styles.btnText}>Page</Text></View>
                    <TouchableHighlight disabled={this.state.page === this.state.numberOfPages}
                        style={this.state.page === this.state.numberOfPages ? styles.btnDisable : styles.btn}
                        testID='NextPage'
                        onPress={() => this.nextPage()}>
                        <Text style={styles.btnText}>{'+'}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight disabled={this.state.scale === 1}
                        style={this.state.scale === 1 ? styles.btnDisable : styles.btn}
                        onPress={() => this.zoomOut()}>
                        <Text style={styles.btnText}>{'-'}</Text>
                    </TouchableHighlight>
                    <View style={styles.btnText}><Text style={styles.btnText}>Scale</Text></View>
                    <TouchableHighlight disabled={this.state.scale >= 3}
                        style={this.state.scale >= 3 ? styles.btnDisable : styles.btn}
                        onPress={() => this.zoomIn()}>
                        <Text style={styles.btnText}>{'+'}</Text>
                    </TouchableHighlight>
                    <View style={styles.btnText}><Text style={styles.btnText}>{'Dark Mode:'}</Text></View>
                    <TouchableHighlight style={styles.btn} onPress={() => this.switchDarkMode()}>
                        {!this.state.darkMode ? (<Text style={styles.btnText}>{'false'}</Text>) : (
                            <Text style={styles.btnText}>{'true'}</Text>)}
                    </TouchableHighlight>

                </View>
                <View style={{ flex: 1, width: this.state.width }}>
                    <Pdf ref={(pdf) => {
                        this.pdf = pdf;
                    }}
                        source={source}
                        horizontal={false}
                        spacing={6}
                        style={{ flex: 1, backgroundColor: this.state.darkMode ? '#292929' : '#e3e3e3' }}
                    />
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    btn: {
        margin: 2,
        padding: 2,
        backgroundColor: "aqua",
    },
    btnDisable: {
        margin: 2,
        padding: 2,
        backgroundColor: "gray",
    },
    btnText: {
        margin: 2,
        padding: 2,
    }
});
