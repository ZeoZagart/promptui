import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SearchPrompts from './routes/SearchPrompts.tsx'
import Navbar from './components/navbar/Navbar.tsx'
import ErrorPage from './routes/ErrorPage.tsx'
import CreatePrompt from './routes/CreatePrompt.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navbar />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/search',
                element: <SearchPrompts />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/create-prompt',
                element: <CreatePrompt />,
                errorElement: <ErrorPage />,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ChakraProvider>
            <RouterProvider router={router} />
        </ChakraProvider>
    </React.StrictMode>,
)
