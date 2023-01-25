import { Edge } from 'reactflow';

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true },
  { id: 'e2-4', source: '2', target: '4', animated: true },
  { id: 'e2-3', source: '2', target: '5', animated: true },
  { id: 'e2-4', source: '2', target: '6', animated: true },
];

export default initialEdges;
