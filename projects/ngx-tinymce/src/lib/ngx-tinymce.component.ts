import { Component, AfterViewInit, OnDestroy, forwardRef, ViewChild, ElementRef, NgZone, Input, Output, EventEmitter } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

import { TinymceOptions } from "./interface";
import { DefaultOptions } from "./default-options";
import { isFunction } from "./utils";
import { TinymceEvents } from "./tinymce-events";

declare var tinymce: any;

@Component({
  selector: "ngx-tinymce",
  templateUrl: "./ngx-tinymce.component.html",
  styleUrls: ["./ngx-tinymce.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxTinymceComponent),
      multi: true
    }
  ]
})
export class NgxTinymceComponent extends TinymceEvents implements ControlValueAccessor, AfterViewInit, OnDestroy {
  private value: string;
  private isDisabled: boolean;
  private defaultOptions: TinymceOptions = new DefaultOptions();
  editor: any;

  @Input() options: TinymceOptions;

  @ViewChild("host")
  host: ElementRef;

  constructor(private el: ElementRef, private zone: NgZone) {
    super();
  }

  onChangeCallback = (_: any) => {};
  onTouchedCallback = () => {};

  writeValue(value: string): void {
    this.value = value;
    this.setEditorContent();
  }

  registerOnChange(fn: (_: any) => {}): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
    this.setEditorState();
  }

  ngAfterViewInit() {
    this.tinymceInit();
  }

  ngOnDestroy() {
    if (this.editor) {
      this.editor.destroy();
      this.editor = null;
    }
  }

  /**
   * 设置编辑器内容
   */
  setEditorContent() {
    if (this.editor && this.value) {
      this.editor.setContent(this.value);
    }
  }

  /**
   * 设置编辑器状态
   */
  setEditorState() {
    if (this.editor) {
      if (this.isDisabled) {
        this.editor.setMode("readonly");
      } else {
        this.editor.setMode("design");
      }
    }
  }

  /**
   * 设置值
   * @param value 值
   */
  updateValue(value: string) {
    this.zone.run(() => {
      this.value = value;

      this.onChangeCallback(this.value);
      this.onTouchedCallback();
    });
  }

  /**
   * 编辑器初始化
   */
  tinymceInit() {
    if (typeof tinymce === 'undefined') {
      throw new Error('failed to load tinymce.js');
    }
    let options: TinymceOptions = {
      target: this.host.nativeElement,
      setup: editor => {
        if (this.options && isFunction(this.options.setup)) {
          this.options.setup(editor);
        }
        editor.on("init", e => {
          this.editor = editor;
          this.tinymceInitialized();
        });
        editor.on("change keyup Undo Redo", e => {
          this.updateValue(editor.getContent());
        });
        this.registerEvents(editor);
      }
    };
    this.zone.runOutsideAngular(() => {
      tinymce.init(Object.assign(this.defaultOptions, this.options, options));
    });
  }

  /**
   * 编辑器初始化完成
   */
  tinymceInitialized() {
    this.setEditorContent();
    this.setEditorState();
  }
}
