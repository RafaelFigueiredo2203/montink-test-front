interface ColorSelectorProps {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  variants: { color: string; sizes: string[] }[];
}

export function ColorSelector({ selectedColor, setSelectedColor, variants }: ColorSelectorProps) {
  return (
    <div>
      <h3 className="text-sm font-medium mb-3">Cor</h3>
      <div className="flex flex-wrap gap-3">
        {variants.map((variant) => (
          <button
            key={variant.color}
            onClick={() => setSelectedColor(variant.color)}
            className={`px-3 py-2 rounded-md border-2 hover:bg-gray-100 ${
              selectedColor === variant.color ? "border-blue-600 bg-blue-50" : "border-gray-200"
            }`}
          >
            {variant.color}
          </button>
        ))}
      </div>
    </div>
  );
}
