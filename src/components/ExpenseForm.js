import React from 'react';


export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: ''
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({
            description
        }));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({
            note
        }));
    };
    render(){
        return (
            <div>
            <form >
            <input 
            type="text" 
            placeholder="Description" 
            autoFocus 
            value={this.state.description}
            onChange={this.onDescriptionChange} />
            <input type="number" placeholder="Amount" />
            </form>
            <textarea onChange={this.onNoteChange}
            value={this.state.note}
            placeholder="Add a note to your expense(optional)"></textarea>
            <button>Add Expense</button>
            </div>
        )
    }
}