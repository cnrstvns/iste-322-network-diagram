import { useCallback, useMemo } from 'react';
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Edge,
  Connection,
} from 'reactflow';
import 'reactflow/dist/style.css';
import Internet from '@/components/Internet';
import Router from '@/components/Router';
import initialNodes from '@/constants/nodes';
import initialEdges from '@/constants/edges';
import Host from '@/components/Host';

export default function Index() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const customNodes = useMemo(
    () => ({
      router: Router,
      internet: Internet,
      host: Host,
    }),
    [],
  );

  const onConnect = useCallback(
    (params: Edge<any> | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <ReactFlow
      nodes={nodes}
      nodeTypes={customNodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      draggable={false}
      onConnect={onConnect}
      fitView
    >
      <Controls showInteractive={false} />
      <Background />
    </ReactFlow>
  );
}
