import React, { useContext, useState, useEffect, useCallback  } from "react";
import styled from "styled-components";
import ReactFlow, { ReactFlowProvider, Controls, MiniMap, Background, addEdge, applyNodeChanges, applyEdgeChanges, useNodesState, useEdgesState, useReactFlow } from "reactflow";
import ThemeContext from "context/theme-context";
import DiagramViewportContext from "context/diagram-viewport-context";
import HidersNodeContext from "context/nodes/hiders-node-context";

const Container = styled.div`
  height: 100%;
  background-color: white;
`;

interface DiagramViewportProps{
  nodes:any[],
  nodesHandler:any,
  edges:any[],
  edgesHandler:any,
  nodeTypes?:any,
};

const DiagramViewport = (props:DiagramViewportProps) => {
    // console.log("Nodes actually: ");
    // console.log(props.nodes);
    // console.log("Edges actually: ");
    // console.log(props.edges);
    const { general } = useContext(ThemeContext);
    const { background, controls, map } = useContext(DiagramViewportContext);
    const [nodes, setNodes, onNodesChange] = useNodesState(props.nodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(props.edges);
    const [hiders, setHiders] = useState([]);
    const valueHidersNodeProvider:any = { hiders, setHiders };

    const onConnect = (params:any) => {
        const newEdge = {
            id: "e"+params.source+"-"+params.target,
            source: params.source,
            target: params.target
        }
        props.edgesHandler([...props.edges, newEdge]);
    }
    //Hidder efect.
    useEffect(() => {
      //Hide nodes.
      setNodes(nodes.map((node) => {
        node.hidden = false;
        hiders.map((hider) => {
          if(node.data && hider===node.data.hiderId){
            node.hidden = !node.hidden;
          }
        })
        return node;
      }));
      //Hide edges
      setEdges(edges.map((edge) => {
        edge.hidden = false;
        hiders.map((hider) => {
          if(edge.data && hider===edge.data.hiderId){
            edge.hidden = !edge.hidden;
          }
        })
        return edge;
      }));
    }, [hiders, setNodes, setEdges]);

    // const onNodesChange = useCallback(
    //   (changes) => setNodes((ns) => applyNodeChanges(changes, ns)),
    //   []
    // );
    // const onEdgesChange = useCallback(
    //   (changes) => setEdges((es) => applyEdgeChanges(changes, es)),
    //   []
    // );

    //Zustand provider functionality.
    // const { setViewport, setCenter } = useReactFlow();
    // setViewport({ x: 0, y: 0, zoom: 2 });
    // const transform = useStore((store) => store.transform);
    
    return(
        <ReactFlowProvider>
            <Container>
                <HidersNodeContext.Provider value={valueHidersNodeProvider}>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        nodeTypes={props.nodeTypes}
                        onConnect={onConnect}
                        deleteKeyCode={"_DELETE"}
                        panOnDrag={true}
                        style={{
                          backgroundColor: general==="light" ? "#FFFFFF" : "#222222"
                        }}
                    >
                        {controls["enabled"] && (
                            <Controls />
                        )}
                        {map["enabled"] && (
                            <MiniMap nodeColor={(node) => {return '#eee';}} nodeStrokeWidth={3} />
                        )}
                        {background["enabled"] && (
                            <Background variant={background.variant} gap={background.gap} size={background.size}/>
                        )}
                    </ReactFlow>
                </HidersNodeContext.Provider>
            </Container>
        </ReactFlowProvider>
    );
};

export default DiagramViewport;