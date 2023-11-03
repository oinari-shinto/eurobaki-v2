import React from 'react'
import { Container, Table } from 'react-bootstrap'
import styled from 'styled-components'



import ImageTab2 from '../../assets/images/zilmet-ultra-1000.jpg'
import ImageTab1 from '../../assets/images/zilmet-small.jpg'


const TableCruwa = () => {

  


    return (
        <div>
            <TableSetting>
               <Container>
                  <Table id="table" responsive striped bordered>
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
                        <td colSpan="8" ><p>Гидроаккумулятор/Бак расширительный CRW Cruwa</p></td>
                      </tr>
                      <tr>
                          <td>CRW Cruwa 200</td>
                          <td><b>34 680 руб.</b></td>
                          <td>550</td>
                          <td>1235</td>
                          <td>1 1/2''</td>
                          <td>44.5</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                          <td rowSpan="3" ><img src={ImageTab1} alt="CRW Cruwa bak" width="250px" /></td>
                        </tr>
                        <tr>
                          <td>CRW Cruwa 300</td>
                          <td><b>39 840 руб.</b></td>
                          <td>630</td>
                          <td>1365</td>
                          <td>1 1/2''</td>
                          <td>54</td>
                          <td>10</td>
                         {/*  <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>CRW Cruwa 500</td>
                          <td><b>55 760 руб.</b></td>
                          <td>750</td>
                          <td>1560</td>
                          <td>1 1/2''</td>
                          <td>80.8</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                        <td colSpan="8" ><p></p></td>
                        </tr>
                        <tr >
                          <td>CRW Cruwa 750</td>
                          <td><b>103 920 руб.</b></td>
                          <td>750</td>
                          <td>2075</td>
                          <td>1 1/2''</td>
                          <td>150</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                          <td rowSpan="7"   ><br/><img   src={ImageTab2} width="250px" alt="CRW Cruwa 1000"/><p>Мембрана: Сменная (Италия)</p></td>
                          
                        </tr>
                        <tr>
                          <td>CRW Cruwa 1000</td>
                          <td><b>109 400 руб.</b></td>
                          <td>850</td>
                          <td>2100</td>
                          <td>1 1/2''</td>
                          <td>200</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                          
                        </tr>
                        <tr>
                          <td>CRW Cruwa 1500</td>
                          <td><b>253 760 руб.</b></td> 
                          <td>960</td>
                          <td>2420</td>
                          <td>2</td>
                          <td>260</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>CRW Cruwa 2000</td>
                          <td><b>344 960 руб.</b></td> 
                          <td>1100</td>
                          <td>2553</td>
                          <td>2</td>
                          <td>363</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>CRW Cruwa 3000</td>
                          <td><b>637 760 руб.</b></td> 
                          <td>1200</td>
                          <td>2800</td>
                          <td>3</td>
                          <td>536</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>CRW Cruwa 4000</td>
                          <td><b>845 960 руб.</b></td> 
                          <td>1450</td>
                          <td>3180</td>
                          <td>3</td>
                          <td>767</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>CRW Cruwa 5000</td>
                          <td><b>944 920 руб.</b></td> 
                          <td>1450</td>
                          <td>3700</td>
                          <td>3</td>
                          <td>840</td>
                          <td>10</td>
                         {/*  <td>Сменная(Италия)</td> */}
                        </tr>
                      </tbody>
                  </Table>
                  <Table id="table2" responsive striped bordered>
                      <tbody>
                        <tr>
                        <td colSpan="8" ><p>Мембраны для баков Cruwa</p></td>
                        </tr>
                        <tr>
                        <td colSpan="2" ><p></p></td>
                        </tr>
                        <tr >
                          <td>Мембрана BUTIL 750-1000 л, 260100006 Cruwa</td>
                          <td><b>73 100 руб.</b></td>
                        </tr>
                        <tr>
                          <td>Мембрана EPDM 1500-2000 л, 1800150003 Cruwa</td>
                          <td><b>199 800 руб.</b></td>   
                        </tr>
                        <tr>
                          <td>Мембрана EPDM 3000 л, 1800300002 Cruwa </td>
                          <td><b>406 960 руб.</b></td> 
                        </tr> 
                        <tr>
                          <td>Мембрана EPDM 5000 л, 1800300002 Cruwa</td>
                          <td><b>687 300 руб.</b></td> 
                        </tr>
                        
                      </tbody>
                  </Table>
                </Container>
            </TableSetting>
            
        </div>
    )
}

export default TableCruwa


const TableSetting = styled.div`
    white-space: nowrap;
    
    text-align: center;
`