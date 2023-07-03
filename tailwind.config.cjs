/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkbluebg: "#36384D",
        white: "#FFFFFF",
        darkbluebtn: "#232742",
      },
      fontFamily: {
        body: ["Roboto-Regular"],
        body2: ["Roboto-Bold"],
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
