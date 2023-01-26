import { NodeProps, Handle, Position } from 'reactflow';
import { Laptop, Server } from 'lucide-react';
import clsx from 'clsx';

export type HostNode = {
  label: string;
  ip: string;
  hostname: string;
  type: 'server' | 'client';
  mac: string;
};

export default function Host({ data }: NodeProps<HostNode>) {
  const { type, label, ip, hostname, mac } = data;

  return (
    <div>
      <div
        className={clsx(
          'space-y-0 p-[10px] w-[220px] border border-[#1a192b] bg-white rounded-[3px]',
          {
            'bg-violet-400': type === 'server',
            'bg-indigo-400': type === 'client',
          },
        )}
      >
        <div className="pb-2">
          <div className="flex items-center space-x-1.5">
            {type === 'client' && <Laptop height={18} />}
            {type === 'server' && <Server height={18} />}
            <span className="font-medium">{label}</span>
          </div>
          <span className="font-light">({hostname})</span>
        </div>
        <div>
          <span className="font-medium">IP:</span> {ip}
        </div>
        <div>
          <span className="font-medium">MAC:</span> {mac}
        </div>
      </div>
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={false}
        draggable={false}
        className="absolute -top-0.5 pointer-events-none w-[6px] h-[6px] bg-[#1a192b] border-white border rounded-full"
      />
    </div>
  );
}
