

import ExpenseItem from './ExpenseItem'
import "./Expenses.css"

function Expenses(props) {

    return (
        <div className='expenses'>
            {props.items.map((expense) => (
                <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </div>

    )
}
export default Expenses