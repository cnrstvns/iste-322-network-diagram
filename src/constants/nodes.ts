import { Node } from 'reactflow';
import { InternetNode } from '@/components/Internet';
import { RouterNode } from '@/components/Router';

const initialNodes: Node<InternetNode | RouterNode>[] = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { label: 'Internet (RIT)' },
    type: 'internet',
  },
  {
    id: '2',
    position: { x: 0, y: 100 },
    data: { label: '', ip: '1.1.1.1', mask: '255.255.255.0' },
    type: 'router',
  },
  {
    id: '3',
    position: { x: -400, y: 300 },
    data: { label: '1' },
    type: 'host',
  },
  {
    id: '4',
    position: { x: -150, y: 300 },
    data: { label: '2' },
    type: 'host',
  },
  {
    id: '5',
    position: { x: 150, y: 300 },
    data: { label: '5' },
    type: 'host',
  },
  {
    id: '6',
    position: { x: 400, y: 300 },
    data: { label: '6' },
    type: 'host',
  },
].map((n) => ({ ...n, draggable: false }));

export default initialNodes;
