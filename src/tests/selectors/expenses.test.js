import moment from 'moment';
import selectExpenses from '../../selectors/expenses';

const expenses = [{
    id: 1,
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: 2,
    description: 'Rent',
    note: '',
    amount: 1425200,
    createdAt: -1000
}, {
    id: 3,
    description: 'Credit ccard',
    note: '',
    amount: 5600,
    createdAt: 2000
}]

test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([
        expenses[2], expenses[1]
    ]);
});