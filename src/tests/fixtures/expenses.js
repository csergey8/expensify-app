import moment from 'moment';


export default [{
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
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: 3,
    description: 'Credit ccard',
    note: '',
    amount: 5600,
    createdAt: moment(0).add(4, 'days').valueOf()
}];