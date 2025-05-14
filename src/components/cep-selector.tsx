import { AddressData } from "../utils/types/addres-type";


interface CepSelectorProps {
  cep: string;
  setCep: (value: string) => void;
  isLoadingCep: boolean;
  cepError: string;
  addressData: AddressData | null;
  handleCepChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCepSearch: () => void;
}

export function CepSelector({
  cep,
  setCep,
  isLoadingCep,
  cepError,
  addressData,
  handleCepChange,
  handleCepSearch,
}: CepSelectorProps) {
  return (
     <div className="mt-6">
            <h3 className="text-sm font-medium mb-3">Calcular frete e prazo de entrega</h3>
            <div className="flex space-x-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="00000-000"
                  value={cep}
                  onChange={handleCepChange}
                  className="w-36 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  maxLength={9}
                />
              </div>
              <button
                onClick={handleCepSearch}
                disabled={isLoadingCep || cep.replace(/\D/g, "").length !== 8}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoadingCep ? "Consultando..." : "Consultar"}
              </button>
            </div>

            {cepError && <p className="text-sm text-red-500 mt-2">{cepError}</p>}

            {addressData && (
              <div className="mt-3 p-3 bg-gray-50 rounded-md border">
                <p className="text-sm font-medium">Endereço de entrega:</p>
                <p className="text-sm text-gray-600">
                  {addressData.logradouro}, {addressData.bairro}
                </p>
                <p className="text-sm text-gray-600">
                  {addressData.localidade} - {addressData.uf}, {addressData.cep}
                </p>
                <div className="mt-2 flex items-center text-sm text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Entrega disponível para este endereço</span>
                </div>
                <div className="mt-2">
                  <div className="flex justify-between text-sm">
                    <span>Entrega padrão</span>
                    <span className="font-medium">R$ 19,90</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Entrega expressa</span>
                    <span className="font-medium">R$ 29,90</span>
                  </div>
                </div>
              </div>
            )}
      </div>
  );
}