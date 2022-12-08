import React from "react"
import { Outlet } from "react-router-dom"
import MainLayout from "../../Components/MainLayout"
import { PostContextProvider } from "./PostContext"

const PostsWithContext = () => {
    <div>
    
    Main
    
    </div>
}

export default function Posts(){
    return <MainLayout>
    <PostContextProvider>
        <PostsWithContext />
        <Outlet/>
    </PostContextProvider>
    </MainLayout>
}