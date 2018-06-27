import * as React from 'react';
import DemoContainer from '../demo-container';

import { DragArea } from './';

export const DemoDragArea: React.SFC<{}> = (): JSX.Element => (
	<DemoContainer>
		<DragArea onDragStart={e => e} onDragLeave={e => e} onDragOver={e => e} onDrop={e => e}>
			<div draggable>Drag Area Element</div>
		</DragArea>
	</DemoContainer>
);

export default DemoDragArea;