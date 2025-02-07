// import ProductDetail from '@/components/ProductDetail';
// import { client } from '@/sanity/lib/client';
// import { groq } from 'next-sanity';
// import { notFound } from 'next/navigation';

// interface PageProps {
//   params: { id: string };
// }

// export async function generateStaticParams() {
//   const query = groq`
//     *[_type == "product"] { _id }
//   `;
//   const products = await client.fetch(query);

//   return products.map((product: { _id: string }) => ({
//     id: product._id,
//   }));
// }

// const Page = async ({ params }: PageProps) => {
//   const productId =  params?.id;
  
//   if (!productId) {
//     return notFound();
//   }

//   const query = groq`
//     *[_type == "product" && _id == $id][0] {
//       _id,
//       name,
//       price,
//       description,
//       category,
//       stockLevel,
//       "image": image.asset->url
//     }
//   `;

//   try {
//     const product = await client.fetch(query, { id: productId });

//     if (!product) {
//       return notFound();
//     }

//     return (
//       <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50">
//         <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
//           <ProductDetail product={{ ...product, id: product._id }} />
//         </div>
//       </div>
//     );
//   } catch (error) {
//     console.error('Failed fetching product:', error);
//     return notFound();
//   }
// };

// export default Page;


'use client';

import { useEffect, useState } from 'react';
import { useParams, } from 'next/navigation';
import ProductDetail from '@/components/ProductDetail';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

const Page = () => {
  const { id: productId } = useParams();
  // const router = useRouter();
  const [product, setProduct] = useState<any>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!productId) {
      setError(true);
      return;
    }

    const query = groq`
      *[_type == "product" && _id == $id][0] {
        _id,
        name,
        price,
        description,
        category,
        stockLevel,
        "image": image.asset->url
      }
    `;

    client
      .fetch(query, { id: productId })
      .then((result) => {
        if (!result) {
          setError(true);
        } else {
          setProduct(result);
        }
      })
      .catch(() => setError(true));
  }, [productId]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold text-gray-700">Product Not Found</h1>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-semibold text-gray-700">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <ProductDetail product={{ ...product, id: product._id }} />
      </div>
    </div>
  );
};

export default Page;

