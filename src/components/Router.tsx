import { NodeProps, Handle, Position } from 'reactflow';
import { Share2 } from 'lucide-react';

export type RouterNode = {
  label: string;
  ip: string;
  mask: string;
};

export default function Router({ data, id }: NodeProps<RouterNode>) {
  return (
    <div>
      <div className="space-y-1.5 p-[10px] w-[220px] border border-[#1a192b] bg-white rounded-[3px]">
        <div className="flex items-center">
          <Share2 height={18} />
          <span className="font-medium">— Router {data.label}</span>
        </div>
        <div>IP: {data.ip}</div>
        <div>Netmask: {data.mask}</div>
      </div>
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={false}
        draggable={false}
        className="absolute -top-0.5 pointer-events-none w-[6px] h-[6px] bg-[#1a192b] border-white border rounded-full"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={false}
        draggable={false}
        className="absolute -bottom-0.5 pointer-events-none w-[6px] h-[6px] bg-[#1a192b] border-white border rounded-full"
      />
    </div>
  );
}
