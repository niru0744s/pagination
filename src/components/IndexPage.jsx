import axios from 'axios';
import { useEffect, useState } from 'react';
import PageChange from './PageChange';
function IndexPage() {
    const [data , setData] = useState([]);
    const [dataPerPage , setDataPerPage] = useState(10);
    const [currentPage , setCurrentPage] = useState(1);

    useEffect(()=>{
        const fetch = async ()=>{
            const fetchedData = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setData(fetchedData.data);
        };
        fetch();
    },[])

    const totalPage = Math.ceil(data.length / dataPerPage);
    const lastDataIndex = currentPage * dataPerPage ; 
    const firstDataIndex = lastDataIndex - dataPerPage ; 
    const perPageData = data.slice(firstDataIndex , lastDataIndex);

    return ( 
        <div>
            <ul>
                {perPageData.map((e)=>(
                    <li key={e.id}>{e.title}</li>
                ))}
            </ul>
            <PageChange totalPage={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>
     );
}

export default IndexPage;