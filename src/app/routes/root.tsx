import {createBrowserRouter} from 'react-router-dom'
import {LoginPage} from "../pages/Login/login.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage/>,
    },
//    {
//        path: '/users/:id/posts',
//        element: <PostsPage/>,
//    },
])