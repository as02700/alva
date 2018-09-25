import * as Electron from 'electron';
import * as Message from '../message';
import { AlvaApp } from '../model';
import * as Types from '../types';
import * as uuid from 'uuid';
import { ViewMenuInjection } from './create-main-menu';

const { TouchBarButton, TouchBarLabel, TouchBarSegmentedControl } = Electron.TouchBar;

export interface TouchBarContext {
	app: AlvaApp;
}

export function createTouchbar(
	{ app }: TouchBarContext,
	injection: ViewMenuInjection
): Electron.TouchBarConstructorOptions {
	if (app.getActiveView() === Types.AlvaView.PageDetail) {
		return {
			items: [
				new TouchBarLabel({
					label: 'Label',
					textColor: '#00ff00'
				}),
				new TouchBarSegmentedControl({
					mode: 'multiple',
					segments: [{ label: 'Pages' }, { label: 'Elements' }, { label: 'Properties' }],
					change: (selectedIndex, isSelected) => {
						if (selectedIndex === 0) {
							console.log('first one');
							injection.sender.send({
								id: uuid.v4(),
								payload: {
									pane: Types.AppPane.PagesPane,
									visible: isSelected
								},
								type: Message.MessageType.SetPane
							});
						} else if (selectedIndex === 1) {
							console.log('second one');
							injection.sender.send({
								id: uuid.v4(),
								payload: {
									pane: Types.AppPane.ElementsPane,
									visible: isSelected
								},
								type: Message.MessageType.SetPane
							});
						} else if (selectedIndex === 2) {
							console.log('third one');
							injection.sender.send({
								id: uuid.v4(),
								payload: {
									pane: Types.AppPane.PropertiesPane,
									visible: isSelected
								},
								type: Message.MessageType.SetPane
							});
						} else {
							console.log('no fit');
						}
					}
				}),
				new TouchBarButton({
					label: 'Pages',
					click: () => {
						injection.sender.send({
							id: uuid.v4(),
							payload: {
								pane: Types.AppPane.PagesPane,
								visible: !app.getPanes().has(Types.AppPane.PagesPane)
							},
							type: Message.MessageType.SetPane
						});
					}
				}),
				new TouchBarButton({
					label: 'Elements',
					click: () => {
						injection.sender.send({
							id: uuid.v4(),
							payload: {
								pane: Types.AppPane.ElementsPane,
								visible: !app.getPanes().has(Types.AppPane.ElementsPane)
							},
							type: Message.MessageType.SetPane
						});
					}
				}),
				new TouchBarButton({
					label: 'Properties',
					click: () => {
						injection.sender.send({
							id: uuid.v4(),
							payload: {
								pane: Types.AppPane.PropertiesPane,
								visible: !app.getPanes().has(Types.AppPane.PropertiesPane)
							},
							type: Message.MessageType.SetPane
						});
					}
				})
			]
		};
	}
	if (app.getActiveView() === Types.AlvaView.SplashScreen) {
		return splashScreenLayout;
	}
	return { items: [] };
}

// const pageDetailLayout = {
// 	items: [
// 		new TouchBarButton({
// 			label: 'Test',
// 			click: () => {
// 				console.log('Test');
// 			}
// 		}),
// 		new TouchBarButton({
// 			label: 'Pages',
// 			click: () => {
// 				console.log('Pages');
// 				injection.sender.send({
// 					id: uuid.v4(),
// 					payload: {
// 						pane: Types.AppPane.PagesPane,
// 						visible: !app.getPanes().has(Types.AppPane.PagesPane)
// 					},
// 					type: Message.MessageType.SetPane
// 				});
// 			}
// 		})
// 	]
// };

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
