import axios from 'axios'
import React, { useState } from 'react'

const Addpost = () => {

    const [data, setData] = useState({
        title: "",
        body: "",
        author: ""
    })

    // let formData = new FormData();
    // formData.append('title', "title")
    // formData.append('body', "text")
    // formData.append('author', "author")

    const hangleSubmit = (e) => {
        // const res = fetch("http://localhost/test/api/post/create.php", {
        //     method: 'POST'
        // })

        // const data = res.json()

        e.preventDefault()
        axios.post("http://localhost/test/api/post/create.php", {
            title: data.title,
            body: data.body,
            author: data.author
        })
        .then(res => {
            console.log(res.data);
        })
        
    }

    const hangle = (e) => {
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }

    return (
        <div className="mt-5 mb-5">
            <h1>Add post</h1>
            <form onSubmit={e => hangleSubmit(e)}>
                <div className="form-group" style={{maxWidth: "38rem"}}>
                    <label htmlFor="title">Author</label>
                    <input 
                        type="text" 
                        className="form-control"  
                        id="author"
                        value={ data.author }
                        onChange={e => hangle(e)}
                    />
                </div>
                <div className="form-group" style={{maxWidth: "38rem"}}>
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text" 
                        className="form-control"  
                        id="title"
                        value={ data.title }
                        onChange={e => hangle(e)}
                    />
                </div>
                <div className="form-goup">
                    <label htmlFor="body">Text</label>
                    <textarea
                        className="form-control"
                        id="body"
                        value={ data.body }
                        onChange={e => hangle(e)}
                    ></textarea>
                </div>
                <button className="btn btn-primary mt-3"  >Add post</button>
            </form>
        </div>
    )
}

export default Addpost