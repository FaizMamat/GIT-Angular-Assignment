import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondpagesComponent } from './secondpages.component';

describe('SecondpagesComponent', () => {
  let component: SecondpagesComponent;
  let fixture: ComponentFixture<SecondpagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondpagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
