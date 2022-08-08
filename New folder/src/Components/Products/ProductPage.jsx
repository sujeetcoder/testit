import React from "react";
import { useEffect } from "react";
import { getProducts } from "./api";
import Pagination from "./Pagination";
import ProductList from "./ProductList";




function ProductPage() {
  const [limit,setLimit] = React.useState(5)
  const [as,setAs] = React.useState("asc")
  const [totalpage,setTotalpage] = React.useState(1)
 
  const [user,setUser] = React.useState([])
  const [page,setPage] = React.useState(1)
  console.log(page)
  useEffect(()=>{
    console.log("hello",page)
   async function  me(){
    let ddd = await getData(page,as,limit)
    console.log(ddd)
    setUser([...ddd])
   }
   me()

   
  },[page])

  function sortit(){
    setAs("asc")
    let yaya = user.sort((a,b)=>{
      if(a.price>b.price) return 1
      if(a.price<b.price) return -1
      return 0

    })
    console.log(user)
    setUser([...yaya])
    console.log(yaya)
  }

  function sortitdes(){
    setAs("desc")
    let yaya = user.sort((a,b)=>{
      if(a.price>b.price) return -1
      if(a.price<b.price) return 1
      return 0

    })
    console.log(user)
    setUser([...yaya])
    console.log(yaya)
  }

  const getData = async (page,orderBy,limit)=>{
    limit = limit || 5
    let d = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=${limit}&orderBy=${orderBy}`)
    let data1 = await d.json()
    
    let data =  data1.data
    setTotalpage(data1.totalPages)
    console.log(totalpage)
   // console.log(data1.totalPages,totalpage)
    return data
    //console.log(data)
    
    
  }
 
  function doit(limit){
    setLimit(limit)
    console.log(limit)
    async function  me(){
      let ppp = await getData(page,as,limit)
      console.log(ppp)
      console.log(user)
      setUser(ppp)
      console.log(user)
     }
     me()
  }
 
/* getData(1,"asc") */
 //console.log(user)
 


 
  return (
    <div>
      <h1 data-testid="product-page-title">Product Page</h1>
      <button onClick={sortit} disabled={as=="asc"} data-testid="low-to-high">Sort low to high</button>
      <button onClick={sortitdes} disabled={as=="desc"} data-testid="high-to-low">Sort high to low</button>
      <div>
        <label>Per page</label>
        <select id="me1" onChange={(e)=>{doit(e.target.value)}} data-testid="limit-select">
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      </div>
      <Pagination page={page} totalpage={totalpage} onClick1={()=>{setPage((pr)=>pr+1)}} onClick2={()=>{setPage((pr)=>pr-1)}} />
      {/* map products */}
      <ProductList arr={user} />
    </div>
  );
}



export default ProductPage;


