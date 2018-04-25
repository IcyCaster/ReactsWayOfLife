import BasicRulesService from "./BasicRulesService";

describe('BasicRulesService', () => {

    describe('UnderPopulation', () => {
        it('should return true if there are one of less neighbours', () => {
            const neighbours = 1;
            const isUnderPopulated = BasicRulesService.underPopulation(neighbours);
            expect(isUnderPopulated).toBeTruthy();
        });

        it('should return false if there are two or more neighbours', () => {
            const neighbours = 2;
            const isUnderPopulated = BasicRulesService.underPopulation(neighbours);
            expect(isUnderPopulated).toBeFalsy();
        });
    });

    describe('OverPopulation', () => {
        it('should return true if there are four or more neighbours', () => {
            const neighbours = 4;
            const isUnderPopulated = BasicRulesService.overPopulation(neighbours);
            expect(isUnderPopulated).toBeTruthy();
        });

        it('should return false if there are three or less neighbours', () => {
            const neighbours = 3;
            const isUnderPopulated = BasicRulesService.overPopulation(neighbours);
            expect(isUnderPopulated).toBeFalsy();
        });
    });

    describe('Reproductive', () => {
        it('should return true if there are exactly three neighbours', () => {
            const neighbours = 3;
            const isUnderPopulated = BasicRulesService.reproductive(neighbours);
            expect(isUnderPopulated).toBeTruthy();
        });

        it('should return false if there are two or less neighbours', () => {
            const neighbours = 2;
            const isUnderPopulated = BasicRulesService.reproductive(neighbours);
            expect(isUnderPopulated).toBeFalsy();
        });

        it('should return false if there are four or more neighbours', () => {
            const neighbours = 4;
            const isUnderPopulated = BasicRulesService.reproductive(neighbours);
            expect(isUnderPopulated).toBeFalsy();
        });
    });
});