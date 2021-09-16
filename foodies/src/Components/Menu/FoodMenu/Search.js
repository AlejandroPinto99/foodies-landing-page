import { useState, useEffect } from 'react'

import {BsSearch} from 'react-icons/bs'

import PlatesList from './PlatesList';

const Search = () => {
    const [list, setList] = useState();
    const [meta, setMeta] = useState();
    const [page, setPage] = useState(1);

    let pages = [];

    async function requestAll(){

        try{
            const res = await fetch(
                `https://api.elaniin.dev/api/menu` 
            );

            const json = await res.json();

            setList(json.data); 
            setMeta(json.meta);
            
        } catch(e) {  //Managing any error
            alert(e.message);
        }    
    }

    async function changePage(i) {
        try{
            const res = await fetch(
                `https://api.elaniin.dev/api/menu?page=${i}` 
            );

            const json = await res.json();

            setList(json.data); 
            setPage(i);
            
            
        } catch(e) {  //Managing any error
            alert(e.message);
        }  
    }

    useEffect(() => {
        requestAll()
    }, [])

    if(meta){
        for(let i = 1; i <=meta.last_page ; i++){
            pages.push(
                <div  className={`mx-2 my-4 px-5 py-2 border border-gray-400 rounded-lg font-semibold
                ${page === i ? 'bg-black text-yellow-400' : 'bg-white black-white'}`}
                onClick={() => changePage(i)}
                >
                    {i} 
                </div>
            )
            }
        }
    

    return(
    <div className="pb-10">
        <div className="flex flex-row px-4 py-6">
            <div className="flex flex-row-reverse justify-end items-center border border-gray-300 rounded-lg w-10/12 md:w-6/12 ">
                <input placeholder="Busca tu platillo favorito..." className="relative py-3 pl-1 w-5/6 text-md"
                />
                <BsSearch className="text-2xl w-1/6"/>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 ml-3 p-1" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
            </svg>
        </div>
        <div>
            {
                list ? ( <PlatesList plates={list}/>)    : null
            }
        </div> 
        <div className="flex flex-row justify-center">
            {pages}
        </div>
        <div className="flex flex-row justify-center">
            <button className="py-3 px-10 bg-yellow-100 rounded-lg font-semibold"
            onClick={() => changePage(page + 1 > meta.last_page ? 1 : page + 1)}> 
            Siguiente
            </button> 
        </div>
    </div>    
    )
}

export default Search;