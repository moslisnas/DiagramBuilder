import React from "react";
import styled from "styled-components";

const Container = styled.div`
    padding: 15px;
`;

interface InfrastructureExampleProps{
    id: number;
    title: string;
}

const InfrastructureExample = (props: InfrastructureExampleProps) => {

    return (
        <Container>
            <a href={`/infrastructure/${props.id}`} title={props.title}>
                {props.title}
            </a>
        </Container>
    )
}

export default InfrastructureExample;