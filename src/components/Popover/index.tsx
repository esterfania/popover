import { ReactNode } from 'react';
import styled from 'styled-components';

export const PopoverWrapper = styled.div`
    position: relative;
    display: inline-block;
    border-radius: 8px;
    margin: 0.5rem;

    &:hover > span {
        transition: 1s ease-out;
        visibility: visible;
    }
`;

const PopoverOnTop = styled.span`
    visibility: hidden;
    min-width: 180px;
    background-color: #fef8e3;
    color: #6c7980;
    text-align: baseline;
    border-radius: 6px;
    padding: 10px;
    position: absolute;
    z-index: 1;
    bottom: 150%;
    left: 50%;
    margin-left: -60px;
    font-size: 1rem;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.04), 0px -1px 4px rgba(0, 0, 0, 0.06),
        0px 1px 0.8px rgba(0, 0, 0, 0.02);
    > * {
        font-weight: 400;
        padding: 0.5rem;
        display: inline-block;
        line-height: 24px;
    }
    transition-delay: 0.5s;
    &::after {
        content: '';
        position: absolute;
        top: 100%; /* At the bottom of the tooltip */
        left: 10%;
        border-width: 15px;
        border-style: solid;
        border-color: #fef8e3 transparent transparent transparent;
    }

    p {
        font-size: 1.125rem;
        font-weight: 700;
        display: block;
        color: #39464d;
    }
`;

const PopoverOnBottom = styled.span`
    visibility: hidden;
    min-width: 180px;
    background-color: #fef8e3;
    color: #6c7980;
    text-align: baseline;
    border-radius: 6px;
    padding: 10px;
    position: absolute;
    z-index: 1;
    top: 150%;
    left: 50%;
    margin-left: -60px;
    font-size: 1rem;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.04), 0px -1px 4px rgba(0, 0, 0, 0.06),
        0px 1px 0.8px rgba(0, 0, 0, 0.02);
    > * {
        font-weight: 400;
        padding: 0.5rem;
        display: inline-block;
        line-height: 24px;
    }
    transition-delay: 0.5s;
    &::after {
        content: '';
        position: absolute;
        bottom: 100%;
        left: 10%;
        border-width: 15px;
        border-style: solid;
        border-color: transparent transparent #fef8e3 transparent;
    }

    p {
        font-size: 1.125rem;
        font-weight: 700;
        display: block;
        color: #39464d;
    }
`;

const PopoverOnRight = styled.span`
    visibility: hidden;
    min-width: 180px;
    background-color: #fef8e3;
    color: #6c7980;
    text-align: baseline;
    border-radius: 6px;
    padding: 10px;
    position: absolute;
    z-index: 1;
    top: -120px;
    left: 110%;
    margin-left: 1rem;
    font-size: 1rem;
    margin-top: 2rem;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.04), 0px -1px 4px rgba(0, 0, 0, 0.06),
        0px 1px 0.8px rgba(0, 0, 0, 0.02);
    > * {
        font-weight: 400;
        padding: 0.5rem;
        display: inline-block;
        line-height: 24px;
    }
    transition-delay: 0.5s;
    &::after {
        content: '';
        position: absolute;
        top: 50%;
        right: 100%;
        margin-top: -5px;
        border-width: 15px;
        border-style: solid;
        border-color: transparent #fef8e3 transparent transparent;
    }

    p {
        font-size: 1.125rem;
        font-weight: 700;
        display: block;
        color: #39464d;
    }
`;
const PopoverOnLeft = styled.span`
    visibility: hidden;
    min-width: 180px;
    background-color: #fef8e3;
    color: #6c7980;
    text-align: baseline;
    border-radius: 6px;
    padding: 10px;
    position: absolute;
    z-index: 1;
    top: -110px;
    right: 110%;
    margin-right: 1rem;
    font-size: 1rem;
    margin-top: 1rem;

    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.04), 0px -1px 4px rgba(0, 0, 0, 0.06),
        0px 1px 0.8px rgba(0, 0, 0, 0.02);
    > * {
        font-weight: 400;
        padding: 0.5rem;
        display: inline-block;
        line-height: 24px;
    }
    transition-delay: 0.5s;
    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 100%;
        margin-top: -5px;
        border-width: 15px;
        border-style: solid;
        border-color: transparent transparent transparent #fef8e3;
    }

    p {
        font-size: 1.125rem;
        font-weight: 700;
        display: block;
        color: #39464d;
    }
`;

interface PopoverContentProps {
    children: ReactNode;
    title: string;
    position: 'bottom' | 'top' | 'left' | 'right';
}

export function PopoverContent(
    props: PopoverContentProps = {
        children: <div></div>,
        title: 'Insira um title',
        position: 'bottom'
    }
) {
    return props.position === 'top' ? (
        <PopoverOnTop>
            <p>{props.title}</p>
            {props.children}
        </PopoverOnTop>
    ) : props.position === 'bottom' ? (
        <PopoverOnBottom>
            <p>{props.title}</p>
            {props.children}
        </PopoverOnBottom>
    ) : props.position === 'left' ? (
        <PopoverOnLeft>
            <p>{props.title}</p>
            {props.children}
        </PopoverOnLeft>
    ) : (
        <PopoverOnRight>
            <p>{props.title}</p>
            {props.children}
        </PopoverOnRight>
    );
}
