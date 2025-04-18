import { environment } from '../../environments/environment';

export const apiBaseUrl = environment.apiBaseUrl;

export const costCentersEndpoint = `${apiBaseUrl}costCenters`;

export const reconcileCostCentersEndpoint = `${costCentersEndpoint}/reconcile`;
export const reconcileCostCenterEndpoint = (id: string) => `${costCentersEndpoint}/reconcile/${id}`;

export const expensesEndpoint = `${apiBaseUrl}expenses`;
