import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./global.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages"
import AboutPage from "./pages/about"
import { VideoSharingWebsiteComponent } from "./components/video-sharing-website"

const queryClient = new QueryClient()

const routers = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/about",
        element: <AboutPage />,
    },
    {
        path: "/video",
        element: <VideoSharingWebsiteComponent />,
    },
])

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={routers} />
        </QueryClientProvider>
    </StrictMode>
)
