/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "grayscale-white": "#fff",
        "grayscale-stone": "#192131",
        "grayscale-haiti": "#050515",
        "grayscale-shuttle-gray": "#64717f",
        "blue-denim": "#0f5ec2",
        "grayscale-iron": "#d9dbdd",
        "grayscale-sand": "#f4f5f7",
      },
      spacing: {},
      
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      fontFamily: {
        "desktop-caption-bold-link": "Karla",
        "desktop-heading-1-bold": "Montserrat",
      },
    },
    fontSize: {
      xs: "12px",
      base: "16px",
      sm: "14px",
      "13xl": "32px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
