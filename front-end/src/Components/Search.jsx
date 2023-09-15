import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdClear } from 'react-icons/md'

const Search = () => {
    const [searchActive, setSearchActive] = useState(false);

    const handleIconClick = () => {
        setSearchActive(!searchActive);
    };

    const handleClearClick = () => {
        setSearchActive(false);
    };

    return (
        <>
            {/* <form> */}
            <div className={`search ${searchActive ? 'active-search' : ''}`}>
                <span className='icon'>
                    <AiOutlineSearch onClick={handleIconClick} />
                    <MdClear className={`${searchActive ? 'active-search' : ''}`} onClick={handleClearClick} />
                </span>
            </div>
            <div className={`searchBox ${searchActive ? 'active-search' : ''}`}>
                <input type="text" placeholder='Search' />
            </div>
            {/* </form> */}
        </>

    )
}

export default Search