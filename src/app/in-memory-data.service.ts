import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
      const departments = [
        { id: '5b5946b9c8e215567f55d014', name: 'IT' },
        { id: '5b5946b9c8e215567f55d015', name: 'HR' },
        { id: '5b5946b9c8e215567f55d016', name: 'Logistics' },
        { id: '5b5946b9c8e215567f55d017', name: 'Accounting' },
        { id: '5b5946b9c8e215567f55d018', name: 'Education' },
        { id: '5b5946b9c8e215567f55d019', name: 'People management' },
        { id: '5b5946b9c8e215567f55d020', name: 'Office management' },
        { id: '5b5946b9c8e215567f55d021', name: 'Development' },
        { id: '5b5946b9c8e215567f55d022', name: 'Operations' },
        { id: '5b5946b9c8e215567f55d023', name: 'Service Desk' }
      ];
      return {departments};
    }
  }
