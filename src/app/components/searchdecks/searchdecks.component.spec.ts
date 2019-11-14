import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdecksComponent } from './searchdecks.component';

describe('SearchdecksComponent', () => {
  let component: SearchdecksComponent;
  let fixture: ComponentFixture<SearchdecksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchdecksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchdecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
