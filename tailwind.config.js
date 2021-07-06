module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'poppins-reg': ['Poppins-Regular', 'sans-serif'],
      'poppins-med': ['Poppins-Medium', 'sans-serif'],
      'poppins-bold': ['Poppins-Bold', 'sans-serif'],
      'poppins-semi-bold': ['Poppins-SemiBold', 'sans-serif'],
      'montserrat-bold': ['Montserrat-Bold', 'sans-serif'],
      'montserrat-semi-bold': ['Montserrat-SemiBold', 'sans-serif'],
      'montserrat-reg': ['Montserrat-Regular', 'sans-serif'],
    },
    inset: {
      0: 0,
    },
    extend: {
      lineHeight: {
        1.2: '1.2',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
