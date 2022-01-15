import React from "react";
import styled from "styled-components";
import { headerHeight, headerPadding } from "@/constants/layout-size-constants";

const Container = styled.div`
    width: 100%;
    height: ${headerHeight.desktop};
    display: grid;
    grid-template-columns: 1fr 1fr;
`;
const LeftContainer = styled.div`
    display: grid;
    padding-left: ${headerPadding.desktop};
`;
const RightContainer = styled.div`
    padding-right: ${headerPadding.desktop};
`;
const Title = styled.h1`
    margin: 0px;
    line-height: ${headerHeight.desktop};
`;

const Header = () => {
    return(
        <Container>
            <LeftContainer>
                <Title>Diagrams</Title>
            </LeftContainer>
            <RightContainer>
            </RightContainer>
        </Container>
    );
};

export default Header;