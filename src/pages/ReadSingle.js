import React, { useEffect, useState } from 'react'


function ReadSingle() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [text, setText] = useState("")
  
    useEffect(() => {
      fetch("http://localhost/test/api/post/read_single.php?id=1")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <div>  
            {/* <input 
                type="text"
                placeholder="id"
                value={text}

            />
            <button className="btn btn-success">Click</button> */}


            <div className="card">
                <p>{items.id}</p>
                <p>{items.title}</p>
                <p>{items.body}</p>
                <p>{items.author}</p>
                <p>{items.category_id}</p>
            </div>
        </div>
      );
    }
}

export default ReadSingle