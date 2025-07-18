import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

// Site Pages
import MainPage from './pages/MainPage'

const App = () => {

  const router = createBrowserRouter (

    createRoutesFromElements(

      <Route path='/' element={<MainLayout />}>

        <Route index element={<MainPage />} />

      </Route>


    )

  )


  return (

    <div className='antialiased'>

      <RouterProvider router = { router } />

    </div>
    
  )
}

export default App