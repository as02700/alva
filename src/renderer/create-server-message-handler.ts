import { createEditMessageHandler } from './create-edit-message-handler';
import { createInitMessageHandler } from './create-init-message-handler';
import { createProjectMessageHandler } from './create-project-message-handler';
import { createRequestMessageHandler } from './create-request-message-handler';
import * as Types from '../types';
import * as Model from '../model';
import { ViewStore } from '../store';

export interface ServerMessageHandlerContext {
	app: Model.AlvaApp;
	history: Model.EditHistory;
	store: ViewStore;
}

export type ServerMessageHandler = (message: Types.Message) => void;

export function createServerMessageHandler({
	app,
	history,
	store
}: ServerMessageHandlerContext): ServerMessageHandler {
	const handleInitMessages = createInitMessageHandler({ app, history, store });
	const handleEditMessages = createEditMessageHandler({ app, store });
	const handleProjectMessages = createProjectMessageHandler({ app, history, store });
	const handleRequestMessages = createRequestMessageHandler({ app, history, store });

	return function serverMessageHandler(message: Types.Message): void {
		handleInitMessages(message);
		handleProjectMessages(message);
		handleRequestMessages(message);
		handleEditMessages(message);
	};
}