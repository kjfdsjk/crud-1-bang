import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function List() {
    let [list, setList] = useState([])
    let [o, setO] = useState({});
    useEffect(() => {
        loadList()
    }, [])
    const loadList = () => {
        axios.get('http://localhost:8080/students').then((res) => {
            setList(res.data)
        })
    }
    return (<>
        {list.map(item => (<h5>{item.name}, {item.description}, {item.score}, {item.action}
            <button onClick={() => {
                axios.get('http://localhost:8080/students/' + item.id).then((res) => {
                    setO(res.data)
                })
            }}>
                <Link to={'/edit/' + item.id}>Edit</Link>

            </button>
            <button onClick={() => {
                axios.delete('http://localhost:8080/students/' + item.id).then((res) => {
                    loadList()
                })
            }}>Xóa
            </button>
        </h5>))}
    </>)
}