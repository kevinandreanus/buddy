module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      fontSize: {
        'xxs': ['10px', '14px'],
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
      inset: {
        '50': "198px",
        '34': "8.5rem",
        '33': "132px",
        '22': "94px",
        '23': "95px",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
