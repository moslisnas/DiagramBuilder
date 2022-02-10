import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { odsColors } from "utils/ods-colors";
import { Handle, Position } from 'react-flow-renderer';

const OdsNodeContainer = styled.span<{color:string; fontColor:string}>`
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    color: ${(props) => props.fontColor};
`;
const OdsNodeText = styled.p`
    margin: 0px;
    text-align: center;
    font-size: 20px;
    line-height: 50px;
`;

interface OdsNodeProps{
    label: string;
    number: number;
}

const OdsNode = (props: { data:OdsNodeProps }) => {
    const router = useRouter();
    const { ods } = router.query;

    return(
        <OdsNodeContainer color={odsColors[props.data.number]["color"]} fontColor={odsColors[props.data.number]["fontColor"]}>
            {ods===undefined && (
                <a href={`/ods/${props.data.number}`}>
                    <OdsNodeText>{props.data.label}</OdsNodeText>
                </a>
            )}
            {ods && (
                <>
                    <OdsNodeText>{props.data.label}</OdsNodeText>
                    <Handle
                        type="source"
                        position={Position.Right}
                        id="b"
                        style={{ top: '50%', borderRadius: "50%" }}
                    />
                </>
            )}
        </OdsNodeContainer>
    );
}

export default OdsNode;