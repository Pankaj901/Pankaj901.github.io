import React from 'react'
import styled from 'styled-components'
import {IoIosQuote} from "react-icons/io";
import {AiOutlineStar} from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

const ClientSlider = (props) => {
        const {name, position, stars, disc} = props.item;
  return (
    <Container>
        <Header>
            <span className='quote'><IoIosQuote/></span>
            <div>
                {Array(stars).fill().map((_, i) => (
                    <span className='star' key={i}>
                        <AiOutlineStar/>
                    </span>
                ))}
            </div>
        </Header>
        <Body>
            {disc}
        </Body>
        <Footer>
            <div className="avatar" aria-hidden="true">
                <FaUserCircle />
            </div>
            <div className="details">
                <h1>{name}</h1>
                <p>{position}</p>
            </div>
        </Footer>
    </Container>
  )
}

export default ClientSlider

const Container = styled.div`
    background: var(--card);
    border: 1px solid var(--border);
    padding: 1.5rem 1rem;
    margin: 0 1rem;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .quote{
        font-size: 3rem;
        color: var(--accent);
        opacity: 0.7;
    }

    .star{
        color: #ffcd3c;
        font-size: 1.3rem;
    }
`
const Body = styled.p`
    font-size: 0.8rem;
    margin-bottom: 1.5rem;
`
const Footer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    .avatar{
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        color: var(--accent);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 4rem;
        background: rgba(248, 250, 252, 0.06);
    }

    h1{
        font-size: 1.2rem;
        font-weight: 700;
        @media(max-width: 580px){
            font-size: 1rem;
        }
        @media(max-width: 538px){
            font-size: 0.9rem;
        }
    }

    p{
        font-size: 0.8rem;
        color: rgba(255,255,255,0.500);
        @media(max-width: 538px){
            font-size: 0.6rem;
        }
    }
`