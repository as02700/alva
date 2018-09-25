import * as Electron from 'electron';

const { TouchBarButton } = Electron.TouchBar;

export function createTouchbar(): Electron.TouchBarConstructorOptions {
	return {
		items: [
			new TouchBarButton({
				label: 'Test',
				backgroundColor: '#00c4a7',
				click: () => {
					console.log('Test');
				}
			}),
			new TouchBarButton({
				label: 'Pages',
				backgroundColor: '#a7c400',
				click: () => {
					console.log('Pages');
				}
			})
		]
	};
}
