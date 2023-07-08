import './ExpenseItem.css'
function ExpenseItem(props) {
    const expenseList = props.expenseList
    return (
        <div>
            {expenseList.map((item, index) => (
                <div className='expense-item'>
                    <div>
                        <div>{item.dateBought.toLocaleString('en-US', {month: 'long'})}</div>
                        <div>{item.dateBought.toLocaleString('en-US', {day: '2-digit'})}</div>
                        <div>{item.dateBought.getFullYear()}</div>
                    </div>
                    <div className='expense-item__description'>
                        <h2>{item.name}</h2>
                        <div className='expense-item__price'>₹ {item.price}</div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default ExpenseItem;