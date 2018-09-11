import * as Events from 'events';
import * as Serde from '../sender/serde';

export type ConnectionHandler = (ws: WebSocket) => void;

export interface ConnectionHandlerContext {
	emitter: Events.EventEmitter;
}

export function createConnectionHandler(context: ConnectionHandlerContext): ConnectionHandler {
	return function connectionHandler(ws: WebSocket): void {
		// tslint:disable-next-line:no-any
		const w = ws as any;

		w.on('error', err => {
			console.error(err);
		});

		w.on('message', envelope => {
			if (typeof envelope === 'undefined') {
				return;
			}

			const message = Serde.deserialize(envelope);

			if (!message) {
				return;
			}

			context.emitter.emit('client-message', message);
		});
	};
}
