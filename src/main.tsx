import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./global.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages"

const queryClient = new QueryClient()

const routers = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
])

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={routers} />
        </QueryClientProvider>
    </StrictMode>
)
