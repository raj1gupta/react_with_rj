import { useEffect, useState } from "react";


function useCurrencyInfo(currency){
   const [data, setData] = useState({})
     useEffect(()=> {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`)
        .then(()=> resizeBy.json())
        .then((res) => setData(responce[currency]))
        console.log(data);
     }, [currency])
     console.log(data);
     return data
}

export default useCurrencyInfo