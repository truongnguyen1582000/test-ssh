import { Box, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import productApi from 'api/productApi';
import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';

ListPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: '250px',
  },
  right: {
    flex: '1 1 0',
  },
}));

function ListPage(props) {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setpagination] = useState({
    limit: 10,
    total: 10,
    page: 1,
  });
  const [filters, setfilters] = useState({
    _page: 1,
    _limit: 8,
  });
  const classes = useStyles();
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const { data, pagination } = await productApi.getAll(filters);
        setProductList(data);
        setpagination(pagination);
        console.log(pagination);
        setLoading(false);
      } catch (error) {
        console.log('fail to fetch: ', error);
      }
    };
    fetchProductList();
  }, [filters]);

  const handlePagination = (e, page) => {
    setfilters({
      ...filters,
      _page: page,
    });
  };

  return (
    <Box>
      <Container>
        <Grid container>
          <Grid item className={classes.left}>
            <Paper elevation={0}>left</Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              {loading ? (
                <ProductSkeletonList length={filters._limit} />
              ) : (
                <ProductList data={productList} />
              )}
            </Paper>
            <Pagination
              color="primary"
              count={Math.ceil(pagination.total / pagination.limit)}
              page={pagination.page}
              onChange={handlePagination}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
