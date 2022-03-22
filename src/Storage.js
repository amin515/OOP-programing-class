



class Storage {

    /**
     * check staff LS data 
     * @param {*} key 
     * @returns 
     */ 

    static has(key) {
        return this.has(key) ? this.has(key) : false;
    }

    /**
     * get data from LS
     * @param {*} key 
     * @returns 
     */


    static get(key) {

        if (this.has(key)) {
            return JSON.parse(this.has(key))
        } else {
            return 'No data found'
        }
    }


    /**
     * set data to LS
     * @param {*} key 
     * @param {*} data 
     */


    static set(key, data) {
        let set_data = [];

        if (this.has(key)) {
            set_data = JSON.parse(this.has(key))
        }
        set_data.push(data);
        localStorage.setItem(JSON.stringify(set_data));
    }

}

export default Storage;