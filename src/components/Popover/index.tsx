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

const PopoverBox = styled.span`
    visibility: hidden;
    min-width: 180px;
    background-color: #fef8e3;
    color: #6c7980;
    text-align: baseline;
    border-radius: 6px;
    padding: 10px;
    position: absolute;
    font-size: 1rem;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.04), 0px -1px 4px rgba(0, 0, 0, 0.06),
        0px 1px 0.8px rgba(0, 0, 0, 0.02);
    z-index: 1;

    &::after {
        content: '';
        position: absolute;
        border-width: 15px;
        border-style: solid;
    }

    > * {
        font-weight: 400;
        padding: 0.5rem;
        display: inline-block;
        line-height: 24px;
    }
    transition-delay: 0.5s;
    p {
        font-size: 1.125rem;
        font-weight: 700;
        display: block;
        color: #39464d;
    }
`;

const PopoverOnTop = styled(PopoverBox)`
    bottom: 150%;
    left: 50%;
    margin-left: -35px;

    &::after {
        top: 100%;
        left: 10%;
        border-color: #fef8e3 transparent transparent transparent;
    }
`;

const PopoverOnBottom = styled(PopoverBox)`
    top: 150%;
    left: 50%;
    margin-left: -60px;

    &::after {
        bottom: 100%;
        left: 10%;
        border-color: transparent transparent #fef8e3 transparent;
    }
`;

const PopoverOnRight = styled(PopoverBox)`
    top: -120px;
    left: 110%;
    margin-left: 1rem;
    margin-top: 2rem;

    &::after {
        top: 50%;
        right: 100%;
        margin-top: -5px;
        border-color: transparent #fef8e3 transparent transparent;
    }
`;
const PopoverOnLeft = styled(PopoverBox)`
    top: -110px;
    right: 110%;
    margin-right: 1rem;
    margin-top: 1rem;

    &::after {
        top: 50%;
        left: 100%;
        margin-top: -5px;
        border-color: transparent transparent transparent #fef8e3;
    }
`;

interface PopoverContentProps {
    children: ReactNode;
    title: string;
    position: 'bottom' | 'top' | 'left' | 'right';
}

export function PopoverContent(props: PopoverContentProps) {
    return props.position === 'top' ? (
        <PopoverOnTop role="tooltip" aria-label="Content displayed on hover">
            <p>{props.title}</p>
            {props.children}
        </PopoverOnTop>
    ) : props.position === 'bottom' ? (
        <PopoverOnBottom role="tooltip" aria-label="Content displayed on hover">
            <p>{props.title}</p>
            {props.children}
        </PopoverOnBottom>
    ) : props.position === 'left' ? (
        <PopoverOnLeft role="tooltip" aria-label="Content displayed on hover">
            <p>{props.title}</p>
            {props.children}
        </PopoverOnLeft>
    ) : (
        <PopoverOnRight role="tooltip" aria-label="Content displayed on hover">
            <p>{props.title}</p>
            {props.children}
        </PopoverOnRight>
    );
}
