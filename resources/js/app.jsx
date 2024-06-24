// import './bootstrap';


import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import { InertiaProgress } from '@inertiajs/progress';
import Layout from './Shared/Layout';
import '../css/app.css';
import ReactDOM from 'react-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    let page =  pages[`./Pages/${name}.jsx`]
    page.default.layout = page.default.layout || (page => <Layout children={page} />)
    return page
  },
  setup({ el, App, props }) {
    // createRoot(el).render(<App {...props} />)
    // render(<App {...props} />, el);
    // ReactDOM.render(
    //     <React.StrictMode>
    //         <App {...props} />
    //         <ToastContainer />
    //     </React.StrictMode>,
    //     el
    // );
    createRoot(el).render(
        <div>
            <App {...props} />
            <ToastContainer />
        </div>
        );
  },
})
