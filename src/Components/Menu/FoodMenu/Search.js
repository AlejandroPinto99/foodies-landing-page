import { useState, useEffect } from 'react'

import {BsSearch} from 'react-icons/bs'

import PlatesList from './PlatesList';

const Search = () => {
    const [list, setList] = useState();
    const [meta, setMeta] = useState();
    const [page, setPage] = useState(1);
    const [search, setSearch]  = useState("");
    const [filter, setFilter] = useState(false);

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

    async function searchPlate(){
        if(search !== "") {
            try{
                const res = await fetch(
                    `https://api.elaniin.dev/api/menu?query=${search.replace(' ', '%20%')}` 
                );
    
                const json = await res.json();
                setList(json.data)
                setMeta(json.meta);
                
                
            } catch(e) {  //Managing any error
                alert(e.message);
            }  
        }
    }

    async function requestCategory(i) {
        try{
            const res = await fetch(
                `https://api.elaniin.dev/api/menu?category=${i}` 
            );

            const json = await res.json();

            setList(json.data); 
            setMeta(json.meta);
            
        } catch(e) {  //Managing any error
            alert(e.message);
        }   
    }

    useEffect(() => {
        requestAll()
    }, [])

    useEffect(() => {
        searchPlate()
    }, [search])

    console.log(filter)

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
        <div className={`absolute top-0 w-full h-96 bg-black z-20 rounded-b-xl ${filter ? 'flex-col' : 'hidden'}`}>
            <div className="mt-5 flex flex-row items-center justify-between ">
                <p className="text-yellow-400 text-4xl ml-4 font-druk-bold">Filtros</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-5" fill="none" viewBox="0 0 24 24" stroke="white"
                    onClick={() => setFilter(!filter)}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
                <ul className="md:flex flex-col justify-between mx-5 my-2 font-druk-bold text-xl text-white">
                    <li className="mx-3 my-10" onClick={() => requestAll()}>Todos</li>
                    <li className="mx-3 my-10" onClick={() => requestCategory(1)}>Las Tradicionales</li>
                    <li className="mx-3 my-10" onClick={() => requestCategory(2)}>Recomendaciones</li>
                    <li className="mx-3 my-10" onClick={() => requestCategory(3)}>Para compartir</li>
                </ul>
        </div>

        <div className="flex flex-row justify-between px-4 py-6 md:flex-col">
                <div className="lg:flex lg:flex-row lg:justify-center">
                    <div className="flex flex-row-reverse items-center justify-end border border-gray-300 rounded-lg w-full md:w-6/12 ">
                        <input placeholder="Busca tu platillo favorito..." className="relative py-3 pl-1 w-5/6 text-md"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        />
                        <BsSearch className="text-2xl w-1/6"/>
                    </div> 
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 ml-3 p-1  md:hidden" viewBox="0 0 20 20" fill="currentColor"
                onClick={() => setFilter(!filter)}
                >
                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                </svg> 
                <div>
                    <ul className="hidden md:flex flex-row justify-between mx-5 my-2 font-druk-bold text-sm lg:text-xl">
                        <li className="mx-3" onClick={() => requestAll()}>Todos</li>
                        <li className="mx-3" onClick={() => requestCategory(1)}>Las Tradicionales</li>
                        <li className="mx-3" onClick={() => requestCategory(2)}>Recomendaciones</li>
                        <li className="mx-3" onClick={() => requestCategory(3)}>Para compartir</li>
                    </ul>
                </div>
    
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
            <button className="py-3 px-10 bg-yellow-400 rounded-lg font-semibold hover:bg-yellow-200"
            onClick={() => changePage(page + 1 > meta.last_page ? 1 : page + 1)}> 
            Siguiente
            </button> 
        </div>
    </div>    
    )
}

export default Search;