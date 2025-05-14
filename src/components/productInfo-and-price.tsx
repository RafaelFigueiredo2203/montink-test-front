import { productData } from "../utils/product";

export function ProductInfoAndPrice() {
  const discountedPrice = productData.price * (1 - productData.discount / 100)

  return (
    <>
       <div>
            <h1 className="text-2xl md:text-3xl font-bold">{productData.name}</h1>
               <div className="flex items-center mt-2">
                 <div className="flex items-center">
                   {[...Array(5)].map((_, i) => (
                     <svg
                       key={i}
                       className={`w-4 h-4 ${i < Math.floor(productData.rating) ? "text-yellow-400" : "text-gray-300"}`}
                       fill="currentColor"
                       viewBox="0 0 20 20"
                     >
                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                     </svg>
                   ))}
                   <span className="ml-2 text-sm text-gray-600">
                     {productData.rating} ({productData.reviewCount} avaliações)
                   </span>
                 </div>
               </div>
             </div>
   
   
             <div>
               {productData.discount > 0 ? (
                 <div className="flex items-center space-x-2">
                   <span className="text-3xl font-bold text-blue-600">
                     R$ {discountedPrice.toFixed(2).replace(".", ",")}
                   </span>
                   <span className="text-lg text-gray-500 line-through">
                     R$ {productData.price.toFixed(2).replace(".", ",")}
                   </span>
                   <span className="px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded">
                     -{productData.discount}%
                   </span>
                 </div>
               ) : (
                 <span className="text-3xl font-bold text-blue-600">
                   R$ {productData.price.toFixed(2).replace(".", ",")}
                 </span>
               )}
               <p className="text-sm text-gray-500 mt-1">
                 Em até 10x de R$ {(discountedPrice / 10).toFixed(2).replace(".", ",")} sem juros
               </p>
       </div>
   </>
  );
}