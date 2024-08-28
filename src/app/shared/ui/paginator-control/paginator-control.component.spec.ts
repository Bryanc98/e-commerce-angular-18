import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorControlComponent } from './paginator-control.component';

describe('PaginatorControlComponent', () => {
  let component: PaginatorControlComponent;
  let fixture: ComponentFixture<PaginatorControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginatorControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatorControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
