'use client'
import { Toaster as ToastProvider } from 'react-hot-toast'

export const Toaster = () => {
  return (
    <ToastProvider 
      position="bottom-center"
      toastOptions={{
        success: {
          style: {
            background: "#10b981",
            color: "#fff",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#10b981"
          }
        },
        error: {
          style: {
            background: "#ef4444",
            color: "#fff",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#ef4444e"
          }
        }
      }}
    
    />
  )
}