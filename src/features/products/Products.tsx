import { Alert, Button, CircularProgress, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { selectProducts, selectProductsFetching } from './productsSlice.ts';
import { type ReactNode, useEffect } from 'react';
import { fetchProducts } from './productsThunk.ts';
import ProductItem from './components/ProductItem.tsx';

const Products = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const productsFetching = useAppSelector(selectProductsFetching);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  let content: ReactNode = (
    <Alert severity="info" sx={{ width: '100%' }}>
      There are no products here!
    </Alert>
  );

  if (productsFetching) {
    content = <CircularProgress />;
  } else if (products.length > 0) {
    content = products.map((product) => (
      <ProductItem
        id={product._id}
        key={product._id}
        title={product.title}
        price={product.price}
        image={product.image}
        categoryTitle={product.category.title}
      />
    ));
  }

  return (
    <Grid container direction="column" spacing={2}>
      <Grid container justifyContent="space-between">
        <Grid>
          <Typography variant="h4">Products</Typography>
        </Grid>
        <Grid>
          <Button color="primary" component={Link} to="/products/new">
            Add product
          </Button>
        </Grid>
      </Grid>
      <Grid container direction="row" spacing={1}>
        {content}
      </Grid>
    </Grid>
  );
};

export default Products;
