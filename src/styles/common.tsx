import styled from 'styled-components';
import { TextProps } from '../models/TextProps';

export const Div = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 24px;
    color: #3F3F41;
    font-family: Arial, Helvetica, sans-serif;
    padding: 10px;
`;

export const Text = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    color: ${(props: TextProps) => props.color};
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 16px;
    margin-top: 3px;
    font-weight: bold;
`;

