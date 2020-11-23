import React, {useState, useContext} from "react"
import PropTypes from "prop-types"
import {Context} from "../Context"
import useHover from "../hooks/useHover"

function CartItem({item}) {
    // const [hovered, setHovered] = useState(false)
    const [hovered, ref] = useHover()
    const {removeFromCart} = useContext(Context)
console.log(item.id);
    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"
    return (
        <div className="cart-item">
            <i  key={item.id}
                className={iconClassName} 
                onClick={() => removeFromCart(item.id)}
                ref={ref}
                // onMouseEnter={() => setHovered(true)}
                // onMouseLeave={() => setHovered(false)}  
            ></i>
            <img src={item.url} width="130px" />
            <p>R 50-00</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem