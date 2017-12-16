// import {expect, assert} from 'chai'
import {Unit} from "../core/unit"
import {unitfactory} from "../core/unitfactory"


describe('Unit', () => {

    it('find or create unit1', () => {


        let unit = unitfactory.findOrCreateUnit("1");
        expect(unit._unitId).toEqual("1");

        // expect(unit._unitId).to.be.a('string');
        // assert.equal(unit._unitId, "1");
        // assert.equal(unit._name, "");
        // assert.equal(manager.unitCount(), 1);

    });

});
