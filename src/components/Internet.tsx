import { NodeProps, Handle, Position } from 'reactflow';
import { CloudCog } from 'lucide-react';

export type InternetNode = {
  label: string;
};

export default function Internet({ data }: NodeProps<InternetNode>) {
  return (
    <div>
      <div className="space-y-1.5 p-[10px] w-[220px] border border-[#1a192b] bg-orange-400 rounded-[3px]">
        <div className="flex items-center">
          <CloudCog height={18} />
          <span className="font-medium">— {data.label}</span>
        </div>
      </div>
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
