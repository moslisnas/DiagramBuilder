import React from "react";
import styled from "styled-components";

const Mask = styled.div<{color?:string}>`
    width: 100vw;
    height: 100vh;
    padding: 10% 0px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4;
    overflow: auto;
    text-align: center;
    background-color: ${(props) => props.color ? props.color : 'rgba(0, 0, 0, 0.8)'};
`;
const PopupContainer = styled.div<{width:string, height:string}>`
    display: inline-block;
    position: relative;
    width: ${(props) => props.width ? props.width : '90%'};
    height: ${(props) => props.height ? props.height : '90%'};
    padding: 10px;
    border-radius: 5px;
    background-color: #DDDDDD;
`;

const Popup = (props: { children:any, width:string, height:string }) => {
    return (
        <Mask>
            <PopupContainer width={props.width} height={props.height}>
                {props.children}
            </PopupContainer>
        </Mask>
    );
};

export default Popup;