import React,{ useCallback, useContext, useEffect, useState } from "react"
import { loadAllPosts } from "./PostUtils"


const PostContext = React.createContext()

export function PostContextProvider({children}){
    const [posts, setPosts] = useState([])
    const fetchPosts = useCallback(() => {
        loadAllPosts()
        .then(({posts}) => {
            setPosts(posts)
        })
    }, [])
    useEffect(() => {
        fetchPosts()
    },[])
    // console.log(posts)
    return <PostContext.Provider value={{
        posts,
        onPostAdded: () => {
            fetchPosts()
        }
    }}>
        {children}
    </PostContext.Provider>
}

export const usePosts = () => useContext(PostContext)