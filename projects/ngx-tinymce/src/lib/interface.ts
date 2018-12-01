export interface TinymceOptions {
  // Integration and Setup
  auto_focus?: string | boolean;
  cache_suffix?: string;
  content_security_policy?: string;
  external_plugins?: any;
  hidden_input?: boolean;
  init_instance_callback?: any;
  plugins?: string | string[];
  selector?: string;
  setup?: any;
  target?: any;

  // Editor Appearance
  branding?: boolean;
  color_picker_callback?: any;
  custom_ui_selector?: string;
  elementpath?: boolean;
  event_root?: string;
  fixed_toolbar_container?: string;
  height?: number;
  inline?: boolean;
  insert_button_items?: string;
  insert_toolbar?: string;
  max_height?: number;
  max_width?: number;
  menu?: any;
  menubar?: string | boolean;
  min_height?: number;
  min_width?: number;
  mobile?: any;
  preview_styles?: boolean | string;
  removed_menuitems?: string;
  resize?: boolean | string;
  selection_toolbar?: string;
  skin_url?: string;
  skin?: string;
  statusbar?: boolean;
  theme_url?: string;
  theme?: string;
  toolbar?: string | boolean | string[];
  width?: number;

  // Content Appearance
  body_class?: string;
  body_id?: string;
  content_css?: string | string[];
  content_css_cors?: boolean;
  content_style?: string;
  inline_boundaries?: boolean;
  inline_boundaries_selector?: string;
  visual_anchor_class?: string;
  visual_table_class?: string;
  visual?: boolean;

  // Content Filtering
  allow_conditional_comments?: boolean;
  allow_html_in_named_anchor?: boolean;
  allow_unsafe_link_target?: boolean;
  convert_fonts_to_spans?: boolean;
  custom_elements?: string;
  doctype?: any;
  element_format?: string;
  encoding?: string;
  entities?: string;
  entity_encoding?: string;
  extended_valid_elements?: string;
  fix_list_elements?: boolean;
  force_hex_style_colors?: boolean;
  forced_root_block?: string;
  forced_root_block_attrs?: any;
  invalid_elements?: string;
  invalid_styles?: string | any;
  keep_styles?: boolean;
  protect?: any[];
  remove_trailing_brs?: boolean;
  schema?: string;
  valid_children?: string;
  valid_classes?: string | any;
  valid_elements?: string;
  valid_styles?: any;

  // Content Formatting
  block_formats?: string;
  font_formats?: string;
  fontsize_formats?: string;
  formats?: any;
  indentation?: string;
  indent_use_margin?: boolean;
  style_formats?: any[];
  style_formats_autohide?: boolean;
  style_formats_merge?: boolean;

  // Spelling
  browser_spellcheck?: boolean;
  gecko_spellcheck?: boolean;

  // File & Image Upload
  automatic_uploads?: boolean;
  file_browser_callback?: any;
  file_browser_callback_types?: string;
  file_picker_callback?: any;
  file_picker_types?: string;
  images_dataimg_filter?: any;
  images_reuse_filename?: boolean;
  images_upload_base_path?: string;
  images_upload_credentials?: boolean;
  images_upload_handler?: any;
  images_upload_url?: string;

  // Localization
  directionality?: string;
  language?: string;
  language_url?: string;

  // URL Handling
  allow_script_urls?: boolean;
  convert_urls?: boolean;
  document_base_url?: string;
  relative_urls?: boolean;
  remove_script_host?: boolean;
  urlconverter_callback?: any;
  anchor_bottom?: string;
  anchor_top?: string;

  // Advanced Editing Behaviors
  br_in_pre?: boolean;
  custom_undo_redo_levels?: number;
  end_container_on_empty_block?: boolean;
  nowrap?: boolean;
  object_resizing?: boolean | string;
  typeahead_urls?: boolean;

  // extend
  [key: string]: any;
}
