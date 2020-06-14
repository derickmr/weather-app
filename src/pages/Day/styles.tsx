import styled from 'styled-components';

export interface TempTextProps {
    color: string;
}

export const Title = styled.h1`
    font-size: 24px;
    color: #3F3F41;
    font-family: Arial, Helvetica, sans-serif;
    padding: 10px;
`;

export const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    float: left;
    margin-right: 10px;
    margin-bottom: 30px;
    width: 120px;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 5px;
`;

export const Div = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const TempText = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    color: ${(props: TempTextProps) => props.color};
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 16px;
    margin-top: 3px;
`;
