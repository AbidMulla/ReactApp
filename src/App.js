import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AuthRoutes from './routes/AuthRoutes.jsx';
import UserRoutes from './routes/UserRoutes.jsx';
import AdminRoutes from './routes/AdminRoutes.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import '../src/assets/styles/custom.css';

function App() {
  return (
    <BrowserRouter>
      <AuthRoutes />
      <UserRoutes />
      {/* <AdminRoutes /> */}
    </BrowserRouter>
  );
}
  
export default App;
