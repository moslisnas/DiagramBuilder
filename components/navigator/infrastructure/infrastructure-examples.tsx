import React from "react";
import styled from "styled-components";
import InfrastructureExample from "components/navigator/infrastructure/infrastructure-example";

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 15px;
    row-gap: 15px;
    padding: 15px;
`;
const ExampleButton = styled.div`
    border: 1px solid #444444;
    border-radius: 5px;
    text-align: center;
`;

interface InfrastructureExamplesProps{
    
}

const InfrastructureExamples = (props: InfrastructureExamplesProps) => {

    return (
        <Container>
            <ExampleButton><InfrastructureExample id={1} title={"Infraestructura 1"}/></ExampleButton>
            {/*<ExampleButton><InfrastructureExample id={2} title={"Infraestructura 2"}/></ExampleButton>
            <ExampleButton><InfrastructureExample id={3} title={"Infraestructura 3"}/></ExampleButton>
            <ExampleButton><InfrastructureExample id={4} title={"Infraestructura 4"}/></ExampleButton>
            <ExampleButton><InfrastructureExample id={5} title={"Infraestructura 5"}/></ExampleButton>*/}
        </Container>
    )
}

export default InfrastructureExamples;