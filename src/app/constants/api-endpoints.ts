import { environment } from '../../environments/environment';

export const apiBaseUrl = environment.apiBaseUrl;

export const costCentersEndpoint = `${apiBaseUrl}costCenters`;

export const expensesEndpoint = `${apiBaseUrl}expenses`;
