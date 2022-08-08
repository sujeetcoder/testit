import {useState,useEffect} from "react"
import ProductPage from "./ProductPage";
//import {getData} from "./ProductPage.jsx"

function Pagination(props) {
  const {page, onClick1, onClick2 , totalpage} = props
  

  
  const prev = <button disabled={page===1} onClick={onClick2} data-testid="prev-page">PREV</button>;
  const currentPage = <button data-testid="current-page">{page}</button>;
  const next = <button onClick={onClick1} data-testid="next-page">NEXT</button>;
  const totalPagesElem = (
    <div>
      Total Pages: <b data-testid="total-pages">{totalpage}</b>{" "}
    </div>
  );
  return (
    <div data-testid="pagination-container">
      {prev}
      {currentPage}
      {next}
      {totalPagesElem}
    </div>
  );
}

export default Pagination;
