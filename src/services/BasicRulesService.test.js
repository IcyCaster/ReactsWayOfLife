import {isCellAlive, isOverPopulated, isReproductive, isUnderPopulated} from "./BasicRulesService";

describe('BasicRulesService', () => {

    describe('IsCellAlive', () => {

        it('should return false if the cell is alive with one neighbour', () => {
            const currentCellState = true;
            const neighbours = 1;
            const updatedCellState = isCellAlive(currentCellState, neighbours);
            expect(updatedCellState).toBeFalsy();
        });

        it('should return true if the cell is alive with two neighbours', () => {
            const currentCellState = true;
            const neighbours = 2;
            const updatedCellState = isCellAlive(currentCellState, neighbours);
            expect(updatedCellState).toBeTruthy();
        });

        it('should return true if the cell is alive with three neighbours', () => {
            const currentCellState = true;
            const neighbours = 3;
            const updatedCellState = isCellAlive(currentCellState, neighbours);
            expect(updatedCellState).toBeTruthy();
        });

        it('should return false if the cell is alive with four neighbours', () => {
            const currentCellState = true;
            const neighbours = 4;
            const updatedCellState = isCellAlive(currentCellState, neighbours);
            expect(updatedCellState).toBeFalsy();
        });

        it('should return false if the cell is dead with one neighbour', () => {
            const currentCellState = false;
            const neighbours = 1;
            const updatedCellState = isCellAlive(currentCellState, neighbours);
            expect(updatedCellState).toBeFalsy();
        });

        it('should return false if the cell is dead with two neighbours', () => {
            const currentCellState = false;
            const neighbours = 2;
            const updatedCellState = isCellAlive(currentCellState, neighbours);
            expect(updatedCellState).toBeFalsy();
        });

        it('should return true if the cell is dead with three neighbours', () => {
            const currentCellState = false;
            const neighbours = 3;
            const updatedCellState = isCellAlive(currentCellState, neighbours);
            expect(updatedCellState).toBeTruthy();
        });

        it('should return false if the cell is dead with four neighbours', () => {
            const currentCellState = false;
            const neighbours = 4;
            const updatedCellState = isCellAlive(currentCellState, neighbours);
            expect(updatedCellState).toBeFalsy();
        });
    });

    describe('UnderPopulation', () => {
        it('should return true if there are one of less neighbours', () => {
            const neighbours = 1;
            const isUnderPopulated = isUnderPopulated(neighbours);
            expect(isUnderPopulated).toBeTruthy();
        });

        it('should return false if there are two or more neighbours', () => {
            const neighbours = 2;
            const isUnderPopulated = isUnderPopulated(neighbours);
            expect(isUnderPopulated).toBeFalsy();
        });
    });

    describe('OverPopulation', () => {
        it('should return true if there are four or more neighbours', () => {
            const neighbours = 4;
            const isUnderPopulated = isOverPopulated(neighbours);
            expect(isUnderPopulated).toBeTruthy();
        });

        it('should return false if there are three or less neighbours', () => {
            const neighbours = 3;
            const isUnderPopulated = isOverPopulated(neighbours);
            expect(isUnderPopulated).toBeFalsy();
        });
    });

    describe('Reproductive', () => {
        it('should return true if there are exactly three neighbours', () => {
            const neighbours = 3;
            const isUnderPopulated = isReproductive(neighbours);
            expect(isUnderPopulated).toBeTruthy();
        });

        it('should return false if there are two or less neighbours', () => {
            const neighbours = 2;
            const isUnderPopulated = isReproductive(neighbours);
            expect(isUnderPopulated).toBeFalsy();
        });

        it('should return false if there are four or more neighbours', () => {
            const neighbours = 4;
            const isUnderPopulated = isReproductive(neighbours);
            expect(isUnderPopulated).toBeFalsy();
        });
    });
});