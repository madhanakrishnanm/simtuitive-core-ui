import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMetaComponent } from './create-meta.component';

describe('CreateMetaComponent', () => {
  let component: CreateMetaComponent;
  let fixture: ComponentFixture<CreateMetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
