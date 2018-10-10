const sum = (a ,b) => {
    return a + b;
}

describe('reducer working', () => {
    it('first test', () => {
        expect(sum(1, 2)).toEqual(3)
    })
})