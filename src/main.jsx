import { createRoot } from 'react-dom/client'
import App from './Layout.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Swal from 'sweetalert2'
import { AppContext } from './context/GlobalContext.jsx';

createRoot(document.getElementById('root')).render(
  <AppContext>
    <App />
  </AppContext>,
)
