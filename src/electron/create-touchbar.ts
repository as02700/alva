import * as Electron from 'electron';
const { TouchBarButton } = Electron.TouchBar;

export function createTouchbar(): Electron.TouchBarConstructorOptions {
	console.log('THIS IS A NEW TOUCHBAR');
	return {
		items: [
			new TouchBarButton({
				backgroundColor: '#00c4a7',
				click: () => {
					console.log('Test');
				},
				label: 'Test'
			})
		]
	};
}
