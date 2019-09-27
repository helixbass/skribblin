import Typography from 'typography'
import Lawton from 'typography-theme-lawton'

Lawton.baseLineHeight = 1.62
Lawton.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: `none`,
  },
  a: {
    color: '#1ca086',
  },
  h1: {
    marginBottom: '1.7rem',
  },
  h3: {
    marginTop: '1.33rem',
  },
  h4: {
    marginBottom: '0.85rem',
  },
  code: {
    fontSize: '0.95rem',
  },
  'pre code': {
    fontSize: '0.85rem',
  },
})

// delete Lawton.googleFonts

const typography = new Typography(Lawton)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const {rhythm} = typography
export const {scale} = typography
