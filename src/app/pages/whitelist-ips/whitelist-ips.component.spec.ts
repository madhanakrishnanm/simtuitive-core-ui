import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitelistIpsComponent } from './whitelist-ips.component';

describe('WhitelistIpsComponent', () => {
  let component: WhitelistIpsComponent;
  let fixture: ComponentFixture<WhitelistIpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhitelistIpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhitelistIpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
