export const getLastNodeId = (nodes:any[]):number => {
    let result = 0;

    nodes.map((node) => {
        if(result<parseInt(node.id)){
            result = parseInt(node.id);
        }
    });

    return result;
}