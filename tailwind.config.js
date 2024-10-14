import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            animation:{
                "loop-scroll": "loop-scroll 30s linear infinite"
                },
                keyframes:{
                  "loop-scroll":{
                    from: {transform:" translateX(0)"},
                    to: {transform:" translateX(-100%)"},
          
                  },
                },
                colors:{
                  primary: '#262641',
                  accent: '#5D5FEF',
                  highlight: '#FAF6FF',
                  background: '#F8FAFC',
                  stroke: '#E2E3E6',
                  icons: '#98A0AB',
                  white: '#FFFFFF',
          
                }
              },
              maxWidth: {
                'custom': '1030px',
                'homepage': '1380px', 

              },
              fontFamily: {
                clash: ['ClashDisplay', 'sans-serif'],
                epilogue: ['Epilogue'],
                Manbold: ['Manbold'],
                Manregular: ['Manregular']
              },
            },

    plugins: [forms],
};
