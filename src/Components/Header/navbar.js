import React from 'react'
import { Select, Option } from 'antd'

const navbar = () => {
    return (
        <div>
           

                <h3 style={{color:"white",fontSize:"10px"}}>Movies</h3>
                <h4  style={{color:"white",fontSize:"10px"}}>Series</h4>

            <Select
                labelInValue
                defaultValue={{ value: 'YEARS' }}
                style={{ width: 120 }}  >
                <Option value="2021">2021</Option>
                <Option value="2020">2020</Option>
                <Option value="2019">2019</Option>
                <Option value="2018">2018</Option>
                <Option value="2017">2017</Option>
                <Option value="2016">2016</Option>
            </Select>
        </div>
    )
}

export default navbar;
