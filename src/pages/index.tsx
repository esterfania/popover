import React from 'react';
import styled from 'styled-components';
import { PopoverContent, PopoverWrapper } from '../components/Popover';

export default function Home() {
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    `;

    const HomeWrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const LinkButton = styled.a`
        color: #bc85bd;
        &:hover {
            opacity: 0.8;
        }
        &:visited {
            color: #906391;
        }
    `;

    const Button = styled(LinkButton)`
        padding: 1rem;
        text-decoration: none;
        border: 1px solid #bc85bd;
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
            border: 1px solid #bc85bd;
        }
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
                    <Button href="#" role="button">
                        Top
                    </Button>
                    <PopoverContent
                        title="Top title"
                        position="top"
                        aria-label="Informações em tooltip">
                        <span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                        </span>
                        <LinkButton href="#" role="button">
                            Lorem Ipsum
                        </LinkButton>
                    </PopoverContent>
                </PopoverWrapper>
                <PopoverWrapper>
                    <Button href="#" role="button">
                        Right
                    </Button>
                    <PopoverContent
                        title="Right title"
                        position="right"
                        aria-label="Informações em tooltip">
                        <span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                        </span>
                        <LinkButton href="#" role="button">
                            Lorem Ipsum
                        </LinkButton>
                    </PopoverContent>
                </PopoverWrapper>

                <PopoverWrapper>
                    <Button href="#" role="button">
                        Bottom
                    </Button>
                    <PopoverContent
                        title="Bottom title"
                        position="bottom"
                        aria-label="Informações em tooltip">
                        <span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                        </span>
                        <LinkButton href="#" role="button">
                            Lorem Ipsum
                        </LinkButton>
                    </PopoverContent>
                </PopoverWrapper>

                <PopoverWrapper>
                    <Button href="#" role="button">
                        Left
                    </Button>
                    <PopoverContent
                        title="Left title"
                        position="left"
                        aria-label="Informações em tooltip">
                        <span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                        </span>
                        <LinkButton href="#" role="button">
                            Lorem Ipsum
                        </LinkButton>
                    </PopoverContent>
                </PopoverWrapper>
            </HomeWrapper>
        </Container>
    );
}
