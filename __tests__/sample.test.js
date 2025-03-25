describe('Sample test suite', () => {
    it('should pass this basic test', () => {
        expect(1 + 1).toBe(2);
    });

    it('should handle string operations', () => {
        expect('hello' + ' world').toBe('hello world');
    });

    it('should work with arrays', () => {
        const arr = [1, 2, 3];
        expect(arr.length).toBe(3);
        expect(arr).toContain(2);
    });
});
