import React  from 'react';
import { AutoComplete, Input } from 'antd';
import './FilsterByName.css'

const FilterByName = ({ search, setSearch }) => {

    return (
        <div>
            <AutoComplete
                style={{ width: 300, }}>
                <Input.Search size="large"
                    placeholder="Enter movie name..."
                    className="inputsearch"
                    onChange={e => setSearch(e.target.value)}
                    value={search}
                />
            </AutoComplete>
        </div>
    )
}

export default FilterByName;












   



