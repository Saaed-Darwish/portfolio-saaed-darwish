import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById("root")!).render(
    <>
        <App />
        <Toaster toastOptions={{
            className: 'bg-gradient-to-r from-blue-300 to-purple-300',
        }}
            position="bottom-right" reverseOrder={false} />
    </>
)
