import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardComponent } from './list.card.component';

describe('CardComponent', () => {
  let component: ListCardComponent;
  let fixture: ComponentFixture<ListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
