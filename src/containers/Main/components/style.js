import styled from 'styled-components';
import {  CardContent, Typography } from '../../../components';

export const LabelStyled = styled(Typography)`
    font-weight: 500;
    font-size: 1.2rem;
`

export const ValueStyled = styled(Typography)`
    font-weight:400;
    font-size: 2.5rem;
`

export const  CardContentStyled = styled(CardContent)`
    border-left: 8px solid ${({ color }) => color || '#5d78ff'};
    display:block;
    padding-left:20px;
`   

export const CardPanelContentStyled = styled(CardContent)`
    display: flex;
    justify-content: space-between;
    padding:25px;
    
    .t-2{
        margin-top:10px;
        display:flex;
        justify-content: space-between;
        
    }

    
`
export const ItemStyled = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 150px;
    
`