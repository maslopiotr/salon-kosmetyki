module.exports = {
  siteMetadata: {
    title: "Salon Kosmetyki Samochodowej w Tarnowie",
    titleTemplate: "%s · najlepszy salon kosmetyki samochodowej w regionie",
    author: "maslopiotr",
    description: "Przywracamy salonowy wygląd samochodom używanym, regenerujemy lakiery i odnawiamy wnętrza."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Salon Kosmetyki Samochodowej w Tarnowie',
        short_name: 'Salon Kosmetyki Tarnów',
        start_url: '/',
        background_color: '#171717',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
