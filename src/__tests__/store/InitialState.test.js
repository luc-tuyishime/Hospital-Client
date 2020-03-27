import initialState from '../../store/initialState';

test('Hospital initial state', () => {
    expect(initialState).toHaveProperty('hospital');
});

test('Vaccin initial state', () => {
    expect(initialState).toHaveProperty('vaccin');
});

test('Parent initial state', () => {
    expect(initialState).toHaveProperty('parent');
});

test('Child initial state', () => {
    expect(initialState).toHaveProperty('child');
});

test('User initial state', () => {
    expect(initialState).toHaveProperty('user');
});
