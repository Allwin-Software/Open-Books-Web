import { computed, inject, Injectable, resource } from '@angular/core';
import { HttpService } from '../services/http.service';
import { costCentersEndpoint } from '../constants/api-endpoints';
import { lastValueFrom } from 'rxjs';
import { CostCenter } from '../types/cost-centers';

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
}
