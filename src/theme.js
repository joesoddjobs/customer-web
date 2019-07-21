import { load } from 'webfontloader'

load({
  google: {
    families: ['Roboto:300,400,500,700']
  }
})

const theme = {
  colors: {
    font: {
      primary: 'black'
    },
    background: {
      primary: 'white',
      secondary: '#F2F2F2'
    }
  },
  fonts: {
    header: {
      family: 'Roboto'
    },
    body: {
      family: 'Roboto'
    }
  }
}

export default theme
