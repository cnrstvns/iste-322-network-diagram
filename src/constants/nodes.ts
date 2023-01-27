import { Node } from 'reactflow';
import { InternetNode } from '@/components/Internet';
import { HostNode } from '@/components/Host';

const initialNodes: Node<InternetNode | HostNode>[] = [
  {
    id: '1',
    position: { x: 0, y: -50 },
    data: { label: 'Internet (RIT)' },
    type: 'internet',
  },
  {
    id: '2',
    position: { x: 0, y: 50 },
    data: { label: '', ip: '1.1.1.1', mask: '255.255.255.0' },
    type: 'router',
  },
  {
    id: '3',
    position: { x: -400, y: 300 },
    data: {
      label: 'Windows 10 Client',
      type: 'client',
      hostname: 'sunny.theranos.com',
      ip: 'DHCP',
      mac: '00:50:56:b0:ad:3b',
    },
    type: 'host',
  },
  {
    id: '4',
    position: { x: -150, y: 300 },
    data: {
      label: 'Windows Server 2022',
      type: 'server',
      hostname: 'elizabeth.theranos.com',
      ip: '192.168.10.5',
      mac: '00:50:56:b0:c0:7f	',
    },
    type: 'host',
  },
  {
    id: '5',
    position: { x: 150, y: 300 },
    data: {
      label: 'RHEL 8 Server',
      type: 'server',
      hostname: 'richard.piedpiper.com',
      ip: '192.168.20.5',
      mac: '00:50:56:b0:8b:23',
    },
    type: 'host',
  },
  {
    id: '6',
    position: { x: 400, y: 300 },
    data: {
      label: 'CentOS 7 Client',
      type: 'client',
      hostname: 'dinesh.piedpiper.com',
      ip: 'DHCP',
      mac: '00:50:56:b0:6c:e4',
    },
    type: 'host',
  },
  {
    id: '7',
    position: { x: 400, y: 300 },
    data: {
      label: 'Rocky Linux Server',
      type: 'server',
      hostname: 'gilfoyle.piedpiper.com',
      ip: 'DHCP',
      mac: '00:50:56:b0:07:b7',
    },
    type: 'host',
  },
  {
    id: '8',
    position: { x: 400, y: 500 },
    data: {
      label: 'CentOS 7 Client',
      type: 'client',
      hostname: 'dinesh.piedpiper.com',
      ip: 'DHCP',
      mac: '00:50:56:b0:6c:e4',
    },
    type: 'host',
  },
].map((n) => ({ ...n, draggable: false }));

export default initialNodes;
