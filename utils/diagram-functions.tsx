export const getLastNodeId = (nodes:any[]):number => {
    let result = 0;

    nodes.map((node) => {
        if(result<parseInt(node.id)){
            result = parseInt(node.id);
        }
    });

    return result;
}

export const combineElements = (nodes:any[], edges:any[]): any[] => {
    let result:any[] = [];

    nodes.map((node) => {
        result.push(node);
    });
    edges.map((edge) => {
        result.push(edge);
    });

    return result;
}