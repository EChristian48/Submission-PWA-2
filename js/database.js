import * as idb from "./lib/idb.js";

class Database {
    constructor(databaseName, version) {
        this.databaseName = databaseName
        this.version = version
    }

    upgradeCallback(upgradeDb) {

    }

    init() {
        this.dbInstance = idb.open(this.databaseName, this.version, this.upgradeCallback)
    }
}