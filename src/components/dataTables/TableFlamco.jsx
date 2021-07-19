import React from 'react'
import { Container, Table } from 'react-bootstrap'
import Link from 'gatsby-link'
import styled from 'styled-components'

import {useStaticQuery, graphql} from 'gatsby'

import ImageTab2 from '../../assets/images/flexcon-r-1000.jpg'
import ImageTab1 from '../../assets/images/flexcon-r-small.jpg'


const TableFlamco = () => {

  


    return (
        <div>
            <TableSetting>
               <Container>
                  <Table responsive  bordered>
                      <thead>
                        <tr>
                          <th>Model / Объем, л</th>
                          <th>Цена (руб.)</th>
                          <th>Диаметр, мм</th>
                          <th>Высота, мм</th>
                          <th>Подкл. дюйм</th>
                          <th>Вес, кг</th>
                          <th>P, бар</th>
                          {/* <th>Мембрана</th> */}
                          <td ><b>Фото</b></td>
                        </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td colspan="8" ><p>Бак расширительный Flexcon R (не сменная мембрана)</p></td>
                      </tr>
                      <tr>
                          <td>Flexcon R 200/1,5</td>
                          <td><b>13,150 руб.</b></td>
                          <td>484</td>
                          <td>1296</td>
                          <td>1</td>
                          <td>38,10</td>
                          <td>6</td>
                          {/* <td>Сменная(Италия)</td> */}
                          <td rowSpan="3" ><img src={ImageTab1} width="200px" /></td>
                        </tr>
                        <tr>
                          <td>Flexcon R 300/1,5</td>
                          <td><b>17,880 руб.</b></td>
                          <td>600</td>
                          <td>1330</td>
                          <td>1</td>
                          <td>56,90</td>
                          <td>6</td>
                         {/*  <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>Flexcon R 425/1,5</td>
                          <td><b>27,480 руб.</b></td>
                          <td>790</td>
                          <td>1176</td>
                          <td>1</td>
                          <td>79,40</td>
                          <td>6</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                        <td colspan="8" ><p></p></td>
                        </tr>
                        <tr >
                          <td>Flexcon R 500/1,5</td>
                          <td><b>30,360 руб.</b></td>
                          <td>790</td>
                          <td>1320</td>
                          <td>1</td>
                          <td>86,70</td>
                          <td>6</td>
                          {/* <td>Сменная(Италия)</td> */}
                          <td rowSpan="4"   ><br/><img   src={ImageTab2} width="100px"     /><p></p></td>
                          
                        </tr>
                        <tr>
                          <td>Flexcon R 600/1,5</td>
                          <td><b>36,960 руб.</b></td>
                          <td>790</td>
                          <td>1540</td>
                          <td>1</td>
                          <td>92,90</td>
                          <td>6</td>
                          {/* <td>Сменная(Италия)</td> */}
                          
                        </tr>
                        <tr>
                          <td>Flexcon R 800/1,5</td>
                          <td><b>53,760 руб.</b></td> 
                          <td>790</td>
                          <td>1890</td>
                          <td>1</td>
                          <td>126,90</td>
                          <td>6</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>Flexcon R 1000/1,5</td>
                          <td><b>69,800 руб.</b></td> 
                          <td>790</td>
                          <td>2270</td>
                          <td>1</td>
                          <td>145,90</td>
                          <td>6</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                      </tbody>
                  </Table>
                </Container>
            </TableSetting>
            
        </div>
    )
}

export default TableFlamco


const TableSetting = styled.div`
    white-space: nowrap;
    
    text-align: center;
`