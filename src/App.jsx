import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast'; // Import Toaster
function App() {

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster position="top-right"
       toastOptions={{
        className: '',
        style: {
          border: '1px solid green',
          padding: '16px',
          color: 'black',
          backgroundColor: 'white',
          position: 'right',
        },
      }}>
      </Toaster>
    </>
  )
}

export default App
