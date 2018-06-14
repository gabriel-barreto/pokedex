const stringReplace = (input) => {
    if (!input) return '';
    return `${input}`.replace('.', ',');
}

export default stringReplace;
