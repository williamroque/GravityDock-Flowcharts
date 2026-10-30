import { BaseNode } from '@gravitydock/types';
import type { NodeCategory } from '@gravitydock/types';
import { FlowchartCategory } from '../categories';

export abstract class FlowchartShapeNode extends BaseNode {
    readonly category: NodeCategory = FlowchartCategory;
    readonly visible = true;
    readonly dynamicInputs = { baseName: 'Input', acceptsType: 'flowchart' };
    readonly dynamicOutputs = { baseName: 'Output', outputType: 'flowchart' };
}
