module.exports = {
  siteMetadata: {
    siteUrl: `https://www.strefadetailingu.com`,
    title: "Strefa Detailingu",
    titleTemplate: "%s · najlepszy salon kosmetyki samochodowej w regionie",
    author: "maslopiotr",
    description: "Przywracamy salonowy wygląd samochodom używanym, regenerujemy lakiery i odnawiamy wnętrza."
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-react-helmet',
    { 
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      // replace "UA-XXXXXXXXX-X" with your own Tracking ID
      trackingId: "UA-136699860-5",
    },
  },
  {
    resolve: `gatsby-plugin-gtag`,
    options: {
      // your google analytics tracking id
      trackingId: `UA-136699860-5`,
      // Puts tracking script in the head instead of the body
      head: false,
      // enable ip anonymization
      anonymize: true,
    },
  },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Strefa Detailingu usługi detailingowe i sklep',
        short_name: 'Strefa Detailingu',
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
