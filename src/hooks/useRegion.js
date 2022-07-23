import  { useEffect, useState } from 'react';

const useRegion = () => {

    const [region, setRegion] = useState([]);

    useEffect(()=>{
        fetch('https://staging-api.erpxbd.com/api/v1/region/20/1', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setRegion(data.region);
            console.log(data);
        })
    },[])
    return [region]
};

export default useRegion;