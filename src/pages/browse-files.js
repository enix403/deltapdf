import React from 'react';
import { View, ScrollView } from 'react-native';
import IconTextEntry from './../components/icon-text-entry';

const FileEntry = ({ fileName, fileInfo }) => {
    return (
        <IconTextEntry
            title={fileName}
            subtitle={fileInfo}
            colorLight="#fed6d6"
            colorDark="#ed5151"
            iconName="description"
        />
    );
};

const files = [
    {
        name: "SYSINFO.pdf",
        size: "2.1 MB",
        dateCreated: "06-Feb-2021"
    },
    {
        name: "Linear-Algebra-Done-Right.pdf",
        size: "2.1 MB",
        dateCreated: "06-Feb-2021"
    },
    {
        name: "Number-Theory.pdf",
        size: "2.1 MB",
        dateCreated: "06-Feb-2021"
    },
    {
        name: "Operating_System_Design.pdf",
        size: "2.1 MB",
        dateCreated: "06-Feb-2021"
    },
    {
        name: "OS-TEP.pdf",
        size: "2.1 MB",
        dateCreated: "06-Feb-2021"
    },
    {
        name: "3D Math Primer for Graphics.pdf",
        size: "2.1 MB",
        dateCreated: "06-Feb-2021"
    },
    {
        name: "Foundations of Game Development and nice little toy car",
        size: "2.1 MB",
        dateCreated: "06-Feb-2021"
    },
    {
        name: "The Dragon Book.pdf",
        size: "2.1 MB",
        dateCreated: "06-Feb-2021"
    },
    {
        name: "01-W-1.pdf",
        size: "2.1 MB",
        dateCreated: "06-Feb-2021"
    },
    {
        name: "01-W-2.pdf",
        size: "2.1 MB",
        dateCreated: "06-Feb-2021"
    },
    {
        name: "Crafting_Interpreters.pdf",
        size: "2.1 MB",
        dateCreated: "06-Feb-2021"
    },
    {
        name: "Build-Your-Own-Lisp.pdf",
        size: "2.1 MB",
        dateCreated: "06-Feb-2021"
    },
    {
        name: "Engineering_A_Compiler.pdf",
        size: "2.1 MB",
        dateCreated: "06-Feb-2021"
    },
    {
        name: "Convex-Optimization.pdf",
        size: "2.1 MB",
        dateCreated: "06-Feb-2021"
    },
    {
        name: "How To Prove It.pdf",
        size: "2.1 MB",
        dateCreated: "06-Feb-2021"
    },
];

const BrowseFilesPage = () => {
    return (
        <View style={{
            flex: 1,
            paddingHorizontal: 10,
        }}>
            <ScrollView>
                {files.map((file, index) => {
                    return (
                        <FileEntry
                            key={index}
                            fileName={file.name}
                            fileInfo={file.dateCreated + " (" + file.size + ")"}
                        />
                    );
                })}
            </ScrollView>
        </View>
    );
};

export default BrowseFilesPage;