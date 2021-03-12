import React from 'react';
import styled from 'styled-components';
import { PopoverContent, PopoverWrapper } from '../components/Popover';

export default function Home() {
    const HomeWrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const LinkButton = styled.a`
        padding: 1rem;
        text-decoration: none;
        border: 1px solid rgba(225, 193, 225, 0.757);
        border-radius: 8px;
        display: block;
        text-align: center;
        font-size: 0.8rem;
        text-transform: uppercase;

        &:hover {
            background: rgba(252, 247, 253, 0.25);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.037);
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
            border-radius: 10px;
            border: 1px solid rgba(225, 193, 225, 0.757);
        }
    `;

    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    `;

    const TextWrapper = styled.div`
        margin: 1rem;
    `;

    return (
        <Container>
            <TextWrapper>
                <p>This is an example of a popover implementation: </p>
            </TextWrapper>
            <HomeWrapper>
                <PopoverWrapper>
                    <LinkButton href="#">Top</LinkButton>
                    <PopoverContent title="Top title" position="top">
                        <span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                        </span>
                        <a href="#">Lorem Ipsum</a>
                    </PopoverContent>
                </PopoverWrapper>
                <PopoverWrapper>
                    <LinkButton href="#">Left</LinkButton>
                    <PopoverContent title="Left title" position="left">
                        <span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                        </span>
                        <a href="#">Lorem Ipsum</a>
                    </PopoverContent>
                </PopoverWrapper>

                <PopoverWrapper>
                    <LinkButton href="#">Bottom</LinkButton>
                    <PopoverContent title="Bottom title" position="bottom">
                        <span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                        </span>
                        <a href="#">Lorem Ipsum</a>
                    </PopoverContent>
                </PopoverWrapper>

                <PopoverWrapper>
                    <LinkButton href="#">Right</LinkButton>
                    <PopoverContent title="Right title" position="right">
                        <span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                        </span>
                        <a href="#">Lorem Ipsum</a>
                    </PopoverContent>
                </PopoverWrapper>
            </HomeWrapper>
        </Container>
    );
}
