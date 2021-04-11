import React from 'react';
import { View, StyleSheet } from 'react-native';

import NavHeader from './components/nav-header';
import BrowseFilesPage from './pages/browse-files';
import OrganizePage from './pages/organize';


const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: "#ffffff",
    }
});

const App = () => {
    return (
        <View style={styles.appContainer}>
            <NavHeader />

            {/* <OrganizePage /> */}
            <BrowseFilesPage />
        </View>
    );
};

export default App;