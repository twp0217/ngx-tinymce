# ngx-tinymce

## 简介
基于angular(v2+)的tinymce组件

## 使用
- 安装依赖包：`tinymce` 和 `@twp0217/ngx-tinymce`

```javascript
npm install tinymce @twp0217/ngx-tinymce --save
```

- 在module导入`NgxTinymceModule`

```javascript
import { NgxTinymceModule } from "@twp0217/ngx-tinymce";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    NgxTinymceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

- 在模板页面使用

```html
<ngx-tinymce [(ngModel)]="html"></ngx-tinymce>
```

### system.js 配置
在 `map` 中添加以下配置

```javascript
map: {
  'ngx-tinymce': 'npm:ngx-tinymce/bundles/ngx-tinymce.umd.min.js'
}
```

# 文档

## 属性(Attributes)
名称 | 类型 | 默认值 | 说明
---|---|---|---
options | TinymceOptions | { skin_url = "assets/tinymce/skins/lightgray"; } | 配置项

## [事件(Events)](https://www.tiny.cloud/docs/advanced/events/)

### Native
```javascript
onClick
onDblClick
onMouseDown
onMouseUp
onMouseMove
onMouseOver
onMouseOut
onMouseEnter
onMouseLeave
onKeyDown
onKeyPress
onKeyUp
onContextMenu
onPaste
```

### Core
```javascript
onInit
onFocus
onBlur
onBeforeSetContent
onSetContent
onGetContent
onPreProcess
onPostProcess
onNodeChange
onUndo
onRedo
onChange
onDirty
onRemove
onExecCommand
```

### Paste Plugin
```javascript
onPastePreProcess
onPastePostProcess
```

# 支持

- 如果项目对你有帮助，请点颗星:star:，谢谢。
- 如果你对项目有想法、问题、BUG，欢迎讨论。