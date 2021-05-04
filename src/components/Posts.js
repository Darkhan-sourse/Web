import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ReactComponent as BellIcon } from '../icons/bell.svg';

const Posts = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [items, setItems] = useState([])

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(
                `http://localhost/test/api/post/read.php`
            )

            console.log(result.data.data);
            setItems(result.data.data)
            setIsLoading(false)
        }

        fetchItems()
    }, [])

    const usersComp = items.map(item => (
        <div class="card">
            <div class="card-header">
                <BellIcon className="bell-icon"/> { item.title }
            </div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                <p>{ item.body }</p>
                <footer class="blockquote-footer"><cite title="Source Title">{ item.author }</cite></footer>
                </blockquote>
            </div>
        </div>
        )
    )

    return isLoading ? (<h1>Loading...</h1>) : usersComp
}

export default Posts