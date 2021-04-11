export function makewd(val) {
    return {width: val, maxWidth: val};
}

export function makeht(val) {
    return {height: val, maxHeight: val};
}

export function flexcenter(val = 1) {
    return {flex: val, justifyContent: "center", alignItems: "center"};
}