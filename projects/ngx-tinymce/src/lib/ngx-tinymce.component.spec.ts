import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTinymceComponent } from './ngx-tinymce.component';

describe('NgxTinymceComponent', () => {
  let component: NgxTinymceComponent;
  let fixture: ComponentFixture<NgxTinymceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTinymceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTinymceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
