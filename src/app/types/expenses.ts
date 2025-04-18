import { FormControl } from '@angular/forms';

import { z } from 'zod';

const ExpenseSchema = z.object({
  expenseFor: z.string().min(3, 'expenseFor must be at least 3 characters'),
  amount: z.number().positive('Amount must be a positive number'),
  date: z.date(),
  costCenterId: z.string().min(3, 'Cost center ID must be at least 3 characters'),
});

type Expense = z.infer<typeof ExpenseSchema>;

export { ExpenseSchema, type Expense };

export interface ExpenseForm {
  expenseFor: FormControl<string | null>;
  amount: FormControl<number | null>;
  date: FormControl<Date | null>;
  costCenterId: FormControl<string | null>;
}
