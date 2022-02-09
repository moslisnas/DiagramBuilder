import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "context/theme-context";
import { headerHeight, headerPadding } from "constants/layout-size-constants";

const Container = styled.div<{ mode:string }>`
    width: 100%;
    height: ${headerHeight.desktop};
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: ${(props) => props.mode==="light" ? "white" : "#222222"};
    color: ${(props) => props.mode==="light" ? "#222222" : "white"};
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
    const { general } = useContext(ThemeContext);

    return(
        <Container mode={general}>
            <LeftContainer>
                <Title><a href="/">Diagrams</a></Title>
            </LeftContainer>
            <RightContainer>
            </RightContainer>
        </Container>
    );
};

export default Header;