import vistaFrontal from "../assets/product/vista-frontal.png"
import vistaLateral from "../assets/product/vista-lateral.png"
import vistaLateral2 from "../assets/product/vista-lateral2.png"
import detalheSola from "../assets/product/vista-sola.png"
import vistaTraseira from "../assets/product/vista-traseira.png"

export const productData = {
  id: 1,
  name: "Tênis Esportivo Premium Ultralight",
  description:
    "Tênis esportivo de alta performance com tecnologia de amortecimento avançada e material respirável para máximo conforto durante atividades físicas intensas.",
  price: 299.9,
  discount: 15,
  rating: 4.8,
  reviewCount: 237,
  variants: [
    { color: "Preto", sizes: ["36", "37", "38", "39", "40", "41", "42"] },
    { color: "Branco", sizes: ["36", "37", "38", "39", "40", "41"] },
    { color: "Azul", sizes: ["38", "39", "40", "41", "42"] },
    { color: "Vermelho", sizes: ["37", "38", "39", "40"] },
  ],
  images: [
    { id: 1, url: vistaFrontal, alt: "Tênis vista frontal" },
    { id: 2, url: vistaLateral, alt: "Tênis vista lateral" },
    { id: 3, url: vistaTraseira, alt: "Tênis vista traseira" },
    { id: 4, url: vistaLateral2, alt: "Tênis vista de cima" },
    { id: 5, url: detalheSola, alt: "Tênis detalhe da sola" },
  ],
}