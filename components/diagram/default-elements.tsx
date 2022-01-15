export const defaultNodes = [
    {
        id: '1',
        type: 'input',
        data: { label: 'Node 1' },
        position: { x: 250, y: 100 },
    },
    {
        id: '2',
        data: { label: <div>Node 2</div> },
        position: { x: 250, y: 200 }
    },
    {
        id: '3',
        type: 'output',
        data: { label: 'Node 3' },
        position: { x: 250, y: 300 }
    }
];

export const defaultEdges = [
    { id: 'e2-3', source: '2', target: '3' },
    { id: 'e1-2', source: '1', target: '2', animated: true }
];
