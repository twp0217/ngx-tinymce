import { NgxTinymceModule } from './ngx-tinymce.module';

describe('NgxTinymceModule', () => {
  let ngxTinymceModule: NgxTinymceModule;

  beforeEach(() => {
    ngxTinymceModule = new NgxTinymceModule();
  });

  it('should create an instance', () => {
    expect(ngxTinymceModule).toBeTruthy();
  });
});
