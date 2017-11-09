
export class Unit {

    constructor(unitId) {
        this._unitId = unitId;
        this._objects = new Map();
    }

    get unitId() {return this._unitId;}

    createOrUpdateObject(name, obj) {
        this._objects.set(name, obj);
    }

    findObject(name) {
        return this._objects.get(name);
    }

    get unitFunction() {
        let res = "xxxx";
        let properties = this.findObject("Properties");
        if (properties !== undefined) {
            res = properties.Function;
        }

        return res;
    }


    get unitClass() {
        let res = "xxxx";
        let properties = this.findObject("Properties");
        if (properties !== undefined) {
          if(properties.Class !== undefined){
            res = properties.Class.split("?");
        }}
        return res[0];
    }

    get name() {
        let res = "xxxx";
        let properties = this.findObject("Properties");
        if (properties !== undefined) {
          if(properties.Name !== undefined){
            res = properties.Name;
        }}
        return res;
    }
}
