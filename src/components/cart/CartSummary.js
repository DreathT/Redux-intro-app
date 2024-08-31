import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import alertify from "alertifyjs";
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    NavLink,
    Badge,
} from "reactstrap";
import { removeFromCartAction } from "../../redux/cart/removeFromCart";

function CartSummary() {

    const { cart } = useSelector((state) => state.addToCart)
    const dispatch = useDispatch()
    console.log("cartSummary cart: ", cart)

    function removeFromCart(product) {
        dispatch(removeFromCartAction(product));
        alertify.error(product.productName + " deleted from cart");
    }

    function renderEmpty() {
        return (
            <NavItem>
                <NavLink>Empty Cart</NavLink>
            </NavItem>
        );
    }

    function renderSummary() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Your Cart
                </DropdownToggle>
                <DropdownMenu>
                    {cart.map((product) => (
                        <DropdownItem key={product.id}>
                            <Badge
                                color="danger"
                                onClick={() => removeFromCart(product)}
                            >
                                X
                            </Badge>
                            {product.productName}
                            <span className="badge bg-secondary">{product.quantity}</span>
                        </DropdownItem>
                    ))}
                    <DropdownItem divider />
                    <DropdownItem>
                        <Link to={"/cart"}>Go To Cart</Link>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    }

    return (
        <div>
            {cart.length > 0 ? renderSummary() : renderEmpty()}
        </div>
    );
}


export default CartSummary
