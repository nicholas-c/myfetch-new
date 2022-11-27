module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      heading: ["var(--font-montserrat)"],
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      aspectRatio: {
        "2/1": "2/1",
        "4/5": "4/5",
      },
      minWidth: {
        "1/3": "33.33333333%",
        "33vw": "33.33333333vw",
        "50vw": "50vw",
        "80vw": "80vw",
      },
    },
  },
  plugins: [],
};
