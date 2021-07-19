import React from 'react'
import { Container, Table } from 'react-bootstrap'
import Link from 'gatsby-link'
import styled from 'styled-components'

import {useStaticQuery, graphql} from 'gatsby'

import ImageTab1 from '../../assets/images/wrv-top.jpg'
import ImageTab2 from '../../assets/images/wrv2-1000.jpg'
import ImageTab3 from '../../assets/images/wav-top.png'
import ImageTab4 from '../../assets/images/wav-1000.png'



const TableWester = () => {

      /* const data = useStaticQuery(graphql`
      query ProductsQuery  {
        allProductsJson (filter: {name: {in: "manyTank"}}) {
          edges {
            node {
              alt
              button
              name
              link
              img1 {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
              img2 {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          
        }
      }
    `) */


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
                        <td colspan="8" ><p>Расширительные баки Wester WRV для отопления</p></td>
                      </tr>
                      <tr>
                          <td>WRV 200</td>
                          <td><b>18,600 руб.</b></td>
                          <td>590</td>
                          <td>1120</td>
                          <td>1 1/4</td>
                          <td>36</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                          <td rowSpan="3" ><img src={ImageTab1} width="250px" /></td>
                        </tr>
                        <tr>
                          <td>WRV 300</td>
                          <td><b>20,400 руб.</b></td>
                          <td>660</td>
                          <td>1170</td>
                          <td>1 1/4</td>
                          <td>40,3</td>
                          <td>10</td>
                         {/*  <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>WRV 500</td>
                          <td><b>35,800 руб.</b></td>
                          <td>750</td>
                          <td>1550</td>
                          <td>1 1/4</td>
                          <td>82</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                        <td colspan="8" ><p></p></td>
                        </tr>
                        <tr >
                          <td>WRV 750</td>
                          <td><b>69,600 руб.</b></td>
                          <td>800</td>
                          <td>1850</td>
                          <td>2</td>
                          <td>130</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                          <td rowSpan="8"   ><img   src={ImageTab2} width="250px"     /><p>Мембрана: Сменная (Италия)<br/>Завод: Москва</p></td>
                          
                        </tr>
                        <tr>
                          <td>WRV 1000</td>
                          <td><b>94,500 руб.</b></td>
                          <td>780</td>
                          <td>2280</td>
                          <td>2</td>
                          <td>165</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                          
                        </tr>
                        <tr>
                          <td>WRV 1500</td>
                          <td><b>250,300 руб.</b></td> 
                          <td>960</td>
                          <td>2350</td>
                          <td>2</td>
                          <td>244</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>WRV 2000</td>
                          <td><b>345,780 руб.</b></td> 
                          <td>1100</td>
                          <td>2450</td>
                          <td>2</td>
                          <td>375</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>WRV 2500</td>
                          <td><b>395,174 руб.</b></td> 
                          <td>1200</td>
                          <td>2800</td>
                          <td>2</td>
                          <td>307</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>WRV 3000</td>
                          <td><b>415,650 руб.</b></td> 
                          <td>1250</td>
                          <td>2700</td>
                          <td>2 1/2</td>
                          <td>550</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>WRV 5000</td>
                          <td><b>685,100 руб.</b></td> 
                          <td>1500</td>
                          <td>3100</td>
                          <td>3</td>
                          <td>655</td>
                          <td>10</td>
                         {/*  <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>WRV 10 000</td>
                          <td><b>1,750,500 руб.</b></td> 
                          <td>1600</td>
                          <td>5750</td>
                          <td>4</td>
                          <td>1920</td>
                          <td>10</td>
                         {/*  <td>Сменная(Италия)</td> */}
                          
                        </tr>
                        <tr></tr>
                        
                        <br></br>
                        <tr>
                        <td colspan="8" ><p>Расширительные баки Wester WAV для водоснабжения</p></td>
                        </tr>
                      <tr>
                          <td>WAV 200</td>
                          <td><b>19,680 руб.</b></td>
                          <td>780</td>
                          <td>1720</td>
                          <td>2</td>
                          <td>145</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                          <td rowSpan="3" ><img src={ImageTab3} width="250px" /></td>
                        </tr>
                        <tr>
                          <td>WAV 300</td>
                          <td><b>21,300 руб.</b></td>
                          <td>780</td>
                          <td>1720</td>
                          <td>2</td>
                          <td>145</td>
                          <td>10</td>
                         {/*  <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>WAV 500</td>
                          <td><b>35,200 руб.</b></td>
                          <td>780</td>
                          <td>1720</td>
                          <td>2</td>
                          <td>145</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                        <td colspan="8" ><p></p></td>
                        </tr>
                        <tr >
                          <td>WAV 750</td>
                          <td><b>80,700 руб.</b></td>
                          <td>780</td>
                          <td>1720</td>
                          <td>2</td>
                          <td>145</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                          <td rowSpan="9"   ><img   src={ImageTab4} width="250px"     /><p>Мембрана: Сменная (Италия)<br/>Завод: Москва</p></td>
                          
                        </tr>
                        <tr>
                          <td>WAV 1000</td>
                          <td><b>129,600 руб.</b></td>
                          <td>780</td>
                          <td>2200</td>
                          <td>2</td>
                          <td>165</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                          
                        </tr>
                        <tr>
                          <td>WAV 1500</td>
                          <td><b>257,700 руб.</b></td> 
                          <td>960</td>
                          <td>2350</td>
                          <td>2</td>
                          <td>244</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>WAV 2000</td>
                          <td><b>350,100 руб.</b></td> 
                          <td>1100</td>
                          <td>2450</td>
                          <td>2</td>
                          <td>375</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>WAV 2500</td>
                          <td><b>434,100 руб.</b></td> 
                          <td>1200</td>
                          <td>2800</td>
                          <td>2</td>
                          <td>447</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>WAV 3000</td>
                          <td><b>459,700 руб.</b></td> 
                          <td>1250</td>
                          <td>2700</td>
                          <td>2 1/2</td>
                          <td>550</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>WAV 4000</td>
                          <td><b>823,300 руб.</b></td> 
                          <td>1450</td>
                          <td>3100</td>
                          <td>2 1/2</td>
                          <td>655</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>WAV 5000</td>
                          <td><b>1,152,600 руб.</b></td> 
                          <td>1450</td>
                          <td>3720</td>
                          <td>3</td>
                          <td>835</td>
                          <td>10</td>
                         {/*  <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>WAV 10 000</td>
                          <td><b>1,850,500 руб.</b></td> 
                          <td>1600</td>
                          <td>5750</td>
                          <td>4</td>
                          <td>1920</td>
                          <td>10</td>
                         {/*  <td>Сменная(Италия)</td> */}
                          
                        </tr>
                      </tbody>
                  </Table>
                </Container>
            </TableSetting>
            
        </div>
    )
}

export default TableWester


const TableSetting = styled.div`
    white-space: nowrap;
    
    text-align: center;
`





