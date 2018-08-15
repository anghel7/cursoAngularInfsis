import { ProductoModule } from './producto.module';

describe('ProductoModule', () => {
  let productoModule: ProductoModule;

  beforeEach(() => {
    productoModule = new ProductoModule();
  });

  it('should create an instance', () => {
    expect(productoModule).toBeTruthy();
  });
});
