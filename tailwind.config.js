module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        hitam: "#251526",
        merah: "#CE272D",
      },
      screens: {
        ipad: "769px",
        ipadpro: "1025px",
        navbar: "1280px",
        searchbar: "875px",
        iphone5: "321px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
