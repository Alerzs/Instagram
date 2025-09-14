import { Container } from './Container.jsx';
import Sidebar from '../shared/sidebar.jsx'
import { useEffect, useState } from 'react'
import { client } from "../lib";

export default function Home() {
    const [postData, setPostData] = useState([])

    useEffect(() => {
        const token = localStorage.getItem("jwttoken")
        async function getData() {
            const res = await client.get("/article/timeline?page=1&limit=5",{
            headers: { Authorization: `Bearer ${token}` }}
            )
            setPostData(res?.data?.Articles)
            console.log(res?.data?.Articles)
        }
        getData()
    }, [])


    return ( 
        <>
        {postData.length > 0 ? (
            <div className="flex">
            <Sidebar />
            <Container data={postData} />
            </div>
        ) : null}
        </>
        
    )
}
