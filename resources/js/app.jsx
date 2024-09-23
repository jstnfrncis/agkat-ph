import './bootstrap';
import '../css/app.css'
import { InertiaProgress } from '@inertiajs/progress';
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

createInertiaApp({

  title: (title) =>
    title ? `${title} - Agkat PH` : "Agkat PH",
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });
    const auth = import.meta.glob('./Authentication/**/*.jsx', { eager: true });
    const establishment = import.meta.glob('./Establishment/**/*.jsx', { eager: true });
    const functions = import.meta.glob('./Functions/**/*.jsx', { eager: true });
    const landingPage = import.meta.glob('./LandingPage/**/*.jsx', { eager: true });
    const reviews = import.meta.glob('./Reviews/**/*.jsx', { eager: true });
    const ui = import.meta.glob('./UI/**/*.jsx', { eager: true });

 
    const allPages = { ...pages, ...auth, ...establishment, ...functions, ...landingPage, ...reviews, ...ui };


    return allPages[`./Pages/${name}.jsx`] ||
           allPages[`./Authentication/${name}.jsx`] ||
           allPages[`./Establishment/${name}.jsx`] ||
           allPages[`./Functions/${name}.jsx`] ||
           allPages[`./LandingPage/${name}.jsx`] ||
           allPages[`./Reviews/${name}.jsx`] ||
           allPages[`./UI/${name}.jsx`];
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
});

InertiaProgress.init({
  delay: 1000,
  
  // The color of the progress bar.
  color: '#5D5FEF',

  // Whether to include the default NProgress styles.
  includeCSS: true,

  // Whether the NProgress spinner will be shown.
  showSpinner: false,
  
})

