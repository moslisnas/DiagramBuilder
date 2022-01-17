import React from "react";
import styled from "styled-components";
import { contentHeight } from "constants/layout-size-constants";

const Container = styled.div`
    height: ${contentHeight.desktop};
    background-color: #DDDDDD;
    padding: 20px;
`;

const ContentContainer = (props: {children: any}) => {
    return(
        <Container>
            {props.children}
        </Container>
    );
}

export default ContentContainer;