class page {
    open(path){
        return browser.url(path);
    }
}

module.exports = new page();