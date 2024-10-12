/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Inclui todos os arquivos HTML e JS dentro de src
    "!./node_modules/**",    // Exclui a pasta node_modules
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    }             // Pronto para futuras customizações
  },
  plugins: [],               // Adicione plugins aqui, se necessário
}
