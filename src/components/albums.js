import React, {useState, useEffect} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';



function Albums() {
    useEffect(() => {
        fetchItems();
    }, []);
    const ad = window.location.href;
    const currentlogin= ad.substr(ad.lastIndexOf('/')+1,ad.length);
    console.log(currentlogin)
    const [items, setItems] = useState([]);
    const fetchItems = async () => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/albums`);
        const items = await data.json();
        console.log(items)
        const filtered = [];
        let i;
        for (i = 0; i < items.length; i++) {
            if (items[i].userId === parseInt(currentlogin)) {
                filtered.push(items[i])
            }
        }
        setItems(filtered);
    }
    return (
        <div>
            <h1>Albums</h1>
            <nav>
                <ul>
                    {items.map(item => (

                        <h1 key={item.id}>
                            <Link to={`/photos/${currentlogin}/${item.id}`}>{item.title}</Link></h1>

                    ))
                    }
                </ul>
            </nav>
        </div>
    );
}

export default Albums;