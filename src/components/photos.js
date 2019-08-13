import React, {useState, useEffect} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';


function Photos() {
    const ad = window.location.href;
    const last2= ad.split("/");
    const currentlogin = last2[last2.length-2];
    const currentalbum = last2[last2.length-1];
    console.log(currentlogin);
    console.log(currentalbum);
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);
    const fetchItems = async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/photos");
        const items = await data.json();
        console.log(items);
        const filtered = [];
        let i;
        for (i = 0; i < items.length; i++) {
            if (items[i].albumId === parseInt(currentalbum)) {
                filtered.push(items[i]);
            }
        }
        setItems(filtered);
    }

    return (
        <div>
            <h1>photos</h1>
            <nav>
                <ul>
                    {items.map(item => (
                            <div>
                                    <div className="play"><img  src={item.thumbnailUrl}></img></div>
                                    <div className="title">{item.title}</div>
                            </div>
                    ))
                    }
                </ul>
            </nav>
        </div>
    );
}

export default Photos;