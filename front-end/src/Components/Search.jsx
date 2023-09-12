import React from 'react'

const Search = () => {
    return (

        <div>
            <form>
                <input
                    type="text"
                    autoComplete="off"
                    name="text"
                    placeholder="Tìm kiếm"
                    className="input"
                />
            </form>
        </div>
    )
}

export default Search