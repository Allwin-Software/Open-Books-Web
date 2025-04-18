import { computed, inject, Injectable, resource } from '@angular/core';
import { HttpService } from '../services/http.service';
import {
  costCentersEndpoint,
  reconcileCostCenterEndpoint,
  reconcileCostCentersEndpoint,
} from '../constants/api-endpoints';
import { lastValueFrom, map, take, tap } from 'rxjs';
import { CostCenter } from '../types/cost-centers';
import { InsertResponse } from '../types/common';

@Injectable({
  providedIn: 'root',
})
export class CostCenterService {
  httpService = inject(HttpService);

  costCenterResource = resource({
    loader: ({ request, abortSignal }) => {
      const api$ = this.httpService.get<CostCenter[]>(costCentersEndpoint);
      return lastValueFrom(api$);
    },
  });

  costCenters = computed(() => this.costCenterResource.value() || []);

  saveCostCenter(costCenter: CostCenter) {
    return this.httpService.post<InsertResponse>(costCentersEndpoint, costCenter).pipe(
      map((response) => response.success === true),
      tap(() => this.costCenterResource.reload())
    );
  }

  reconcileCostCenters() {
    const url = reconcileCostCentersEndpoint;
    return this.httpService.get<InsertResponse>(`${url}`).pipe(
      map((response) => response.success === true),
      tap(() => this.costCenterResource.reload())
    );
  }

  reconcileCostCenter(id: string) {
    const url = reconcileCostCenterEndpoint(id);
    return this.httpService.get<InsertResponse>(`${url}`).pipe(
      map((response) => response.success === true),
      tap(() => this.costCenterResource.reload())
    );
  }
}
