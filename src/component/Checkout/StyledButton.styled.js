import styled from 'styled-components';
import { Button } from 'antd';

export const StyledButton = styled(Button)`
    background: #236e00;
    border-radius: 10px;
    color: white !important;
    height: 50px;
    font-size: 30px;
    border: 1px solid white !important; 
    padding-bottom: 50px;
    &:hover{
        background: linear-gradient(rgba(128,0,0, 0.6), rgba(128,0,0, 0.6))
    }
    margin-right: auto;
    margin-left: 41vw;
    margin-bottom: 300px;
`;

export default StyledButton;