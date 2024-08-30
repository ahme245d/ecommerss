import React, { useEffect, useState } from 'react';
import style from './Products.module.css';
import axios from 'axios';
import ProtectedItem from '../ProtectedItem/ProtectedItem';
import Loader from '../loader/loader';
import { Link } from 'react-router-dom';
import Pagination from '../pagination/Pagination';

export default function Products() {

  const [products, setProducts] = useState(null);
  const [pageCount, setPageCount] = useState(0);

  function getProducts(pageNum = 1) {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products?page=${pageNum}`)
      .then((response) => {
        setProducts(response.data.data);
        setPageCount(response.data.metadata.numberOfPages);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getProducts();
  }, []);

  function handlePageChange({ selected }) {
    getProducts(selected + 1);
  }

  return (
    <div className='row'>
      {products ? (
        products.length > 0 ? (
          products.map((product) => (
            // <Link to={`ProductDetails/${products._id}`} className='p-3 w-full md:w-1/3 lg:w-1/6'key={product._id} >
                        <ProtectedItem key={product._id} products={product} />

            // </Link>

          ))
        ) : (
          <Loader />
        )
      ) : (
        <Loader />
      )}
      <div className='flex w-full justify-center'>
        {pageCount > 1 && (
          <Pagination
            handlePageChange={handlePageChange}
            pageCount={pageCount}
          />
        )}
      </div>
    </div>
  );
}
