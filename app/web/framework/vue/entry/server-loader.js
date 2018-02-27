module.exports = function (source) {
    this.cacheable();
    return "\n    import render from 'server';\n    import Page from '" + this.resourcePath.replace(/\\/g, '\\\\') + "';\n    export default render({ ...Page });\n  ";
};
