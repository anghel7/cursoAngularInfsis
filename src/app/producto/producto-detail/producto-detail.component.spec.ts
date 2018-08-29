import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoDetailComponent } from './producto-detail.component';

describe('ProductoDetailComponent', () => {
  let component: ProductoDetailComponent;
  let fixture: ComponentFixture<ProductoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
