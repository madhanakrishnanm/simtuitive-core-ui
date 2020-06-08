import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteManagerComponent } from './invite-manager.component';

describe('InviteManagerComponent', () => {
  let component: InviteManagerComponent;
  let fixture: ComponentFixture<InviteManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
