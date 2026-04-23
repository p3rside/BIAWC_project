# Używamy lekkiego obrazu Node.js
FROM node:18-alpine

# Ustawiamy katalog roboczy wewnątrz kontenera
WORKDIR /app

# Kopiujemy pliki z zależnościami
COPY package*.json ./

# Instalujemy zależności
RUN npm install

# Kopiujemy resztę kodu aplikacji
COPY . .

# Komenda uruchamiająca serwis
CMD ["npm", "start"]