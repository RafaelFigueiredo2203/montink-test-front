import { productData } from "../utils/product";
import { ProductImage } from "../utils/types/product-type";

interface ImageSectionProps {
  selectedImage: ProductImage;
  setSelectedImage: (image: ProductImage) => void;
  images: ProductImage[];
}

export function ImageSection({
  selectedImage,
  setSelectedImage,
  images,
}: ImageSectionProps) {

  return(
          <div className="space-y-4">
                 <div className="relative w-full aspect-square bg-white rounded-lg overflow-hidden border shadow-lg">
                   <img
                     src={selectedImage.url || "/placeholder.svg"}
                     alt={selectedImage.alt}
                     className="object-contain w-full h-full p-4"
                   />
                 </div>
       
                 <div className="flex space-x-2 overflow-x-auto pb-2">
                  {productData.images.map((image) => (
                  <button
                  key={image.id}
                  onClick={() => setSelectedImage(image)}
                  className={`relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border-2 ${
                  selectedImage.id === image.id ? "border-blue-600" : "border-gray-200"
                }`}
               >
               <img src={image.url || "/placeholder.svg"} alt={image.alt} className="object-cover w-full h-full" />
              </button>
             ))}
          </div>
      </div>
  )
}