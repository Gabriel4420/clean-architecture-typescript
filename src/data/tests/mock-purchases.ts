import { SavePurchases } from '@/domain/useCases/save-purchases'
import faker from 'faker'
export const mockPurchases = (): Array<SavePurchases.Params> => [
  {
    id: faker.random.uuid(),
    date: faker.date.recent(),
    value: faker.random.number(),
  },
  {
    id: faker.random.uuid(),
    date: faker.date.recent(),
    value: faker.random.number(),
  },
]
