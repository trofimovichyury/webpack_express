module.exports = {
    entry: './src/script.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    watch: true
};