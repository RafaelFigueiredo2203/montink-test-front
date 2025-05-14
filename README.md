# 🛒 Product Page – Montink Teste Front-end

Bem-vindo ao repositório do **Product Page**, um projeto desenvolvido como teste técnico de front-end. Esta página simula a visualização de um produto em uma loja virtual, com funcionalidades completas como seleção de cor, tamanho, cálculo de frete por CEP e favoritos .

---

## 📸 Preview

![image](https://github.com/user-attachments/assets/c6f67620-69c6-4f70-804b-34dbf04ce408)


![Acesse](https://montink-test-front.vercel.app/)

---

## 🚀 Tecnologias utilizadas

- **React**
- **TypeScript**
- **Tailwind CSS**
- **LocalStorage** (para simular persistência de dados)
- **API ViaCEP** (consulta de endereço)

---

## 🧩 Funcionalidades

- ✅ Seleção de **cor** e **tamanho** do produto
- ✅ Galeria de imagens com destaque na imagem selecionada
- ✅ Campo para digitar o **CEP** e simular o frete
- ✅ Validação e formatação automática do CEP
- ✅ Simulação de frete com API externa (ViaCEP)
- ✅ Adicionar produto no **carrinho** e **favoritos**
- ✅ Armazenamento local temporário (15 minutos) para manter a experiência do usuário ao recarregar
- ✅ Layout responsivo e acessível

---

## 💾 Armazenamento Local (localStorage)

- **`productPageData`**: salva cor, tamanho, imagem, CEP e endereço temporariamente por até **15 minutos**.
- **`favoriteProducts`**: salva IDs dos produtos favoritados permanentemente.
- **`cartProducts`**: salva os produtos adicionados ao carrinho permanentemente.

