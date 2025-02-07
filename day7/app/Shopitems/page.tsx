'use client';

import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import ProductListing from '@/components/ProductListing';
import SearchAndFilter from '@/components/SearchAndFilter';
import Pagination from '@/components/Pagination';
import Dhero from '@/components/Dhero';
import Navbar from '@/components/Navbar';
import Delivery_Pay from '@/components/Payment_delivery';
import Footer from '@/components/Footer';



const Shop = () => {
  const [products, setProducts] = useState<IIproduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IIproduct[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8); 

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product" && defined(name)] {
  name,
  "id": _id,
  price,
  stockLevel,
  imagePath,
  description,
  category,
  discountPercentage,
  isFeaturedProduct,
  "image":image.asset._ref
}`;

      try {
        const products = await client.fetch(query);
        setProducts(products);
        setFilteredProducts(products); // Initialize filtered products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Handle filtering
  const handleFilter = (filtered: IIproduct[]) => {
    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to the first page when filtering
  };

  // Calculate paginated products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div>
      <Navbar bgColor='bg-white'/>
      {/* Banner Section */}
      <Dhero title='Shop' subtitle='Home' subtitle2='Shop' />

      {/* Search and Filter Section */}
      <SearchAndFilter products={products} onFilter={handleFilter} />

      {/* Product Listing Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {currentProducts.map(product => (
          <ProductListing product={product} key={product.id} />
        ))}
      </div>

      {/* Pagination Section */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
      <div className='mt-5'>
      <Delivery_Pay/>
      <Footer/>
      </div>

    </div>
  );
};

export default Shop;