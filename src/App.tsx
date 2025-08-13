import {Route, Routes} from "react-router-dom";
import {Container, Typography} from "@mui/material";
import AppToolbar from "./components/UI/AppToolbar/AppToolbar.tsx";
import Products from "./features/products/Products.tsx";
import NewProduct from "./features/products/NewProduct.tsx";

const App = () => {

  return (
    <>
      <header>
        <AppToolbar/>
      </header>
      <Container maxWidth="xl" component="main">
        <Routes>
          <Route path="/" element={<Products/>}/>
          <Route path="/products/new" element={<NewProduct/>}/>
          <Route path="*" element={<Typography>Nor found</Typography>}/>
        </Routes>
      </Container>
    </>
  )
};

export default App
