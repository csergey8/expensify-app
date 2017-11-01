const add = (a, b) => a + b;
const generateGreeting = (name = 'anonymous') => `hello my name is ${name}`;

test('should add two numbers', () => {
    const result = add(3, 4);

   expect(result).toBe(7);

}); 

test('generata greeting', () => {
    const result = generateGreeting('mike');
    expect(result).toBe('hello my name is mike');
});


test ('should generate greeting for no name', () => {
    const result = generateGreeting();
    expect(result).toBe('hello my name is anonymous');
});