import {Card, CardActions, CardContent, CardHeader, Grid, IconButton} from "@mui/material";
import type {FC} from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface Props {
  title: string;
  price: number;
  id: string;
}

const ProductItem: FC<Props> = ({title, price, id}) => {
  return (
    <Grid size={{xs: 12, sm: 12, md: 6, lg: 4}}>
      <Card>
        <CardHeader title={title}/>
        <CardContent>
          <strong>Price: {price} KGS</strong>
        </CardContent>
        <CardActions>
          <IconButton component={Link} to={'/products/' + id}>
            <ArrowForwardIcon/>
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductItem;