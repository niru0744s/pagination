function PageChange({totalPage , currentPage , setCurrentPage }) {
    const handlePrevPage = ()=>{
        setCurrentPage(currentPage-1);
    }
    const handleNextPage = ()=>{
        setCurrentPage(currentPage+1)
    }
    return ( 
        <div>
            <button disabled={currentPage == 1} onClick={handlePrevPage}>Prev</button>
            <span>{currentPage} of {totalPage}</span>
            <button disabled={currentPage == totalPage} onClick={handleNextPage}>Next</button>
        </div>
    );
}

export default PageChange;