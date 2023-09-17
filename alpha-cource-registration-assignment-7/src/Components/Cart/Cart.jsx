/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import './Cart.css'
const Cart = ({ selectedCard,remainingCredit,totalCredit,totalPrice }) => {
    // console.log(props.selectedCard);
    return (
        <div className='cart-container'>
            <h5 className='cart-special'>Credit Hour Remaining: {remainingCredit} hr</h5>
            <hr />
            <h3>Course Name</h3>
            {selectedCard.map((card) => (
                    <li key={card.id}>{card.title}</li>
                ))}

                
            <hr />
            <h5 className='credit'>Total Credit Hour: {totalCredit}</h5>
            <hr />
            <h5 className='credit'>Total Price: {totalPrice} USD</h5>
        </div>
    );
};

export default Cart;