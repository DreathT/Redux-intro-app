/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";
import { getAllCategoriesAction } from "../../redux/category/getAllCategories";
import { changeCategoryAction } from "../../redux/category/changeCategory";
import { getProductsAction } from "../../redux/product/getProducts";



function CategoryList() {

    const dispatch = useDispatch()
    const { categories } = useSelector((state) => state.getAllCategories)
    const { currentCategory } = useSelector((state) => state.changeCategory)
    const [selectedCategory, setSelectedCategory] = useState()

    useEffect(() => {
        dispatch(getAllCategoriesAction())
    }, [])

    useEffect(() => {
        if (selectedCategory) {
            dispatch(getProductsAction(selectedCategory.id));
            dispatch(changeCategoryAction(selectedCategory));
        }
    }, [selectedCategory])

    return (
        <div>
            <h3>
                <Badge color="warning">categories</Badge>
            </h3>
            <ListGroup>
                {categories.map((category) => (
                    <ListGroupItem
                        active={category.id === currentCategory.id}
                        onClick={() => setSelectedCategory(category)}
                        key={category.id}
                    >
                        {category.categoryName}
                    </ListGroupItem>
                ))}
            </ListGroup>
        </div>
    );
}

export default CategoryList
