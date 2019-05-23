module.exports = {
    content: ['../../../layouts/**/*.html', '../layouts/**/*.html','./css/**/*.css',],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
}