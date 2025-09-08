import {Button, Grid, Typography} from "@mui/material";
import { Link } from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {selectProducts} from "./productsSlice.ts";
import {useEffect} from "react";
import {fetchProducts} from "./productsThunk.ts";
import ProductItem from "./components/ProductItem.tsx";

const Products = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Grid container direction="column" spacing={2}>
      <Grid container justifyContent="space-between">
        <Grid>
          <Typography variant="h4">Products</Typography>
        </Grid>
        <Grid>
          <Button color="primary" component={Link} to="/products/new">Add product</Button>
        </Grid>
      </Grid>
      {
        !products.length && <Typography>Please add products</Typography>
      }
      <Grid container direction="row" spacing={1}>
        {products.map(product => (
          <ProductItem
            id={product._id}
            key={product._id}
            title={product.title}
            price={product.price}
            image={product.image}
            categoryTitle={product.category.title}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default Products;