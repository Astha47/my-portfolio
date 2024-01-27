import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'primary-dark': '#001719',
        'secondary-dark': '#001537',
      },
      dropShadow: {
        'cards': '0 0 10px rgba(179, 204, 255, 0.3)', // Ganti dengan warna dan ukuran yang Anda inginkan
      },
      keyframes:{
        popup: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        popdown: {
          '0%': { opacity: '0',
                  transform: 'translateY(-10%)' 
                },
          '100%': { opacity: '1' ,
                    transform: 'translateY(0%)' 
                  },
        },
        glowarrow1: {
          '0%': { opacity: '0.5',
                  filter: 'brightness(1)' 
                },
          '50%':  { opacity: '1',
                    filter: 'brightness(1.5)' 
                  },
          '100%': { opacity: '0.5' ,
                    filter: 'brightness(1)' 
                  },
        },

        glowarrow2: {
          '0%': { opacity: '0.6',
                  filter: 'brightness(1.1)' 
                },
          '10%': { opacity: '0.5',
                  filter: 'brightness(1)' 
                },
          '60%': { opacity: '1' ,
                  filter: 'brightness(1.5)' 
                },
          '100%': { opacity: '0.6',
                    filter: 'brightness(1.1)' 
                  },
        },
        glowarrow3: {
          '0%': { opacity: '0.7',
                  filter: 'brightness(1.2)' 
                },
          '20%': { opacity: '0.5',
                    filter: 'brightness(1)' 
                  },
          '70%': { opacity: '1',
                    filter: 'brightness(1.5)' 
                  },
          '100%': { opacity: '0.7',
                    filter: 'brightness(1.2)' 
                  },
        },
      },
      animation:{
        popup: 'popup 0.5s ease-in-out',
        popdown: 'popdown 0.5s ease-in-out',
        glowarrow1: 'glowarrow1 2s ease-in-out infinite',
        glowarrow2: 'glowarrow2 2s ease-in-out infinite',
        glowarrow3: 'glowarrow3 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
export default config
