import { createTheme } from '@mui/material/styles'
// import { rootElement } from '~/main'

export const defaultTheme = (isLightMode: boolean) =>
  createTheme({
    /**
     * value         |0px     640px    768px   1024px   1240px
     * key           |xs      sm       md       lg       xl
     * screen width  |--------|--------|--------|--------|-------->
     */
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1240
      }
    },
    palette: {
      info: {
        main: '#2A85FF',
        dark: '#0069f6'
      },
      primary: {
        main: '#FCFCFC'
      },
      secondary: {
        light: '#272B30',
        main: '#1A1D1F',
        dark: '#111315'
      },
      // error: {},
      // warning: {},
      mode: isLightMode ? 'light' : 'dark',
      ...(isLightMode
        ? {
            // palette values for dark Mode
            action: {},
            divider: '#1A1D1F',
            background: {
              default: '#1A1D1F',
              paper: '#1A1D1F'
            },
            text: {
              primary: '#6F767E',
              secondary: '#FCFCFC'
            }
          }
        : {
            // palette values for light Mode
            action: {},
            divider: '#FCFCFC',
            background: {
              default: '#FCFCFC',
              paper: '#FCFCFC'
            },
            text: {
              primary: '#6F767E',
              secondary: '#1A1D1F'
            }
          })
    },
    typography: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      h1: {
        fontSize: '64px'
      }
    },
    components: {
      // MuiPopover: {
      //   defaultProps: {
      //     container: rootElement
      //   }
      // },
      // MuiPopper: {
      //   defaultProps: {
      //     container: rootElement
      //   }
      // },
      MuiButtonBase: {
        styleOverrides: {
          root: {
            ':hover': {
              borderColor: 'black'
            }
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            ':hover': {
              borderColor: 'black'
            },

            '.startIcon': {}
          }
        }
      },
      MuiDrawer: {
        // styleOverrides: {
        //   root: {
        //     '.MuiPaper-root': {
        //       padding: '16px',
        //       backgroundImage: 'none'
        //     }
        //   }
        // }
        // defaultProps: {
        //   container: rootElement
        // }
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            '.MuiButtonBase-root-MuiListItemButton-root.Mui-selected': {
              backgroundColor: 'black'
            }
          }
        }
      },
      MuiSwitch: {
        styleOverrides: {
          root: {
            '.MuiSwitch-input': {
              width: '200px'
            }
          }
        }
      }
    }
  })
