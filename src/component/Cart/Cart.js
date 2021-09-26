import React from 'react';
// add fontawesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const Cart = (props) => {
    //destructre
    const { cart } = props;
    // calculate total value using reduce
    const total = cart.reduce((previous, present) => previous + (present.value), 0);
    return (
        <div>
            <h2>Cart</h2>
            <p className='d-flex justify-content-between'><b><FontAwesomeIcon className='text-warning' icon={faUser} /> Writer Added: </b><span>{cart.length}</span></p>
            <p className='d-flex justify-content-between'><b><i className="fas fa-hand-holding-usd text-warning"></i> Total Cost: </b><span>${total}</span></p>
            <ul>
                {// to show added list writer name
                    cart.map(writer => <li key={writer.id}>{writer.name}</li>)
                }
            </ul>
            <div className='text-center'>
                <button className='btn btn-info'>Make Club Now</button>
            </div>
        </div>
    );
};

export default Cart;