import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
      const departments = [
        { _id: '5b5946b9c8e215567f55d014', name: 'IT' },
        { _id: '5b5946b9c8e215567f55d015', name: 'HR' },
        { _id: '5b5946b9c8e215567f55d016', name: 'Logistics' },
        { _id: '5b5946b9c8e215567f55d017', name: 'Accounting' },
        { _id: '5b5946b9c8e215567f55d018', name: 'Education' },
        { _id: '5b5946b9c8e215567f55d019', name: 'People management' },
        { _id: '5b5946b9c8e215567f55d020', name: 'Office management' },
        { _id: '5b5946b9c8e215567f55d021', name: 'Development' },
        { _id: '5b5946b9c8e215567f55d022', name: 'Operations' },
        { _id: '5b5946b9c8e215567f55d023', name: 'Service Desk' }
      ];
      return {departments};
    }
  }
