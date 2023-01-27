import { Handle, Position } from 'reactflow';
import { Share2 } from 'lucide-react';

export default function Router() {
  return (
    <div>
      <div className="space-y-1 p-[10px] w-[220px] border border-[#1a192b] bg-red-400 rounded-[3px]">
        <div>
          <div className="flex items-center space-x-1.5">
            <Share2 height={18} />
            <span className="font-medium">PFSense</span>
          </div>
          <span className="font-light">(barker.piedpiper.com)</span>
        </div>
        <div>
          <span className="font-medium">WAN IP:</span> RIT DHCP
        </div>
        <div>
          <span className="font-medium">WinNet IP:</span> 192.168.10.0/24
        </div>
        <div>
          <span className="font-medium">LinNet IP:</span> 192.168.20.0/24
        </div>
        <div>
          <span className="font-medium">DNS:</span> 192.168.10.5 / 1.1.1.1
        </div>
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
