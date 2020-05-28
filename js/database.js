import * as idb from "./lib/idb.js";

class Database {
    constructor(databaseName, version) {
        this.databaseName = databaseName
        this.version = version
    }

    upgradeCallback(upgradeDb) {
        const clubsObjStore = upgradeDb.createObjectStore('clubs', {keyPath: 'id'})
    }

    async init() {
        this.dbInstance = await idb.open(this.databaseName, this.version, this.upgradeCallback)
    }

    async saveClub(clubData) {
        try {
            const transaction = await this.dbInstance.transaction('clubs', 'readwrite')
            const store = await transaction.objectStore('clubs')
            await store.put(clubData, clubData.id)
            console.log('Club berhasil disimpan!')
            return transaction.complete
        } catch (e) {
            console.error(`Error woi pas nge-save: ${e}`)
        }
    }

    async getAllClubs() {
        try {
            const transaction = await this.dbInstance.transaction('clubs', 'readonly')
            const store = await transaction.objectStore('clubs')
            console.log('Club berhasil diambil (lol bahasanya aneh)!')
            return store.getAll()
        } catch (e) {
            console.error(`Error woi pas nge-save: ${e}`)
        }
    }
}

export {Database}