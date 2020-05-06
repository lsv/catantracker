import BuildType from './BuildType';

describe('BuildType', () => {
    const buildtype = new BuildType('name', 12);

    it('can get name', () => {
        expect(buildtype.name).toBe('name');
    });

    it('can get how many cards it give', () => {
        expect(buildtype.give).toBe(12);
    });
});
