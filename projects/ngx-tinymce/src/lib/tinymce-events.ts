import { Output, EventEmitter } from "@angular/core";

export class TinymceEvents {
  // Native
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Output() onDblClick: EventEmitter<any> = new EventEmitter();
  @Output() onMouseDown: EventEmitter<any> = new EventEmitter();
  @Output() onMouseUp: EventEmitter<any> = new EventEmitter();
  @Output() onMouseMove: EventEmitter<any> = new EventEmitter();
  @Output() onMouseOver: EventEmitter<any> = new EventEmitter();
  @Output() onMouseOut: EventEmitter<any> = new EventEmitter();
  @Output() onMouseEnter: EventEmitter<any> = new EventEmitter();
  @Output() onMouseLeave: EventEmitter<any> = new EventEmitter();
  @Output() onKeyDown: EventEmitter<any> = new EventEmitter();
  @Output() onKeyPress: EventEmitter<any> = new EventEmitter();
  @Output() onKeyUp: EventEmitter<any> = new EventEmitter();
  @Output() onContextMenu: EventEmitter<any> = new EventEmitter();
  @Output() onPaste: EventEmitter<any> = new EventEmitter();
  // 	Core
  @Output() onInit: EventEmitter<any> = new EventEmitter();
  @Output() onFocus: EventEmitter<any> = new EventEmitter();
  @Output() onBlur: EventEmitter<any> = new EventEmitter();
  @Output() onBeforeSetContent: EventEmitter<any> = new EventEmitter();
  @Output() onSetContent: EventEmitter<any> = new EventEmitter();
  @Output() onGetContent: EventEmitter<any> = new EventEmitter();
  @Output() onPreProcess: EventEmitter<any> = new EventEmitter();
  @Output() onPostProcess: EventEmitter<any> = new EventEmitter();
  @Output() onNodeChange: EventEmitter<any> = new EventEmitter();
  @Output() onUndo: EventEmitter<any> = new EventEmitter();
  @Output() onRedo: EventEmitter<any> = new EventEmitter();
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Output() onDirty: EventEmitter<any> = new EventEmitter();
  @Output() onRemove: EventEmitter<any> = new EventEmitter();
  @Output() onExecCommand: EventEmitter<any> = new EventEmitter();

  //	Paste Plugin
  @Output() onPastePreProcess: EventEmitter<any> = new EventEmitter();
  @Output() onPastePostProcess: EventEmitter<any> = new EventEmitter();

  registerEvents(editor: any) {
    // native
    editor.on("Click", e => {
      this.onClick.emit(e);
    });
    editor.on("DblClick", e => {
      this.onDblClick.emit(e);
    });
    editor.on("MouseDown", e => {
      this.onMouseDown.emit(e);
    });
    editor.on("MouseUp", e => {
      this.onMouseUp.emit(e);
    });
    editor.on("MouseMove", e => {
      this.onMouseMove.emit(e);
    });
    editor.on("MouseOver", e => {
      this.onMouseOver.emit(e);
    });
    editor.on("MouseOut", e => {
      this.onMouseOut.emit(e);
    });
    editor.on("MouseEnter", e => {
      this.onMouseEnter.emit(e);
    });
    editor.on("MouseLeave", e => {
      this.onMouseLeave.emit(e);
    });
    editor.on("KeyDown", e => {
      this.onKeyDown.emit(e);
    });
    editor.on("KeyPress", e => {
      this.onKeyPress.emit(e);
    });
    editor.on("KeyUp", e => {
      this.onKeyUp.emit(e);
    });
    editor.on("ContextMenu", e => {
      this.onContextMenu.emit(e);
    });
    editor.on("Paste", e => {
      this.onPaste.emit(e);
    });

    // 	core
    editor.on("Init", e => {
      this.onInit.emit(e);
    });
    editor.on("Focus", e => {
      this.onFocus.emit(e);
    });
    editor.on("Blur", e => {
      this.onBlur.emit(e);
    });
    editor.on("BeforeSetContent", e => {
      this.onBeforeSetContent.emit(e);
    });
    editor.on("SetContent", e => {
      this.onSetContent.emit(e);
    });
    editor.on("GetContent", e => {
      this.onGetContent.emit(e);
    });
    editor.on("PreProcess", e => {
      this.onPreProcess.emit(e);
    });
    editor.on("PostProcess", e => {
      this.onPostProcess.emit(e);
    });
    editor.on("NodeChange", e => {
      this.onNodeChange.emit(e);
    });
    editor.on("Undo", e => {
      this.onUndo.emit(e);
    });
    editor.on("Redo", e => {
      this.onRedo.emit(e);
    });
    editor.on("Change", e => {
      this.onChange.emit(e);
    });
    editor.on("Dirty", e => {
      this.onDirty.emit(e);
    });
    editor.on("Remove", e => {
      this.onRemove.emit(e);
    });
    editor.on("ExecCommand", e => {
      this.onExecCommand.emit(e);
    });

    //	paste
    editor.on("PastePreProcess", e => {
      this.onPastePreProcess.emit(e);
    });
    editor.on("PastePostProcess", e => {
      this.onPastePostProcess.emit(e);
    });
  }
}
