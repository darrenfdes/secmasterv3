import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSecurityComponent } from './show-security.component';

describe('ShowSecurityComponent', () => {
  let component: ShowSecurityComponent;
  let fixture: ComponentFixture<ShowSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
