import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesinfoComponent } from './quotesinfo.component';

describe('QuotesinfoComponent', () => {
  let component: QuotesinfoComponent;
  let fixture: ComponentFixture<QuotesinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
