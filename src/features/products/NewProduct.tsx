import {Typography} from "@mui/material";
import ProductForm from "./components/ProductForm.tsx";
import {useAppDispatch} from "../../app/hooks.ts";
import {useNavigate} from "react-router-dom";
import type {ProductMutation} from "../../types";
import {createProduct} from "./productsThunk.ts";

const NewProduct = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onFormSubmit = async (product: ProductMutation) => {
    await dispatch(createProduct(product));
    navigate('/');
  };


  return (
    <>
      <Typography variant="h4" sx={{mb: 2}}>New Product</Typography>
      <ProductForm
        onSubmit={onFormSubmit}
      />
    </>
  );
};

export default NewProduct;