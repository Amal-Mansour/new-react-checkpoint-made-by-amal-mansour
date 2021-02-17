import React  from 'react';
import { AutoComplete, Input } from 'antd';
import './FilsterByName.css'




const FilterByName = ({ search, setSearch }) => {



    return (
        <div>
            <AutoComplete
                style={{ width: 300, }}>
                <Input.Search size="large"
                    placeholder="search movie"
                    className="inputsearch"
                    enterButton
                    onChange={e => setSearch(e.target.value)}
                    value={search}
                />
            </AutoComplete>

        </div>
    )
}

export default FilterByName;












    // <Menu onClick={this.handleMenuClick}>

    // </Menu>


    // <Dropdown
    //   overlay={menu}
    //   onVisibleChange={this.handleVisibleChange}
    //   visible={this.state.visible}
    // >
    //   <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
    //     rating <DownOutlined />
    //   </a>
    // </Dropdown>




//   



