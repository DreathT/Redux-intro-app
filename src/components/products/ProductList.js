/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Table, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { getProductsAction } from "../../redux/product/getProducts";
import { addToCartAction } from "../../redux/cart/addToCart";

function ProductList() {

  const dispatch = useDispatch()
  const { products } = useSelector((state) => state.getProducts)
  const { currentCategory } = useSelector((state) => state.changeCategory)

  useEffect(() => {
    dispatch(getProductsAction())
  }, [])


  return (
    <div>
      <h3>
        <Badge color="warning">Products</Badge>
        -_-
        <Badge color="success">
          {currentCategory.categoryName}
        </Badge>
      </h3>
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity Per Unit</th>
            <th>Units In Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <th scope="row">{product.id}</th>
              <td><Link to={"/saveproduct/" + product.id}>{product.productName}</Link></td>
              <td>{product.unitPrice}</td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitsInStock}</td>
              <td>
                <Button
                  color="success"
                  onClick={() => dispatch(addToCartAction(product))}
                >
                  Add
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ProductList;
