import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
	const { budget,dispatch,expenses, currency } = useContext(AppContext);

	const changeBudget = (val)=>{
		const totalExpenses = expenses.reduce((total, item) => {
			return (total += item.cost);
		}, 0);

		
		if(val<totalExpenses) {
			alert("You cannot make the budget lower than the spending");
		} else if(val>20000){
            alert("Value cannot exceed 20,000");
        }
        else {
			dispatch({
				type: 'SET_BUDGET',
				payload: val,
			})
			}
	}
	
	return (
		<div className='alert alert-secondary'>
            <span>Budget: {currency}
			<input type="number" step="10" defaultValue="2000" onInput={(event)=>changeBudget(event.target.value)}></input>
            </span>
		</div>
	);
};

export default Budget;