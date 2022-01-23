module.exports = {
  content: ["./public/*.{html, js}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'mobile-image': "url('../src/home/background-home-mobile.jpg')",
        'tablet-image': "url('../src/home/background-home-tablet.jpg')",
        'desktop-image': "url('../src/home/background-home-desktop.jpg')",

        'mobile-crew': "url('../src/crew/background-crew-mobile.jpg')",
        'tablet-crew': "url('../src/crew/background-crew-desktop.jpg')",
        'desktop-crew': "url('../src/crew/background-crew-desktop.jpg')",
        }), 
      },
  },
  plugins: [],
}
