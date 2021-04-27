import healthStatus from '../app.js';

test('helth 70', () => {
    const result = healthStatus({ name: 'Маг', health: 70 });
    expect(result).toBe('healthy');
});

test('helth 50', () => {
    const result = healthStatus({ name: 'Маг', health: 50 });
    expect(result).toBe('wounded');
});

test('helth 30', () => {
    const result = healthStatus({ name: 'Маг', health: 30 });
    expect(result).toBe('wounded');
});

test('helth 15', () => {
    const result = healthStatus({ name: 'Маг', health: 15 });
    expect(result).toBe('wounded');
});

test('helth 2', () => {
    const result = healthStatus({ name: 'Маг', health: 2 });
    expect(result).toBe('critical');
});

test('helth 0', () => {
    const result = healthStatus({ name: 'Маг', health: 0 });
    expect(result).toBe('critical');
});