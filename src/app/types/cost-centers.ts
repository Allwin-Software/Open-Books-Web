import { FormControl } from '@angular/forms';
import { z } from 'zod';

export const CostCenterSchema = z.object({
  _id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  totalCost: z.number().optional(),
});

export type CostCenter = z.infer<typeof CostCenterSchema>;

export interface CostCenterForm {
  name: FormControl<string | null>;
  description: FormControl<string | null>;
}
