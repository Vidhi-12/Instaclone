import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { usePosts } from "./PostContext"
import { createPost } from "./PostUtils"

function Field({ ...rest }) {
    return <div className="form-field">
        <input {...rest} />
    </div>
}

export default function CreatePost() {

    const [data, setData] = useState({
        postImage: '',
        name: '',
        location: '',
        description: '',
        imgName: ''
    })

    const { onPostAdded } = usePosts()
    const navigate = useNavigate()

    return <section className="create-post-section">
        <div className="form-heading">
            <h2 className="text-color">Add Post</h2>
        </div>
        
        <form method="POST" action="#" onSubmit={e => {
            e.preventDefault()
            // console.log(data);
            createPost(data)
                .then(data => {
                    onPostAdded()
                    navigate('/post_view')
                })
        }}>
            
            <div className="row single-col img-div">
                <div className="file-img">
                    <img className="btnimg" src="/images/camera.png" alt="file-camera"/>
                </div>
                
                <Field type="file"
                    className="file-type"
                    onChange={(e) => setData(data => ({
                        ...data, postImage: e.target.files[0], imgName: e.target.files[0].name
                    }))
                    } />
                   <div className="text-img">
                        {/* <p className="text-img"> */}
                        {data.imgName}
                        {/* </p> */}
                </div>
            </div>

            <div className="row two-col">
                <Field type="text" 
                    placeholder="Author"
                    className="author-type"
                    value={data.name}
                    onChange={e => setData(data => ({ ...data, name: e.target.value }))}
                />
                <Field type="text" 
                    placeholder="Location"
                    className="location-type"
                    value={data.location}
                    onChange={e => setData(data => ({ ...data, location: e.target.value }))} />
            </div>

            <div className="row single-col">
                <Field type="text" 
                    placeholder="Description"
                    className="desc-type"
                    value={data.description}
                    onChange={e => setData(data => ({ ...data, description: e.target.value }))} />
            </div>

            <div className="form-footer">
                <button className="btn-type">Post</button>
            </div>

        </form>
    </section>
}