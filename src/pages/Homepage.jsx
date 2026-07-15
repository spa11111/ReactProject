import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Homepage = () => {

    let items = useSelector(store => store.itemsStore.items)
        const dispatch = useDispatch()
    useEffect(() => {
        if(items.length <= 0){
            fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                dispatch({type: 'LOAD_ITEMS', payload: data}) //sends to reducer
            })
        }
    },[])

        return (
        <div>
            <h1>Homepage</h1>
            <Link to="/product">Go to Product Page</Link>
        </div>
    )


}


export default Homepage