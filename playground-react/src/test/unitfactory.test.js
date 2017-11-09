// import {expect, assert} from 'chai'
import {Unit} from "../core/unit"
import {unitfactory} from "../core/unitfactory"


describe('UnitFactory', () => {

    it('find or create unit', () => {

        let unit = unitfactory.findOrCreateUnit("1");


        /*
        expect(unit._unitId).to.be.a('string');
        assert.equal(unit._unitId, "1");
        assert.equal(unit._name, "");
        assert.equal(unitfactory.unitCount(), 1);

        unit = unitfactory.findUnit("2");
        // expect(unit).to.equal(unit);
        */
    });

});
