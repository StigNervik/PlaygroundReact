
import {Unit} from "../core/unit"

class UnitFactory {

    constructor() {
        this._units = new Map();
        this._unitList = [];

    }

    findOrCreateUnit(unitId) {
        let unit = this.findUnit(unitId)
        if (unit === undefined) {
            // The unit is not stored in the unit collections,
            // create the unit and store it.
            unit = new Unit(unitId);
            this._units.set(unitId, unit);
            this._unitList.push(unit);
        }

        return unit;
    }

    findUnit(unitId) {
        return this._units.get(unitId);
    }

    unitCount() {
        return this._unitList.length;
    }

}

export let unitfactory = new UnitFactory();
