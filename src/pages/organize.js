import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import IconTextEntry from './../components/icon-text-entry';


const FolderEntry = ({ folderName, subfolderCount, subfilesCount }) => {
    return (
        <IconTextEntry
            title={folderName}
            subtitle={subfolderCount + " folders, " + subfilesCount + " files"}
            iconName="source"
            colorLight="#fceec1"
            colorDark="#f4bd00"
        />
    );
};

const styles = StyleSheet.create({
    pageContainer: {
        paddingHorizontal: 10,
        flex: 1,
        paddingTop: 10
    }
});


const OrganizePage = () => {
    return (
        <View style={styles.pageContainer}>
            <ScrollView>
                <FolderEntry
                    folderName="C++ Best Practices"
                    subfolderCount={4}
                    subfilesCount={3}
                />
                <FolderEntry
                    folderName="3D Mathematics"
                    subfolderCount={4}
                    subfilesCount={3}
                />
                <FolderEntry
                    folderName="Compiler Design multiple"
                    subfolderCount={4}
                    subfilesCount={3}
                />
                <FolderEntry
                    folderName="Linear Algebra"
                    subfolderCount={4}
                    subfilesCount={3}
                />
                <FolderEntry
                    folderName="Number Theory"
                    subfolderCount={4}
                    subfilesCount={3}
                />
                <FolderEntry
                    folderName="Operating System Design"
                    subfolderCount={4}
                    subfilesCount={3}
                />
            </ScrollView>
        </View>
    );
};

export default OrganizePage;