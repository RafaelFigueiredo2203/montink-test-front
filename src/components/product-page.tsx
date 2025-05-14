
import { ChangeEvent, useEffect, useState } from "react"
import { toast } from "sonner"
import { productData } from "../utils/product"
import { addToCart, addToFavorites, clearProductPageData, getProductPageData, saveProductPageData } from "../utils/storageUtils"
import { AddressData } from "../utils/types/addres-type"
import { ProductImage } from "../utils/types/product-type"
import { CepSelector } from "./cep-selector"
import { ColorSelector } from "./color-selector"
import { ImageSection } from "./image-section"
import { ProductDescription } from "./product-description"
import { ProductInfoAndPrice } from "./productInfo-and-price"
import { SizeSelector } from "./size-selector"

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState<ProductImage>(productData.images[0])
  const [selectedColor, setSelectedColor] = useState<string>("")
  const [selectedSize, setSelectedSize] = useState<string>("")
  const [availableSizes, setAvailableSizes] = useState<string[]>([])
  const [cep, setCep] = useState<string>("")
  const [addressData, setAddressData] = useState<AddressData | null>(null)
  const [isLoadingCep, setIsLoadingCep] = useState<boolean>(false)
  const [cepError, setCepError] = useState<string>("")

  useEffect(() => {
  const parsedData = getProductPageData()

  if (parsedData) {
    if (parsedData.selectedImageId) {
      const image = productData.images.find((img) => img.id === parsedData.selectedImageId)
      if (image) setSelectedImage(image)
    }

    if (parsedData.selectedColor) setSelectedColor(parsedData.selectedColor)
    if (parsedData.selectedSize) setSelectedSize(parsedData.selectedSize)
    if (parsedData.cep) setCep(parsedData.cep)
    if (parsedData.addressData) setAddressData(parsedData.addressData)
  } else {
    clearProductPageData()
  }
}, [])

  useEffect(() => {
    if (selectedColor) {
      const variant = productData.variants.find((v) => v.color === selectedColor)
      if (variant) {
        setAvailableSizes(variant.sizes)
        if (selectedSize && !variant.sizes.includes(selectedSize)) {
          setSelectedSize("")
        }
      }
    } else {
      setAvailableSizes([])
      setSelectedSize("")
    }
  }, [selectedColor, selectedSize])

  useEffect(() => {
    saveProductPageData({
    selectedImageId: selectedImage?.id,
    selectedColor,
    selectedSize,
    cep,
    addressData,
  })
  }, [selectedImage, selectedColor, selectedSize, cep, addressData])

  const handleCepSearch = async () => {
    const cleanCep = cep.replace(/\D/g, "")

    if (cleanCep.length !== 8) {
      setCepError("CEP deve conter 8 dígitos")
      setAddressData(null)
      return
    }

    setIsLoadingCep(true)
    setCepError("")

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`)
      const data = await response.json()

      if (data.erro) {
        setCepError("CEP não encontrado")
        setAddressData(null)
      } else {
        setAddressData(data)
        setCepError("")
      }
    } catch (error) {
      setCepError("Erro ao consultar CEP")
      setAddressData(null)
    } finally {
      setIsLoadingCep(false)
    }
  }

  const handleCepChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "")
    if (value.length <= 8) {
      if (value.length <= 5) {
        setCep(value)
      } else {
        setCep(`${value.slice(0, 5)}-${value.slice(5)}`)
      }
    }
  }

  const handleAddToCart = () => {
    addToCart(productData.id.toString(), 1)
    toast.success("Adicionado ao carrinho!")
  }

  const handleAddToFavorites = () => {
    addToFavorites(productData.id.toString())
    toast.success("Adicionado aos favoritos!")
  }


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
     
        <ImageSection
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        images={productData.images}
        />

        <div className="space-y-6">
        <ProductInfoAndPrice/>

        <hr className="border-gray-200" />

          <ColorSelector
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          variants={productData.variants}
          />

          <SizeSelector
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            availableSizes={availableSizes}
          />

          <CepSelector
            cep={cep}
            setCep={setCep}
            isLoadingCep={isLoadingCep}
            cepError={cepError}
            addressData={addressData}
            handleCepChange={handleCepChange}
            handleCepSearch={handleCepSearch}
          />
         
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <button
              onClick={handleAddToCart}
              className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              disabled={!selectedColor || !selectedSize}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Adicionar ao carrinho
            </button>
            <button 
            onClick={handleAddToFavorites}
            className="px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Adicionar à lista de desejos
            </button>
          </div>

         <ProductDescription/>
        </div>
      </div>
    </div>
  )
}
