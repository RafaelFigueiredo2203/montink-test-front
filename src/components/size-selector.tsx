interface SizeSelectorProps {
  selectedSize: string;
  setSelectedSize: (size: string) => void;
  availableSizes: string[];
}

export function SizeSelector({ selectedSize, setSelectedSize, availableSizes }: SizeSelectorProps) {
  if (availableSizes.length === 0) return null;

  return (
    <div>
      <h3 className="text-sm font-medium mb-3">Tamanho</h3>
      <div className="flex flex-wrap gap-3">
        {availableSizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`flex h-10 w-10 items-center justify-center rounded-md border-2 hover:bg-gray-100 ${
              selectedSize === size ? "border-blue-600 bg-blue-50" : "border-gray-200"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
