import { IndexRouterModule } from './index-router.module';

describe('IndexRouterModule', () => {
  let indexRouterModule: IndexRouterModule;

  beforeEach(() => {
    indexRouterModule = new IndexRouterModule();
  });

  it('should create an instance', () => {
    expect(indexRouterModule).toBeTruthy();
  });
});
