class CacheServer {

    constructor() {
        this.obj = {};
    }

    set(key, value) {
        this.obj[this.formatObject(key, false)] = value;
    }

    get(key) {
        return this.obj[this.formatObject(key, false)];
    }

    formatArray(anArray) {
        for (var item of anArray) {
            item = this.formatObject(item)
        }
        anArray.sort();
        return anArray;
    }

    formatObject(anObject, nested = true) {
        var sortedObject = {};
        if (anObject instanceof Object) {
            if (anObject instanceof Array) {
                sortedObject = this.formatArray(anObject);
            } else {
                Object.keys(anObject).sort().forEach(key => {
                    sortedObject[key] = this.formatObject(anObject[key]);
                });
            }
            return nested ? sortedObject : JSON.stringify(sortedObject);
        }
        return String(anObject);
    }


}

module.exports = CacheServer;