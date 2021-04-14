import React from 'react';
import { View, StyleSheet } from 'react-native';

import NavHeader from './components/nav-header';
import BrowseFilesPage from './pages/browse-files';
import OrganizePage from './pages/organize';
import AppNavigationBar from './components/app-bar';

// import PDFExample from './example';

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
            
            <AppNavigationBar />
        </View>
    );
};

export default App;
// export default PDFExample;