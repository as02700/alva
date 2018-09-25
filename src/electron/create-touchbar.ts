import * as Electron from 'electron';
import { AlvaApp } from '../model';
import * as Types from '../types';

const { TouchBarButton } = Electron.TouchBar;

export interface TouchBarContext {
	app: AlvaApp;
}

export function createTouchbar({ app }: TouchBarContext): Electron.TouchBarConstructorOptions {
	if (app.getActiveView() === Types.AlvaView.PageDetail) {
		return pageDetailLayout;
	}
	if (app.getActiveView() === Types.AlvaView.SplashScreen) {
		return splashScreenLayout;
	}
	return { items: [] };
}

const pageDetailLayout = {
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

const splashScreenLayout = {
	items: [
		new TouchBarButton({
			label: 'New',
			click: () => {
				console.log('New');
			}
		}),
		new TouchBarButton({
			label: 'Open',
			click: () => {
				console.log('Open');
			}
		})
	]
};
