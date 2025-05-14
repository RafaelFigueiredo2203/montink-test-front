const STORAGE_KEY = "productPageData"
const FAVORITES_KEY = "favoriteProducts"
const CART_KEY = "cartProducts"

export function getProductPageData() {
  const savedData = localStorage.getItem(STORAGE_KEY)
  if (!savedData) return null

  const parsed = JSON.parse(savedData)
  const now = Date.now()
  const expired = parsed.timestamp && now - parsed.timestamp > 900_000

  return expired ? null : parsed
}

export function saveProductPageData(data: Record<string, any>) {
  const dataToSave = {
    ...data,
    timestamp: Date.now(),
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave))
}

export function clearProductPageData() {
  localStorage.removeItem(STORAGE_KEY)
}

export function addToFavorites(id: string) {
  const existing = JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]")
  const updated = Array.from(new Set([...existing, id]))
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated))
}

export function addToCart(id: string, quantity: number = 1) {
  const existing = JSON.parse(localStorage.getItem(CART_KEY) || "[]")
  const updated = [...existing, { id, quantity }]
  localStorage.setItem(CART_KEY, JSON.stringify(updated))
}