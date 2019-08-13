import React,{useState,useEffect} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';



function Users() {
    useEffect(() =>{
        fetchItems();
    },[]);

    const [items, setItems] = useState([]);

    const fetchItems = async () =>{
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const items = await data.json();
        console.log(items);
        setItems(items);

    }
    return (
        <nav>
            <h3>Users</h3>
            <ul>
                {items.map(item =>(
                    <h1 key={item.id}>
                    <Link to={`/albums/${item.id}`}>{item.name}</Link></h1>
                ))
                }
            </ul>
        </nav>
    );
}

export default Users;
