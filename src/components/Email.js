    import React from 'react'
    import styled from 'styled-components'
    import EmailBg from '../assets/images/sklad.jpg'
    import { Button } from './Button'
    import emailjs from 'emailjs-com'

    function Email() {
        function sendPhone(e) {
            e.preventDefault();

            emailjs.sendForm('service_704o88y', 'template_mz7z1ye', e.target, 'user_CsNfyTKpYGrJjgkx0Pdvc')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
        }
        return (
            <EmailContainer>
                <EmailContent>
                     <h1>Получить лучшую цену</h1>
                     <p>Оставьте номер телефона и мы Вам перезвоним!</p>
                     <form action="#">
                         <FormWrap onSubmit={sendPhone}>
                             <label htmlFor="phone">
                                 <input type="phone" placeholder="Введите свой телефон" name="user_phone" id="phone"/>
                             </label>
                             
                             <Button
                              
                              as="button"
                              type="submit"
                              primary="true"
                              round="true"
                              css={`
                                height: 48px

                                @media screen and (max-width: 768px) {
                                    width: 100%;
                                    min-width: 350px;
                                }

                                @media screen and (max-width: 400px) {
                                    width: 100%;
                                    min-width: 250px;
                                }
                              `}
                              >Отправить</Button>
                         </FormWrap>
                     </form>
                </EmailContent>
                
            </EmailContainer>
           
        )
    }
    
    export default Email

    const EmailContainer = styled.div`
        background: linear-gradient(
            180deg, rgba(0,0,0,0.5) 0%, 
            rgba(0,0,0,0.5) 35%, 
            rgba(0,0,0, 0.1) 100%
            ),
            url(${EmailBg}) no-repeat center;
        background-size: cover;
        height: 450px;
        width: 100%;
        padding: 5rem calc((100vw - 1300px) / 2);
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        
    `

    const EmailContent = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
            text-align: center;
            margin-bottom: 1rem;
            font-size: clamp(1rem, 5vw, 3rem);
            padding: 0 1rem;
        }

        p {
            text-align: center;
            font-size: clamp(1rem, 2.5vw, 1.5rem);
            padding: 0 1rem;
            margin-bottom: 2rem;
        }

        form {
            z-index: 10;
        }
    `

    const FormWrap = styled.div`
        input {
            padding: 1rem 1.5rem;
            outline: none;
            width: 350px;
            height: 48px;
            border-radius: 50px;
            border: none;
            margin-right: 1rem;
            
        }

        @media screen and (max-width: 768px) {
            display: flex;
            flex-direction: column;
            padding: 0 1rem;
            max-width: 100%;
            
            

            input {
                margin-bottom: 1rem;
                width: 100%;
                margin-right: 0;
            }
        }
    `
    
    