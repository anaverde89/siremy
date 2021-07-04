module.exports = {
<<<<<<< HEAD
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
=======
  plugins: [require('tailwindcss')('tailwind.js'), require('autoprefixer')()]
}
>>>>>>> aa7c83d87d02eb3466fdb6332b52807781056460
