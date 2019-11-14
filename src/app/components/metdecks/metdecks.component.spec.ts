import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetdecksComponent } from './metdecks.component';

describe('MetdecksComponent', () => {
  let component: MetdecksComponent;
  let fixture: ComponentFixture<MetdecksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetdecksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetdecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
