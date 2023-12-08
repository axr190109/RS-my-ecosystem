/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "grayscale-haiti": "#050515",
        "grayscale-stone": "#192131",
        "grayscale-white": "#fff",
        "blue-curious-blue": "#2f8ae1",
        "grayscale-iron": "#d9dbdd",
        "grayscale-shuttle-gray": "#64717f",
        "blue-denim": "#0f5ec2",
        black: "#000",
        "grayscale-sand": "#f4f5f7",
      },
      spacing: {},
      fontFamily: {
        "desktop-body": "Karla",
        "desktop-heading-1-bold": "Montserrat",
      },
      borderRadius: {
        "999980xl": "999999px",
        "99980xl": "99999px",
      },
    },
    fontSize: {
      xs: "12px",
      base: "16px",
      xl: "20px",
      sm: "14px",
      "13xl": "32px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
