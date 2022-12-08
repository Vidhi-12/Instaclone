import React from "react"
import { usePosts } from "./PostContext"
// import { useState, useEffect } from "react";
// import Posts from "./Posts"
import Card from "./Card";
// import axios from 'axios';

export default function ViewPosts() {
    const { posts } = usePosts();
    // const [posts,setPost] = useState();

    // useEffect(()=>{
    //     const getData = async () => {
    //         //const response = await axios.get('./data.json');

    //             const response=await axios.get("https://instaclone-2022.herokuapp.com/posts");
    //             //console.log(data)
    //             response.posts.reverse()

    //         setPost(response.posts);
    //         //console.log(response.data)
    //       };
    //       getData();
    //     })
    return <div>
        <div className="post-container">
            {posts.map((post, i) => {
                // console.log(post);
                return (
                    <Card post={post} key={i} />
                )
            })}
        </div>
    </div>
}