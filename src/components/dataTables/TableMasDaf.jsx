import React from 'react'
import { Container, Table } from 'react-bootstrap'
import styled from 'styled-components'

import ImageTab1 from '../../assets/images/wrv-top.jpg'
import ImageTab2 from '../../assets/images/wrv2-1000.jpg'
import ImageTab3 from '../../assets/images/wav-top.png'
import ImageTab4 from '../../assets/images/wav-1000.png'

const TableMasDaf = () => {
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
          <Table id='table1' responsive striped bordered>
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
                <td>
                  <b>Фото</b>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan='8'>
                  <p>Расширительные баки MasDaf WRV для отопления</p>
                </td>
              </tr>
              <tr>
                <td>WRV 200</td>
                <td>
                  <b>18 800 руб.</b>
                </td>
                <td>585</td>
                <td>1037</td>
                <td>1 1/4</td>
                <td>32</td>
                <td>10</td>
                {/* <td>Сменная(Италия)</td> */}
                <td rowSpan='3'>
                  <img src={ImageTab1} alt='MasDaf WRV 500' width='250px' />
                </td>
              </tr>
              <tr>
                <td>WRV 300</td>
                <td>
                  <b>22 400 руб.</b>
                </td>
                <td>660</td>
                <td>1179</td>
                <td>1 1/4</td>
                <td>40,3</td>
                <td>10</td>
                {/*  <td>Сменная(Италия)</td> */}
              </tr>
              <tr>
                <td>WRV 500</td>
                <td>
                  <b>39 800 руб.</b>
                </td>
                <td>780</td>
                <td>1399</td>
                <td>1 1/4</td>
                <td>55.5</td>
                <td>10</td>
                {/* <td>Сменная(Италия)</td> */}
              </tr>
              <tr>
                <td colSpan='8'>
                  <p></p>
                </td>
              </tr>
              <tr>
                <td>WRV 750</td>
                <td>
                  <b>95 600 руб.</b>
                </td>
                <td>780</td>
                <td>1880</td>
                <td>2</td>
                <td>86</td>
                <td>10</td>
                {/* <td>Сменная(Италия)</td> */}
                <td rowSpan='8'>
                  <img src={ImageTab2} alt='MasDaf WRV 1000' width='250px' />
                  <p>
                    Мембрана: Сменная (Италия)
                    <br />
                    Завод: Москва
                  </p>
                </td>
              </tr>
              <tr>
                <td>WRV 1000</td>
                <td>
                  <b color='red'>112 500 руб.</b>
                </td>
                <td>780</td>
                <td>2280</td>
                <td>2</td>
                <td>104</td>
                <td>10</td>
                {/* <td>Сменная(Италия)</td> */}
              </tr>
              <tr>
                <td>WRV 1500</td>
                <td>
                  <b>280 300 руб.</b>
                </td>
                <td>960</td>
                <td>2380</td>
                <td>2</td>
                <td>240</td>
                <td>10</td>
                {/* <td>Сменная(Италия)</td> */}
              </tr>
              <tr>
                <td>WRV 2000</td>
                <td>
                  <b>404 780 руб.</b>
                </td>
                <td>1100</td>
                <td>2450</td>
                <td>2</td>
                <td>375</td>
                <td>10</td>
                {/* <td>Сменная(Италия)</td> */}
              </tr>
              <tr>
                <td>WRV 2500</td>
                <td>
                  <b>425 174 руб.</b>
                </td>
                <td>1200</td>
                <td>2800</td>
                <td>2</td>
                <td>397</td>
                <td>10</td>
                {/* <td>Сменная(Италия)</td> */}
              </tr>
              <tr>
                <td>WRV 3000</td>
                <td>
                  <b>438 380 руб.</b>
                </td>
                <td>1200</td>
                <td>2800</td>
                <td>2 1/2</td>
                <td>550</td>
                <td>10</td>
                {/* <td>Сменная(Италия)</td> */}
              </tr>
              <tr>
                <td>WRV 5000</td>
                <td>
                  <b>1 051 600 руб.</b>
                </td>
                <td>1450</td>
                <td>3720</td>
                <td>3</td>
                <td>830</td>
                <td>10</td>
                {/*  <td>Сменная(Италия)</td> */}
              </tr>
              <tr>
                <td>WRV 10 000</td>
                <td>
                  <b>1 750 500 руб.</b>
                </td>
                <td>1600</td>
                <td>5750</td>
                <td>4</td>
                <td>1920</td>
                <td>10</td>
                {/*  <td>Сменная(Италия)</td> */}
              </tr>
              <tr></tr>
            </tbody>
          </Table>
          <Table id='table2' responsive striped bordered>
            <tbody>
              <tr>
                <td colSpan='8'>
                  <p>Расширительные баки MasDaf WAV для водоснабжения</p>
                </td>
              </tr>
              <tr>
                <td>WAV 200</td>
                <td>
                  <b>23 680 руб.</b>
                </td>
                <td>580</td>
                <td>1120</td>
                <td>1 1/4"</td>
                <td>32.4</td>
                <td>10</td>
                {/* <td>Сменная(Италия)</td> */}
                <td rowSpan='3'>
                  <img src={ImageTab3} alt='MasDaf WAV 500' width='250px' />
                </td>
              </tr>
              <tr>
                <td>WAV 300</td>
                <td>
                  <b>25 900 руб.</b>
                </td>
                <td>660</td>
                <td>1170</td>
                <td>1 1/4"</td>
                <td>40.3</td>
                <td>10</td>
                {/*  <td>Сменная(Италия)</td> */}
              </tr>
              <tr>
                <td>WAV 500</td>
                <td>
                  <b>42 200 руб.</b>
                </td>
                <td>780</td>
                <td>1390</td>
                <td>1 1/4"</td>
                <td>55.5</td>
                <td>10</td>
                {/* <td>Сменная(Италия)</td> */}
              </tr>
              <tr>
                <td colSpan='8'>
                  <p></p>
                </td>
              </tr>
              <tr>
                <td>WAV 750</td>
                <td>
                  <b>100 700 руб.</b>
                </td>
                <td>780</td>
                <td>1880</td>
                <td>1 1/4"</td>
                <td>86</td>
                <td>10</td>
                {/* <td>Сменная(Италия)</td> */}
                <td rowSpan='9'>
                  <img src={ImageTab4} width='250px' alt='MasDaf WAV 1000' />
                  <p>
                    Мембрана: Сменная (Италия)
                    <br />
                    Завод: Москва
                  </p>
                </td>
              </tr>
              <tr>
                <td>WAV 1000</td>
                <td>
                  <b>149 600 руб.</b>
                </td>
                <td>780</td>
                <td>2280</td>
                <td>1 1/4"</td>
                <td>104</td>
                <td>10</td>
                {/* <td>Сменная(Италия)</td> */}
              </tr>
              <tr>
                <td>WAV 1500</td>
                <td>
                  <b>287 700 руб.</b>
                </td>
                <td>960</td>
                <td>2380</td>
                <td>2</td>
                <td>240</td>
                <td>10</td>
                {/* <td>Сменная(Италия)</td> */}
              </tr>
              <tr>
                <td>WAV 2000</td>
                <td>
                  <b>380 100 руб.</b>
                </td>
                <td>1100</td>
                <td>2450</td>
                <td>2</td>
                <td>375</td>
                <td>10</td>
                {/* <td>Сменная(Италия)</td> */}
              </tr>
              <tr>
                <td>WAV 2500</td>
                <td>
                  <b>434 100 руб.</b>
                </td>
                <td>1200</td>
                <td>2800</td>
                <td>2</td>
                <td>397</td>
                <td>10</td>
                {/* <td>Сменная(Италия)</td> */}
              </tr>
              <tr>
                <td>WAV 3000</td>
                <td>
                  <b>459 700 руб.</b>
                </td>
                <td>1200</td>
                <td>2800</td>
                <td>2 1/2</td>
                <td>550</td>
                <td>10</td>
                {/* <td>Сменная(Италия)</td> */}
              </tr>

              <tr>
                <td>WAV 5000</td>
                <td>
                  <b>1 152 600 руб.</b>
                </td>
                <td>1450</td>
                <td>3720</td>
                <td>3</td>
                <td>830</td>
                <td>10</td>
                {/*  <td>Сменная(Италия)</td> */}
              </tr>
              <tr>
                <td>WAV 10 000</td>
                <td>
                  <b>1 850 500 руб.</b>
                </td>
                <td>1600</td>
                <td>5750</td>
                <td>4</td>
                <td>1920</td>
                <td>10</td>
                {/*  <td>Сменная(Италия)</td> */}
              </tr>
            </tbody>
          </Table>
          <Table id='table2' responsive striped bordered>
            <tbody>
              <tr>
                <td colSpan='8'>
                  <p>Мембраны для баков MasDaf</p>
                </td>
              </tr>

              <tr>
                <td colSpan='2'>
                  <p></p>
                </td>
              </tr>
              <tr>
                <td>Мембрана для бака MasDaf 750</td>
                <td>
                  <b>15 700 руб.</b>
                </td>
              </tr>
              <tr>
                <td>Мембрана для бака MasDaf 1000</td>
                <td>
                  <b>26 600 руб.</b>
                </td>
              </tr>
              <tr>
                <td>Мембрана для бака MasDaf 1500</td>
                <td>
                  <b>47 700 руб.</b>
                </td>
              </tr>
              <tr>
                <td>Мембрана для бака MasDaf 2000</td>
                <td>
                  <b>49 100 руб.</b>
                </td>
              </tr>
              <tr>
                <td>Мембрана для бака MasDaf 2500</td>
                <td>
                  <b>82 100 руб.</b>
                </td>
              </tr>
              <tr>
                <td>Мембрана для бака MasDaf 3000</td>
                <td>
                  <b>122 700 руб.</b>
                </td>
              </tr>
              <tr>
                <td>Мембрана для бака MasDaf 3000-4000</td>
                <td>
                  <b>184 800 руб.</b>
                </td>
              </tr>
              <tr>
                <td>Мембрана для бака MasDaf 4000</td>
                <td>
                  <b>232 300 руб.</b>
                </td>
              </tr>
              <tr>
                <td>Мембрана для бака MasDaf 5000</td>
                <td>
                  <b>349 600 руб.</b>
                </td>
              </tr>
              <tr>
                <td>Мембрана для бака MasDaf 10 000</td>
                <td>
                  <b>550 500 руб.</b>
                </td>
              </tr>
              <br />
              <p>
            Расширительный бак – важная составляющая системы отопления.<br />
            Защитите систему с помощью наших надежных и доступных вариантов.<br /> 
            Наши расширительные баки специально разработаны для поддержания<br />
            постоянного давления в системе, уменьшения количества насосов<br />
            включения-выключения и защиты вашей системы от гидравлического удара<br />
            из-за теплового расширения. Доверьтесь компании, которая гарантирует<br />
            качество нашей продукции 10-летней гарантией. По любым вопросам или<br />
            проблемам, пожалуйста, свяжитесь с нашими представителями по<br />
            обслуживанию клиентов по телефону или электронной почте.<br />
         </p>
            </tbody>
          </Table>
         
        </Container>
      </TableSetting>
    </div>
  )
}

export default TableMasDaf

const TableSetting = styled.div`
  white-space: nowrap;
  padding: 20px;
  text-align: center;
`
