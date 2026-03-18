import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Names } from './names';

describe('Names', () => {
  let component: Names;
  let fixture: ComponentFixture<Names>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Names]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Names);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
