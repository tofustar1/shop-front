import type {ProductMutation} from "../../../types";
import {type ChangeEvent, type FormEvent, useState} from "react";
import {Stack, TextField, Button} from "@mui/material";
import FileInput from "../../../components/UI/FileInput/FileInput.tsx";

interface Props {
  onSubmit: (product: ProductMutation) => void;
}

const ProductForm = ({onSubmit}: Props) => {
  const [state, setState] = useState<ProductMutation>({
    title: '',
    description: '',
    price: '',
    image: null
  });

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const fileInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;

    if (files) {
      setState(prevState => ({...prevState, [name]: files[0]}));
    }
  };

  const submitFormHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(state);
  };

  return (
    <Stack spacing={2} component="form" onSubmit={submitFormHandler}>
      <TextField
        id="title"
        label="Title"
        name="title"
        value={state.title}
        onChange={inputChangeHandler}
        required
      />
      <TextField
        multiline
        minRows={3}
        id="description"
        label="Description"
        name="description"
        value={state.description}
        onChange={inputChangeHandler}
        required
      />
      <TextField
        type="number"
        id="price"
        label="Price"
        name="price"
        value={state.price}
        onChange={inputChangeHandler}
        required
      />
      <FileInput
        label="Image"
        name="image"
        onChange={fileInputChangeHandler}
      />
      <Button type="submit" color="primary" variant="contained">Create</Button>
    </Stack>
  );
};

export default ProductForm;