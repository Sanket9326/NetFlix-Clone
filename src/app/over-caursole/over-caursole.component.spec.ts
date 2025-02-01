import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverCaursoleComponent } from './over-caursole.component';

describe('OverCaursoleComponent', () => {
  let component: OverCaursoleComponent;
  let fixture: ComponentFixture<OverCaursoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverCaursoleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OverCaursoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
