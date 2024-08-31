import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button } from "reactstrap";
import alertify from "alertifyjs";
import { removeFromCartAction } from "../../redux/cart/removeFromCart";

function CartDetail() {

    const { cart } = useSelector((state) => state.removeFromCart)
    const dispatch = useDispatch()

    function removeFromCart(product) {
        dispatch(removeFromCartAction(product));
        alertify.error(product.productName + " deleted from cart");
    }

    return (
        <div>
            <Table hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {cart.map((cartItem) => (
                        <tr key={cartItem.product.id}>
                            <th scope="row">{cartItem.product.id}</th>
                            <td>{cartItem.product.productName}</td>
                            <td>{cartItem.product.unitPrice}</td>
                            <td>{cartItem.product.quantity}</td>
                            <td>
                                <Button
                                    color="danger"
                                    onClick={() => removeFromCart(cartItem.product)}
                                >
                                    Remove
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default CartDetail;
