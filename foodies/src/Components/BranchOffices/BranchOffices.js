import { useState, useEffect } from 'react'

import OfficesList from './OfficesList'

import { BsSearch } from 'react-icons/bs'

const BranchOffices = () => {
    const [type, setType] = useState('takeaway');
    const [officeList, setOfficeList] = useState([]);
    const [search, setSearch] = useState("");
    const [found, setFound] = useState(false);

    async function requestOffice() {

        try{
            const res = await fetch(
                `https://api.elaniin.dev/api/locations?type=${type}` 
            );

            const json = await res.json();

            setOfficeList(json.data);
            
        } catch(e) {  //Managing any error
            alert(e.message);
        }    
    }

    async function searchOffice() {
        try{
            const res = await fetch(
                `https://api.elaniin.dev/api/locations?type=${type}&query=${search}` 
            );

            const json = await res.json();


            if(res.json.length === 0) {
                setFound(!found)
            }

            setOfficeList(json.data);
            
        } catch(e) {  //Managing any error
            alert(e.message);
        }    
    }


    useEffect(() => {
        requestOffice();
    }, [type])

    useEffect(() => {
        searchOffice()
    }, [search])

    const changeType = (t) => {
        setType(t);
    }

    return(
        <div>
            <div className=" mb-10 ml-5">
                <p className="font-druk-bold text-3xl lg:text-5xl">Estamos para ti</p>
            </div>
            <div className="flex flex-row justify-center border border-gray-300 ">

                <button className={`flex flex-row justify-center w-6/12 font-syne-bold 
                    border border-black text-sm py-3 sm:py-6 md:py-8 lg:py-10 
                ${(type === `takeaway`) ? 'text-white bg-black':
                    'text-black bg-white'}`}
                onClick={() => changeType('takeaway')}>
                    
                        <svg width="18" height="18" viewBox="0 0 18 18" stroke={`${(type===`takeaway`) ? 'none' : 'black'}`} xmlns="http://www.w3.org/2000/svg"
                            className="mx-3"
                        >
                            <path d="M17.5821 3.84125H12.909L13.3709 0.899118L14.9714 1.2089C15.1999 1.2512 15.4185 1.1072 15.4632 0.884358C15.5076 0.661155 15.3602 0.444253 15.1331 0.400513L13.1049 0.00774918C12.993 -0.014031 12.8774 0.0106292 12.7837 0.0750698C12.6904 0.13933 12.6279 0.238331 12.6103 0.349392L12.0622 3.84125H7.62751C7.3961 3.84125 7.20895 4.02539 7.20895 4.25327V5.93737C7.20895 6.16507 7.3961 6.34939 7.62751 6.34939H7.98679L8.09802 7.4339C7.53549 7.343 6.89376 7.29116 6.15946 7.29116C0.333892 7.29116 0.266938 10.5564 0.266938 10.6953C0.266938 11.0213 0.388773 11.3232 0.594392 11.5766C-0.0747842 12.6451 -0.18857 13.5617 0.302062 14.1181C0.457739 14.2947 0.665005 14.4129 0.906662 14.4849C0.864953 14.7909 0.860562 15.1499 0.937395 15.5311C0.668298 15.7138 0.490485 16.0247 0.490485 16.3769V16.9832C0.490485 17.5439 0.939773 18 1.49169 18H10.8258C11.3363 18 11.754 17.6094 11.8154 17.1083H15.7387C15.9538 17.1083 16.1336 16.9481 16.1552 16.7376L17.2221 6.34903H17.5819C17.8133 6.34903 18.0007 6.16489 18.0007 5.93701V4.25291C18.0008 4.02539 17.8135 3.84125 17.5821 3.84125ZM8.04607 4.66511H17.1635V5.52552H16.8438H8.36547H8.04625V4.66511H8.04607ZM6.15946 8.11485C11.1042 8.11485 11.2121 10.594 11.2141 10.6952C11.2141 11.1207 10.6897 11.4803 10.0686 11.4803H2.24959C1.62852 11.4803 1.10405 11.1207 1.10405 10.6991C1.10624 10.5938 1.21418 8.11485 6.15946 8.11485ZM1.2579 12.0801C1.55059 12.2189 1.88664 12.3042 2.24959 12.3042H10.0688C10.4337 12.3042 10.7714 12.218 11.0654 12.0781C11.5482 12.8862 11.5474 13.3869 11.3768 13.5784C11.1549 13.827 10.455 13.8441 9.38771 13.3191C8.48676 12.8763 7.80569 13.2291 7.2578 13.5135C6.90089 13.6987 6.56374 13.8738 6.15946 13.8738C5.75517 13.8738 5.41784 13.6987 5.06057 13.5135C4.51286 13.2294 3.83252 12.8766 2.93065 13.3191C1.86524 13.8436 1.14868 13.8214 0.934468 13.5781C0.752631 13.3718 0.79745 12.8401 1.2579 12.0801ZM1.75585 15.3597C1.69749 15.0629 1.70609 14.7805 1.74286 14.5432C2.20733 14.4945 2.73455 14.337 3.30531 14.0562C3.79703 13.8135 4.11223 13.9527 4.67037 14.2423C5.08197 14.4559 5.54809 14.6975 6.15964 14.6975C6.77119 14.6975 7.23731 14.4558 7.64891 14.2423C8.2065 13.9536 8.52096 13.813 9.01342 14.0562C9.59004 14.3397 10.1158 14.499 10.5766 14.5479C10.6128 14.7861 10.6211 15.0656 10.5631 15.3597H1.75585ZM10.8259 17.1763H1.49169C1.40132 17.1763 1.32778 17.0899 1.32778 16.9834V16.3771C1.32778 16.2705 1.40132 16.1838 1.49169 16.1838H10.8258C10.9169 16.1838 10.9908 16.2705 10.9908 16.3771V16.6946C10.9908 16.6953 10.9904 16.6959 10.9904 16.6966C10.9904 16.6975 10.9908 16.6979 10.9908 16.6988V16.9835C10.991 17.0897 10.917 17.1763 10.8259 17.1763ZM15.3604 16.2846H11.8187C11.7906 15.9712 11.6261 15.6972 11.3808 15.5311C11.4576 15.1518 11.4536 14.7949 11.4123 14.4876C11.6479 14.4149 11.8506 14.2965 12.0068 14.1211C12.4993 13.5669 12.3906 12.6469 11.7276 11.5712C11.9307 11.3187 12.0514 11.0186 12.0514 10.6952C12.0514 10.5834 12.0053 8.45073 8.95909 7.61966L8.82866 6.34939H16.3808L15.3604 16.2846Z" fill="white"/>
                        </svg>
                        Para llevar

                    </button>

                    <button className={`flex flex-row justify-center items-center 
                    w-6/12 font-syne-bold text-sm py-2 ${(type === `delivery`) ? 'text-white bg-black':
                    'text-black bg-white'}`}
                    onClick={() => changeType('delivery')}>

                    <svg width="30" height="18" viewBox="0 0 30 18" stroke={`${(type===`delivery`) ? 'white' : 'black'}`} xmlns="http://www.w3.org/2000/svg"
                        className="mx-3">
                        <path d="M3.91304 1.25385e-05C3.55285 1.25385e-05 3.26087 0.287829 3.26087 0.642869C3.26087 0.997909 3.55285 1.28573 3.91304 1.28573H20.1868L23.5802 6.45869C23.6576 6.57409 23.774 6.66364 23.9062 6.70983L28.6956 8.47768V14.7857H26.7187C26.5582 13.3422 25.3096 12.2143 23.8043 12.2143C22.2991 12.2143 21.0505 13.3422 20.8899 14.7857H12.3709C12.2104 13.3422 10.9618 12.2143 9.45652 12.2143C7.95127 12.2143 6.70268 13.3422 6.54212 14.7857H4.56522V10.9286C4.56522 10.5735 4.27324 10.2857 3.91304 10.2857C3.55285 10.2857 3.26087 10.5735 3.26087 10.9286V15.4286C3.2609 15.7652 3.57156 16.0714 3.91304 16.0714H6.69499C7.10093 17.1914 8.18684 18 9.45652 18C10.7262 18 11.8121 17.1914 12.2181 16.0714H21.0428C21.4488 17.1914 22.5347 18 23.8043 18C25.074 18 26.1599 17.1914 26.5659 16.0714H29.3478C29.6893 16.0714 30 15.7652 30 15.4286V8.03572C30 7.77466 29.8207 7.52279 29.572 7.43304L24.5686 5.58483L21.0937 0.291307C20.975 0.11214 20.7606 -0.00137282 20.5435 1.25385e-05H3.91304ZM0.652174 2.57144C0.291978 2.57144 0 2.85926 0 3.2143C0 3.56934 0.291978 3.85715 0.652174 3.85715H9.76868C10.1289 3.85715 10.4209 3.56934 10.4209 3.2143C10.4209 2.85926 10.1289 2.57144 9.76868 2.57144H0.652174ZM1.30435 5.14287C0.944152 5.14287 0.652174 5.43067 0.652174 5.78572C0.652174 6.14077 0.944152 6.42858 1.30435 6.42858H9.76868C10.1289 6.42858 10.4209 6.14077 10.4209 5.78572C10.4209 5.43067 10.1289 5.14287 9.76868 5.14287H1.30435ZM2.60869 7.71429C2.2485 7.71429 1.95652 8.0021 1.95652 8.35715C1.95652 8.7122 2.2485 9.00001 2.60869 9.00001H9.76868C10.1289 9.00001 10.4209 8.7122 10.4209 8.35715C10.4209 8.0021 10.1289 7.71429 9.76868 7.71429H2.60869ZM9.45652 13.5C10.3647 13.5 11.087 14.2119 11.087 15.1071C11.087 16.0024 10.3647 16.7143 9.45652 16.7143C8.54834 16.7143 7.82609 16.0024 7.82609 15.1071C7.82609 14.2119 8.54834 13.5 9.45652 13.5ZM23.8043 13.5C24.7125 13.5 25.4348 14.2119 25.4348 15.1071C25.4348 16.0024 24.7125 16.7143 23.8043 16.7143C22.8962 16.7143 22.1739 16.0024 22.1739 15.1071C22.1739 14.2119 22.8962 13.5 23.8043 13.5Z" fill="black"/>
                    </svg>
                    Domicilio

                </button>
            </div>

                <div className="flex flex-row-reverse justify-end items-center border border-gray-300 ">
                    <input placeholder="Buscar nombre o dirección" className="relative py-3 pl-1 w-5/6 text-md"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <BsSearch className="text-2xl w-1/6"/>
                </div>

                <div className="lg:ml-10">
                    <OfficesList offices={officeList} found={found}/>
                </div>
        </div>
    )
    
}
export default BranchOffices