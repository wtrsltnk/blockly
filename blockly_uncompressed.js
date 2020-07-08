// Do not edit this file; automatically generated by gulp.
'use strict';

this.IS_NODE_JS = !!(typeof module !== 'undefined' && module.exports);

this.BLOCKLY_DIR = (function(root) {
  if (!root.IS_NODE_JS) {
    // Find name of current directory.
    var scripts = document.getElementsByTagName('script');
    var re = new RegExp('(.+)[\/]blockly_(.*)uncompressed\.js$');
    for (var i = 0, script; script = scripts[i]; i++) {
      var match = re.exec(script.src);
      if (match) {
        return match[1];
      }
    }
    alert('Could not detect Blockly\'s directory name.');
  }
  return '';
})(this);

this.BLOCKLY_BOOT = function(root) {
  // Execute after Closure has loaded.
goog.addDependency('../../core/block.js', ['Blockly.Block'], ['Blockly.ASTNode', 'Blockly.Blocks', 'Blockly.Connection', 'Blockly.Events', 'Blockly.Events.BlockChange', 'Blockly.Events.BlockCreate', 'Blockly.Events.BlockDelete', 'Blockly.Events.BlockMove', 'Blockly.Extensions', 'Blockly.Input', 'Blockly.Workspace', 'Blockly.fieldRegistry', 'Blockly.navigation', 'Blockly.utils', 'Blockly.utils.Coordinate', 'Blockly.utils.object', 'Blockly.utils.string'], {'lang': 'es5'});
goog.addDependency('../../core/block_animations.js', ['Blockly.blockAnimations'], ['Blockly.utils.dom'], {});
goog.addDependency('../../core/block_drag_surface.js', ['Blockly.BlockDragSurfaceSvg'], ['Blockly.utils', 'Blockly.utils.Coordinate', 'Blockly.utils.dom'], {});
goog.addDependency('../../core/block_dragger.js', ['Blockly.BlockDragger'], ['Blockly.Events', 'Blockly.Events.BlockMove', 'Blockly.Events.Ui', 'Blockly.InsertionMarkerManager', 'Blockly.blockAnimations', 'Blockly.utils.Coordinate', 'Blockly.utils.dom'], {});
goog.addDependency('../../core/block_events.js', ['Blockly.Events.BlockBase', 'Blockly.Events.BlockChange', 'Blockly.Events.BlockCreate', 'Blockly.Events.BlockDelete', 'Blockly.Events.BlockMove', 'Blockly.Events.Change', 'Blockly.Events.Create', 'Blockly.Events.Delete', 'Blockly.Events.Move'], ['Blockly.Events', 'Blockly.Events.Abstract', 'Blockly.utils.Coordinate', 'Blockly.utils.object', 'Blockly.utils.xml'], {});
goog.addDependency('../../core/block_svg.js', ['Blockly.BlockSvg'], ['Blockly.ASTNode', 'Blockly.Block', 'Blockly.ContextMenu', 'Blockly.Events', 'Blockly.Events.BlockMove', 'Blockly.Events.Ui', 'Blockly.Msg', 'Blockly.RenderedConnection', 'Blockly.TabNavigateCursor', 'Blockly.Tooltip', 'Blockly.Touch', 'Blockly.blockAnimations', 'Blockly.blockRendering.IPathObject', 'Blockly.navigation', 'Blockly.utils', 'Blockly.utils.Coordinate', 'Blockly.utils.Rect', 'Blockly.utils.dom', 'Blockly.utils.object'], {});
goog.addDependency('../../core/blockly.js', ['Blockly'], ['Blockly.Events', 'Blockly.Events.Ui', 'Blockly.Procedures', 'Blockly.StaticTyping', 'Blockly.Tooltip', 'Blockly.Touch', 'Blockly.Variables', 'Blockly.WidgetDiv', 'Blockly.WorkspaceSvg', 'Blockly.Xml', 'Blockly.constants', 'Blockly.inject', 'Blockly.navigation', 'Blockly.utils', 'Blockly.utils.Size', 'Blockly.utils.colour'], {});
goog.addDependency('../../core/blocks.js', ['Blockly.Blocks'], [], {});
goog.addDependency('../../core/bubble.js', ['Blockly.Bubble'], ['Blockly.Scrollbar', 'Blockly.Touch', 'Blockly.Workspace', 'Blockly.utils', 'Blockly.utils.Coordinate', 'Blockly.utils.dom', 'Blockly.utils.math', 'Blockly.utils.userAgent'], {});
goog.addDependency('../../core/bubble_dragger.js', ['Blockly.BubbleDragger'], ['Blockly.Bubble', 'Blockly.Events', 'Blockly.Events.CommentMove', 'Blockly.utils', 'Blockly.utils.Coordinate'], {});
goog.addDependency('../../core/comment.js', ['Blockly.Comment'], ['Blockly.Bubble', 'Blockly.Css', 'Blockly.Events', 'Blockly.Events.BlockChange', 'Blockly.Events.Ui', 'Blockly.Icon', 'Blockly.Warning', 'Blockly.utils.dom', 'Blockly.utils.object', 'Blockly.utils.userAgent'], {});
goog.addDependency('../../core/components/component.js', ['Blockly.Component', 'Blockly.Component.Error'], ['Blockly.utils.IdGenerator', 'Blockly.utils.dom', 'Blockly.utils.style'], {});
goog.addDependency('../../core/components/tree/basenode.js', ['Blockly.tree.BaseNode'], ['Blockly.Component', 'Blockly.utils.KeyCodes', 'Blockly.utils.aria', 'Blockly.utils.object', 'Blockly.utils.style'], {});
goog.addDependency('../../core/components/tree/treecontrol.js', ['Blockly.tree.TreeControl'], ['Blockly.tree.BaseNode', 'Blockly.tree.TreeNode', 'Blockly.utils.aria', 'Blockly.utils.object', 'Blockly.utils.style'], {});
goog.addDependency('../../core/components/tree/treenode.js', ['Blockly.tree.TreeNode'], ['Blockly.tree.BaseNode', 'Blockly.utils.KeyCodes', 'Blockly.utils.object'], {});
goog.addDependency('../../core/connection.js', ['Blockly.Connection'], ['Blockly.Events', 'Blockly.Events.BlockMove', 'Blockly.Xml'], {});
goog.addDependency('../../core/connection_db.js', ['Blockly.ConnectionDB'], ['Blockly.RenderedConnection'], {});
goog.addDependency('../../core/constants.js', ['Blockly.constants'], [], {});
goog.addDependency('../../core/contextmenu.js', ['Blockly.ContextMenu'], ['Blockly.Events', 'Blockly.Events.BlockCreate', 'Blockly.Menu', 'Blockly.MenuItem', 'Blockly.Msg', 'Blockly.Xml', 'Blockly.utils', 'Blockly.utils.Coordinate', 'Blockly.utils.Rect', 'Blockly.utils.dom', 'Blockly.utils.userAgent'], {});
goog.addDependency('../../core/css.js', ['Blockly.Css'], [], {'lang': 'es5'});
goog.addDependency('../../core/dropdowndiv.js', ['Blockly.DropDownDiv'], ['Blockly.utils.dom', 'Blockly.utils.math', 'Blockly.utils.style'], {});
goog.addDependency('../../core/events.js', ['Blockly.Events'], ['Blockly.utils'], {});
goog.addDependency('../../core/events_abstract.js', ['Blockly.Events.Abstract'], ['Blockly.Events'], {});
goog.addDependency('../../core/extensions.js', ['Blockly.Extensions'], ['Blockly.utils'], {});
goog.addDependency('../../core/field.js', ['Blockly.Field'], ['Blockly.Events', 'Blockly.Events.BlockChange', 'Blockly.Gesture', 'Blockly.utils', 'Blockly.utils.Rect', 'Blockly.utils.Size', 'Blockly.utils.dom', 'Blockly.utils.style', 'Blockly.utils.userAgent'], {'lang': 'es5'});
goog.addDependency('../../core/field_angle.js', ['Blockly.FieldAngle'], ['Blockly.Css', 'Blockly.DropDownDiv', 'Blockly.FieldTextInput', 'Blockly.fieldRegistry', 'Blockly.utils.dom', 'Blockly.utils.math', 'Blockly.utils.object', 'Blockly.utils.userAgent'], {});
goog.addDependency('../../core/field_checkbox.js', ['Blockly.FieldCheckbox'], ['Blockly.Events', 'Blockly.Events.BlockChange', 'Blockly.Field', 'Blockly.fieldRegistry', 'Blockly.utils.Size', 'Blockly.utils.dom', 'Blockly.utils.object'], {});
goog.addDependency('../../core/field_colour.js', ['Blockly.FieldColour'], ['Blockly.Css', 'Blockly.DropDownDiv', 'Blockly.Events', 'Blockly.Events.BlockChange', 'Blockly.Field', 'Blockly.fieldRegistry', 'Blockly.navigation', 'Blockly.utils.IdGenerator', 'Blockly.utils.KeyCodes', 'Blockly.utils.Size', 'Blockly.utils.aria', 'Blockly.utils.colour', 'Blockly.utils.dom', 'Blockly.utils.object'], {});
goog.addDependency('../../core/field_dropdown.js', ['Blockly.FieldDropdown'], ['Blockly.Events', 'Blockly.Events.BlockChange', 'Blockly.Field', 'Blockly.Menu', 'Blockly.MenuItem', 'Blockly.fieldRegistry', 'Blockly.navigation', 'Blockly.utils', 'Blockly.utils.Coordinate', 'Blockly.utils.Size', 'Blockly.utils.aria', 'Blockly.utils.dom', 'Blockly.utils.object', 'Blockly.utils.string', 'Blockly.utils.userAgent'], {});
goog.addDependency('../../core/field_image.js', ['Blockly.FieldImage'], ['Blockly.Field', 'Blockly.fieldRegistry', 'Blockly.utils', 'Blockly.utils.Size', 'Blockly.utils.dom', 'Blockly.utils.object'], {});
goog.addDependency('../../core/field_label.js', ['Blockly.FieldLabel'], ['Blockly.Field', 'Blockly.fieldRegistry', 'Blockly.utils', 'Blockly.utils.Size', 'Blockly.utils.dom', 'Blockly.utils.object'], {});
goog.addDependency('../../core/field_label_serializable.js', ['Blockly.FieldLabelSerializable'], ['Blockly.FieldLabel', 'Blockly.fieldRegistry', 'Blockly.utils', 'Blockly.utils.object'], {});
goog.addDependency('../../core/field_multilineinput.js', ['Blockly.FieldMultilineInput'], ['Blockly.Css', 'Blockly.DropDownDiv', 'Blockly.FieldTextInput', 'Blockly.utils', 'Blockly.utils.Coordinate', 'Blockly.utils.KeyCodes', 'Blockly.utils.aria', 'Blockly.utils.dom', 'Blockly.utils.object', 'Blockly.utils.userAgent'], {'lang': 'es5'});
goog.addDependency('../../core/field_number.js', ['Blockly.FieldNumber'], ['Blockly.FieldTextInput', 'Blockly.fieldRegistry', 'Blockly.utils.aria', 'Blockly.utils.object'], {});
goog.addDependency('../../core/field_registry.js', ['Blockly.fieldRegistry'], ['Blockly.registry'], {});
goog.addDependency('../../core/field_textinput.js', ['Blockly.FieldTextInput'], ['Blockly.Events', 'Blockly.Events.BlockChange', 'Blockly.Field', 'Blockly.Msg', 'Blockly.fieldRegistry', 'Blockly.utils', 'Blockly.utils.Coordinate', 'Blockly.utils.KeyCodes', 'Blockly.utils.Size', 'Blockly.utils.aria', 'Blockly.utils.dom', 'Blockly.utils.object', 'Blockly.utils.userAgent'], {});
goog.addDependency('../../core/field_variable.js', ['Blockly.FieldVariable'], ['Blockly.Events', 'Blockly.Events.BlockChange', 'Blockly.FieldDropdown', 'Blockly.Msg', 'Blockly.VariableModel', 'Blockly.Variables', 'Blockly.Xml', 'Blockly.fieldRegistry', 'Blockly.utils', 'Blockly.utils.Size', 'Blockly.utils.object'], {});
goog.addDependency('../../core/flyout_base.js', ['Blockly.Flyout'], ['Blockly.Block', 'Blockly.Events', 'Blockly.Events.BlockCreate', 'Blockly.Events.VarCreate', 'Blockly.FlyoutCursor', 'Blockly.Gesture', 'Blockly.Marker', 'Blockly.Scrollbar', 'Blockly.Tooltip', 'Blockly.Touch', 'Blockly.WorkspaceSvg', 'Blockly.Xml', 'Blockly.blockRendering', 'Blockly.utils', 'Blockly.utils.Coordinate', 'Blockly.utils.dom'], {});
goog.addDependency('../../core/flyout_button.js', ['Blockly.FlyoutButton'], ['Blockly.Css', 'Blockly.utils', 'Blockly.utils.Coordinate', 'Blockly.utils.dom'], {'lang': 'es5'});
goog.addDependency('../../core/flyout_dragger.js', ['Blockly.FlyoutDragger'], ['Blockly.WorkspaceDragger', 'Blockly.utils.object'], {});
goog.addDependency('../../core/flyout_horizontal.js', ['Blockly.HorizontalFlyout'], ['Blockly.Block', 'Blockly.Flyout', 'Blockly.Scrollbar', 'Blockly.WidgetDiv', 'Blockly.utils', 'Blockly.utils.Rect', 'Blockly.utils.object'], {});
goog.addDependency('../../core/flyout_vertical.js', ['Blockly.VerticalFlyout'], ['Blockly.Block', 'Blockly.Flyout', 'Blockly.Scrollbar', 'Blockly.WidgetDiv', 'Blockly.utils', 'Blockly.utils.Rect', 'Blockly.utils.object', 'Blockly.utils.userAgent'], {});
goog.addDependency('../../core/generator.js', ['Blockly.Generator'], ['Blockly.Block'], {});
goog.addDependency('../../core/gesture.js', ['Blockly.Gesture'], ['Blockly.ASTNode', 'Blockly.BlockDragger', 'Blockly.BubbleDragger', 'Blockly.Events', 'Blockly.Events.Ui', 'Blockly.FlyoutDragger', 'Blockly.Tooltip', 'Blockly.Touch', 'Blockly.WorkspaceDragger', 'Blockly.blockAnimations', 'Blockly.constants', 'Blockly.navigation', 'Blockly.utils', 'Blockly.utils.Coordinate'], {});
goog.addDependency('../../core/grid.js', ['Blockly.Grid'], ['Blockly.utils.dom', 'Blockly.utils.userAgent'], {});
goog.addDependency('../../core/icon.js', ['Blockly.Icon'], ['Blockly.utils', 'Blockly.utils.Coordinate', 'Blockly.utils.Size', 'Blockly.utils.dom'], {});
goog.addDependency('../../core/inject.js', ['Blockly.inject'], ['Blockly.BlockDragSurfaceSvg', 'Blockly.Component', 'Blockly.Css', 'Blockly.DropDownDiv', 'Blockly.Events', 'Blockly.Grid', 'Blockly.Msg', 'Blockly.Options', 'Blockly.ScrollbarPair', 'Blockly.Tooltip', 'Blockly.WorkspaceDragSurfaceSvg', 'Blockly.WorkspaceSvg', 'Blockly.user.keyMap', 'Blockly.utils', 'Blockly.utils.dom', 'Blockly.utils.userAgent'], {});
goog.addDependency('../../core/input.js', ['Blockly.Input'], ['Blockly.Connection', 'Blockly.FieldLabel'], {});
goog.addDependency('../../core/insertion_marker_manager.js', ['Blockly.InsertionMarkerManager'], ['Blockly.Events', 'Blockly.blockAnimations'], {'lang': 'es5'});
goog.addDependency('../../core/interfaces/i_accessibility.js', ['Blockly.IASTNodeLocation', 'Blockly.IASTNodeLocationSvg', 'Blockly.IASTNodeLocationWithBlock', 'Blockly.IBlocklyActionable'], [], {});
goog.addDependency('../../core/interfaces/i_bounded_element.js', ['Blockly.IBoundedElement'], [], {});
goog.addDependency('../../core/interfaces/i_copyable.js', ['Blockly.ICopyable'], [], {});
goog.addDependency('../../core/interfaces/i_deletable.js', ['Blockly.IDeletable'], [], {});
goog.addDependency('../../core/interfaces/i_deletearea.js', ['Blockly.IDeleteArea'], [], {});
goog.addDependency('../../core/interfaces/i_movable.js', ['Blockly.IMovable'], [], {});
goog.addDependency('../../core/interfaces/i_registrable.js', ['Blockly.IRegistrable'], [], {});
goog.addDependency('../../core/interfaces/i_selectable.js', ['Blockly.ISelectable'], [], {});
goog.addDependency('../../core/interfaces/i_styleable.js', ['Blockly.IStyleable'], [], {});
goog.addDependency('../../core/interfaces/i_toolbox.js', ['Blockly.IToolbox'], [], {});
goog.addDependency('../../core/keyboard_nav/action.js', ['Blockly.Action'], [], {});
goog.addDependency('../../core/keyboard_nav/ast_node.js', ['Blockly.ASTNode'], ['Blockly.utils.Coordinate'], {'lang': 'es5'});
goog.addDependency('../../core/keyboard_nav/basic_cursor.js', ['Blockly.BasicCursor'], ['Blockly.ASTNode', 'Blockly.Cursor'], {'lang': 'es5'});
goog.addDependency('../../core/keyboard_nav/cursor.js', ['Blockly.Cursor'], ['Blockly.ASTNode', 'Blockly.Action', 'Blockly.Marker', 'Blockly.navigation', 'Blockly.utils.object'], {'lang': 'es5'});
goog.addDependency('../../core/keyboard_nav/flyout_cursor.js', ['Blockly.FlyoutCursor'], ['Blockly.Cursor', 'Blockly.navigation', 'Blockly.utils.object'], {'lang': 'es5'});
goog.addDependency('../../core/keyboard_nav/key_map.js', ['Blockly.user.keyMap'], ['Blockly.utils.KeyCodes', 'Blockly.utils.object'], {});
goog.addDependency('../../core/keyboard_nav/marker.js', ['Blockly.Marker'], ['Blockly.ASTNode', 'Blockly.navigation'], {});
goog.addDependency('../../core/keyboard_nav/navigation.js', ['Blockly.navigation'], ['Blockly.ASTNode', 'Blockly.Action', 'Blockly.user.keyMap', 'Blockly.utils.Coordinate'], {});
goog.addDependency('../../core/keyboard_nav/tab_navigate_cursor.js', ['Blockly.TabNavigateCursor'], ['Blockly.ASTNode', 'Blockly.BasicCursor', 'Blockly.utils.object'], {});
goog.addDependency('../../core/marker_manager.js', ['Blockly.MarkerManager'], ['Blockly.Cursor', 'Blockly.Marker'], {});
goog.addDependency('../../core/menu.js', ['Blockly.Menu'], ['Blockly.utils.Coordinate', 'Blockly.utils.KeyCodes', 'Blockly.utils.aria', 'Blockly.utils.dom', 'Blockly.utils.style'], {});
goog.addDependency('../../core/menuitem.js', ['Blockly.MenuItem'], ['Blockly.utils.IdGenerator', 'Blockly.utils.aria', 'Blockly.utils.dom'], {});
goog.addDependency('../../core/msg.js', ['Blockly.Msg'], ['Blockly.utils.global'], {});
goog.addDependency('../../core/mutator.js', ['Blockly.Mutator'], ['Blockly.Bubble', 'Blockly.Events', 'Blockly.Events.BlockChange', 'Blockly.Events.Ui', 'Blockly.Icon', 'Blockly.WorkspaceSvg', 'Blockly.Xml', 'Blockly.navigation', 'Blockly.utils', 'Blockly.utils.dom', 'Blockly.utils.global', 'Blockly.utils.object', 'Blockly.utils.xml'], {});
goog.addDependency('../../core/names.js', ['Blockly.Names'], ['Blockly.Msg'], {});
goog.addDependency('../../core/options.js', ['Blockly.Options'], ['Blockly.Theme', 'Blockly.Themes.Classic', 'Blockly.Xml', 'Blockly.registry', 'Blockly.user.keyMap', 'Blockly.utils.IdGenerator', 'Blockly.utils.Metrics', 'Blockly.utils.toolbox', 'Blockly.utils.userAgent'], {});
goog.addDependency('../../core/procedures.js', ['Blockly.Procedures'], ['Blockly.Blocks', 'Blockly.Events', 'Blockly.Events.BlockChange', 'Blockly.Field', 'Blockly.Msg', 'Blockly.Names', 'Blockly.Workspace', 'Blockly.Xml', 'Blockly.constants', 'Blockly.utils.xml'], {});
goog.addDependency('../../core/registry.js', ['Blockly.registry'], [], {});
goog.addDependency('../../core/rendered_connection.js', ['Blockly.RenderedConnection'], ['Blockly.Connection', 'Blockly.Events', 'Blockly.utils', 'Blockly.utils.Coordinate', 'Blockly.utils.dom', 'Blockly.utils.object'], {});
goog.addDependency('../../core/renderers/common/block_rendering.js', ['Blockly.blockRendering'], ['Blockly.registry', 'Blockly.utils.object'], {});
goog.addDependency('../../core/renderers/common/constants.js', ['Blockly.blockRendering.ConstantProvider'], ['Blockly.utils', 'Blockly.utils.colour', 'Blockly.utils.dom', 'Blockly.utils.svgPaths', 'Blockly.utils.userAgent'], {'lang': 'es5'});
goog.addDependency('../../core/renderers/common/debugger.js', ['Blockly.blockRendering.Debug'], ['Blockly.blockRendering.BottomRow', 'Blockly.blockRendering.InputRow', 'Blockly.blockRendering.Measurable', 'Blockly.blockRendering.RenderInfo', 'Blockly.blockRendering.Row', 'Blockly.blockRendering.SpacerRow', 'Blockly.blockRendering.TopRow', 'Blockly.blockRendering.Types'], {'lang': 'es5'});
goog.addDependency('../../core/renderers/common/drawer.js', ['Blockly.blockRendering.Drawer'], ['Blockly.blockRendering.BottomRow', 'Blockly.blockRendering.InputRow', 'Blockly.blockRendering.Measurable', 'Blockly.blockRendering.RenderInfo', 'Blockly.blockRendering.Row', 'Blockly.blockRendering.SpacerRow', 'Blockly.blockRendering.TopRow', 'Blockly.blockRendering.Types', 'Blockly.utils.svgPaths'], {});
goog.addDependency('../../core/renderers/common/i_path_object.js', ['Blockly.blockRendering.IPathObject'], [], {});
goog.addDependency('../../core/renderers/common/info.js', ['Blockly.blockRendering.RenderInfo'], ['Blockly.blockRendering.BottomRow', 'Blockly.blockRendering.ExternalValueInput', 'Blockly.blockRendering.Hat', 'Blockly.blockRendering.InRowSpacer', 'Blockly.blockRendering.InlineInput', 'Blockly.blockRendering.InputRow', 'Blockly.blockRendering.Measurable', 'Blockly.blockRendering.NextConnection', 'Blockly.blockRendering.OutputConnection', 'Blockly.blockRendering.PreviousConnection', 'Blockly.blockRendering.RoundCorner', 'Blockly.blockRendering.Row', 'Blockly.blockRendering.SpacerRow', 'Blockly.blockRendering.SquareCorner', 'Blockly.blockRendering.StatementInput', 'Blockly.blockRendering.TopRow', 'Blockly.blockRendering.Types'], {});
goog.addDependency('../../core/renderers/common/marker_svg.js', ['Blockly.blockRendering.MarkerSvg'], ['Blockly.ASTNode'], {});
goog.addDependency('../../core/renderers/common/path_object.js', ['Blockly.blockRendering.PathObject'], ['Blockly.Theme', 'Blockly.blockRendering.ConstantProvider', 'Blockly.blockRendering.IPathObject', 'Blockly.utils.dom'], {});
goog.addDependency('../../core/renderers/common/renderer.js', ['Blockly.blockRendering.Renderer'], ['Blockly.InsertionMarkerManager', 'Blockly.blockRendering.ConstantProvider', 'Blockly.blockRendering.Drawer', 'Blockly.blockRendering.IPathObject', 'Blockly.blockRendering.MarkerSvg', 'Blockly.blockRendering.PathObject', 'Blockly.blockRendering.RenderInfo'], {});
goog.addDependency('../../core/renderers/geras/constants.js', ['Blockly.geras.ConstantProvider'], ['Blockly.blockRendering.ConstantProvider', 'Blockly.utils.object'], {'lang': 'es5'});
goog.addDependency('../../core/renderers/geras/drawer.js', ['Blockly.geras.Drawer'], ['Blockly.blockRendering.ConstantProvider', 'Blockly.blockRendering.Drawer', 'Blockly.geras.Highlighter', 'Blockly.geras.RenderInfo', 'Blockly.utils.object', 'Blockly.utils.svgPaths'], {});
goog.addDependency('../../core/renderers/geras/highlight_constants.js', ['Blockly.geras.HighlightConstantProvider'], ['Blockly.blockRendering.ConstantProvider', 'Blockly.utils.svgPaths'], {'lang': 'es5'});
goog.addDependency('../../core/renderers/geras/highlighter.js', ['Blockly.geras.Highlighter'], ['Blockly.blockRendering.BottomRow', 'Blockly.blockRendering.InputRow', 'Blockly.blockRendering.Measurable', 'Blockly.blockRendering.RenderInfo', 'Blockly.blockRendering.Row', 'Blockly.blockRendering.SpacerRow', 'Blockly.blockRendering.TopRow', 'Blockly.blockRendering.Types', 'Blockly.utils.svgPaths'], {});
goog.addDependency('../../core/renderers/geras/info.js', ['Blockly.geras', 'Blockly.geras.RenderInfo'], ['Blockly.blockRendering.BottomRow', 'Blockly.blockRendering.BottomRow', 'Blockly.blockRendering.ExternalValueInput', 'Blockly.blockRendering.InputRow', 'Blockly.blockRendering.InputRow', 'Blockly.blockRendering.Measurable', 'Blockly.blockRendering.Measurable', 'Blockly.blockRendering.NextConnection', 'Blockly.blockRendering.NextConnection', 'Blockly.blockRendering.OutputConnection', 'Blockly.blockRendering.OutputConnection', 'Blockly.blockRendering.PreviousConnection', 'Blockly.blockRendering.PreviousConnection', 'Blockly.blockRendering.RenderInfo', 'Blockly.blockRendering.Types', 'Blockly.geras.InlineInput', 'Blockly.geras.StatementInput', 'Blockly.utils.object'], {});
goog.addDependency('../../core/renderers/geras/measurables/inputs.js', ['Blockly.geras.InlineInput', 'Blockly.geras.StatementInput'], ['Blockly.utils.object'], {});
goog.addDependency('../../core/renderers/geras/path_object.js', ['Blockly.geras.PathObject'], ['Blockly.Theme', 'Blockly.blockRendering.PathObject', 'Blockly.geras.ConstantProvider', 'Blockly.utils.dom', 'Blockly.utils.object'], {});
goog.addDependency('../../core/renderers/geras/renderer.js', ['Blockly.geras.Renderer'], ['Blockly.blockRendering', 'Blockly.blockRendering.Renderer', 'Blockly.geras.ConstantProvider', 'Blockly.geras.Drawer', 'Blockly.geras.HighlightConstantProvider', 'Blockly.geras.PathObject', 'Blockly.geras.RenderInfo', 'Blockly.utils.object'], {});
goog.addDependency('../../core/renderers/measurables/base.js', ['Blockly.blockRendering.Measurable'], ['Blockly.blockRendering.Types'], {});
goog.addDependency('../../core/renderers/measurables/connections.js', ['Blockly.blockRendering.Connection', 'Blockly.blockRendering.NextConnection', 'Blockly.blockRendering.OutputConnection', 'Blockly.blockRendering.PreviousConnection'], ['Blockly.blockRendering.Measurable', 'Blockly.blockRendering.Types', 'Blockly.utils.object'], {});
goog.addDependency('../../core/renderers/measurables/inputs.js', ['Blockly.blockRendering.ExternalValueInput', 'Blockly.blockRendering.InlineInput', 'Blockly.blockRendering.InputConnection', 'Blockly.blockRendering.StatementInput'], ['Blockly.blockRendering.Connection', 'Blockly.blockRendering.Measurable', 'Blockly.blockRendering.Types', 'Blockly.utils.object'], {});
goog.addDependency('../../core/renderers/measurables/row_elements.js', ['Blockly.blockRendering.Field', 'Blockly.blockRendering.Hat', 'Blockly.blockRendering.Icon', 'Blockly.blockRendering.InRowSpacer', 'Blockly.blockRendering.JaggedEdge', 'Blockly.blockRendering.RoundCorner', 'Blockly.blockRendering.SquareCorner'], ['Blockly.blockRendering.Measurable', 'Blockly.blockRendering.Types', 'Blockly.utils.object'], {});
goog.addDependency('../../core/renderers/measurables/rows.js', ['Blockly.blockRendering.BottomRow', 'Blockly.blockRendering.InputRow', 'Blockly.blockRendering.Row', 'Blockly.blockRendering.SpacerRow', 'Blockly.blockRendering.TopRow'], ['Blockly.blockRendering.InRowSpacer', 'Blockly.blockRendering.InputConnection', 'Blockly.blockRendering.Measurable', 'Blockly.blockRendering.NextConnection', 'Blockly.blockRendering.PreviousConnection', 'Blockly.blockRendering.Types', 'Blockly.utils.object'], {});
goog.addDependency('../../core/renderers/measurables/types.js', ['Blockly.blockRendering.Types'], [], {});
goog.addDependency('../../core/renderers/minimalist/constants.js', ['Blockly.minimalist.ConstantProvider'], ['Blockly.blockRendering.ConstantProvider', 'Blockly.utils.object'], {});
goog.addDependency('../../core/renderers/minimalist/drawer.js', ['Blockly.minimalist.Drawer'], ['Blockly.blockRendering.Drawer', 'Blockly.minimalist.RenderInfo', 'Blockly.utils.object'], {});
goog.addDependency('../../core/renderers/minimalist/info.js', ['Blockly.minimalist', 'Blockly.minimalist.RenderInfo'], ['Blockly.utils.object'], {});
goog.addDependency('../../core/renderers/minimalist/renderer.js', ['Blockly.minimalist.Renderer'], ['Blockly.blockRendering', 'Blockly.blockRendering.Renderer', 'Blockly.minimalist.ConstantProvider', 'Blockly.minimalist.Drawer', 'Blockly.minimalist.RenderInfo', 'Blockly.utils.object'], {});
goog.addDependency('../../core/renderers/thrasos/info.js', ['Blockly.thrasos', 'Blockly.thrasos.RenderInfo'], ['Blockly.blockRendering.BottomRow', 'Blockly.blockRendering.ExternalValueInput', 'Blockly.blockRendering.InlineInput', 'Blockly.blockRendering.InputRow', 'Blockly.blockRendering.Measurable', 'Blockly.blockRendering.NextConnection', 'Blockly.blockRendering.OutputConnection', 'Blockly.blockRendering.PreviousConnection', 'Blockly.blockRendering.RenderInfo', 'Blockly.blockRendering.Row', 'Blockly.blockRendering.SpacerRow', 'Blockly.blockRendering.StatementInput', 'Blockly.blockRendering.TopRow', 'Blockly.blockRendering.Types', 'Blockly.utils.object'], {});
goog.addDependency('../../core/renderers/thrasos/renderer.js', ['Blockly.thrasos.Renderer'], ['Blockly.blockRendering', 'Blockly.blockRendering.Renderer', 'Blockly.thrasos.RenderInfo', 'Blockly.utils.object'], {});
goog.addDependency('../../core/renderers/zelos/constants.js', ['Blockly.zelos.ConstantProvider'], ['Blockly.blockRendering.ConstantProvider', 'Blockly.utils.dom', 'Blockly.utils.object', 'Blockly.utils.svgPaths'], {'lang': 'es5'});
goog.addDependency('../../core/renderers/zelos/drawer.js', ['Blockly.zelos.Drawer'], ['Blockly.blockRendering.ConstantProvider', 'Blockly.blockRendering.Drawer', 'Blockly.blockRendering.Types', 'Blockly.utils.object', 'Blockly.zelos.RenderInfo'], {});
goog.addDependency('../../core/renderers/zelos/info.js', ['Blockly.zelos', 'Blockly.zelos.RenderInfo'], ['Blockly.blockRendering.BottomRow', 'Blockly.blockRendering.ExternalValueInput', 'Blockly.blockRendering.InlineInput', 'Blockly.blockRendering.InputRow', 'Blockly.blockRendering.Measurable', 'Blockly.blockRendering.NextConnection', 'Blockly.blockRendering.OutputConnection', 'Blockly.blockRendering.PreviousConnection', 'Blockly.blockRendering.RenderInfo', 'Blockly.blockRendering.RoundCorner', 'Blockly.blockRendering.Row', 'Blockly.blockRendering.SpacerRow', 'Blockly.blockRendering.SquareCorner', 'Blockly.blockRendering.TopRow', 'Blockly.blockRendering.Types', 'Blockly.utils.object', 'Blockly.zelos.BottomRow', 'Blockly.zelos.RightConnectionShape', 'Blockly.zelos.StatementInput', 'Blockly.zelos.TopRow'], {});
goog.addDependency('../../core/renderers/zelos/marker_svg.js', ['Blockly.zelos.MarkerSvg'], ['Blockly.blockRendering.MarkerSvg'], {});
goog.addDependency('../../core/renderers/zelos/measurables/inputs.js', ['Blockly.zelos.StatementInput'], ['Blockly.blockRendering.StatementInput', 'Blockly.utils.object'], {});
goog.addDependency('../../core/renderers/zelos/measurables/row_elements.js', ['Blockly.zelos.RightConnectionShape'], ['Blockly.blockRendering.Measurable', 'Blockly.blockRendering.Types', 'Blockly.utils.object'], {});
goog.addDependency('../../core/renderers/zelos/measurables/rows.js', ['Blockly.zelos.BottomRow', 'Blockly.zelos.TopRow'], ['Blockly.blockRendering.BottomRow', 'Blockly.blockRendering.SpacerRow', 'Blockly.blockRendering.TopRow', 'Blockly.utils.object'], {});
goog.addDependency('../../core/renderers/zelos/path_object.js', ['Blockly.zelos.PathObject'], ['Blockly.blockRendering.PathObject', 'Blockly.utils.dom', 'Blockly.utils.object', 'Blockly.zelos.ConstantProvider'], {});
goog.addDependency('../../core/renderers/zelos/renderer.js', ['Blockly.zelos.Renderer'], ['Blockly.InsertionMarkerManager', 'Blockly.blockRendering', 'Blockly.blockRendering.Renderer', 'Blockly.utils.object', 'Blockly.zelos.ConstantProvider', 'Blockly.zelos.Drawer', 'Blockly.zelos.MarkerSvg', 'Blockly.zelos.PathObject', 'Blockly.zelos.RenderInfo'], {});
goog.addDependency('../../core/requires.js', ['Blockly.requires'], ['Blockly', 'Blockly.Comment', 'Blockly.FieldAngle', 'Blockly.FieldCheckbox', 'Blockly.FieldColour', 'Blockly.FieldDropdown', 'Blockly.FieldImage', 'Blockly.FieldLabelSerializable', 'Blockly.FieldMultilineInput', 'Blockly.FieldNumber', 'Blockly.FieldTextInput', 'Blockly.FieldVariable', 'Blockly.FlyoutButton', 'Blockly.Generator', 'Blockly.HorizontalFlyout', 'Blockly.Mutator', 'Blockly.Themes.Classic', 'Blockly.Themes.Dark', 'Blockly.Themes.Deuteranopia', 'Blockly.Themes.HighContrast', 'Blockly.Themes.Tritanopia', 'Blockly.Toolbox', 'Blockly.Trashcan', 'Blockly.VariablesDynamic', 'Blockly.VerticalFlyout', 'Blockly.Warning', 'Blockly.ZoomControls', 'Blockly.geras.Renderer', 'Blockly.thrasos.Renderer', 'Blockly.zelos.Renderer'], {});
goog.addDependency('../../core/scrollbar.js', ['Blockly.Scrollbar', 'Blockly.ScrollbarPair'], ['Blockly.Touch', 'Blockly.utils', 'Blockly.utils.Coordinate', 'Blockly.utils.Metrics', 'Blockly.utils.dom'], {});
goog.addDependency('../../core/static_typing.js', ['Blockly.StaticTyping'], ['Blockly.Block', 'Blockly.Type', 'Blockly.Types', 'Blockly.Workspace'], {});
goog.addDependency('../../core/theme.js', ['Blockly.Theme'], ['Blockly.registry', 'Blockly.utils', 'Blockly.utils.colour', 'Blockly.utils.object'], {});
goog.addDependency('../../core/theme/classic.js', ['Blockly.Themes.Classic'], ['Blockly.Theme'], {});
goog.addDependency('../../core/theme/dark.js', ['Blockly.Themes.Dark'], ['Blockly.Theme'], {});
goog.addDependency('../../core/theme/deuteranopia.js', ['Blockly.Themes.Deuteranopia'], ['Blockly.Theme'], {});
goog.addDependency('../../core/theme/highcontrast.js', ['Blockly.Themes.HighContrast'], ['Blockly.Theme'], {});
goog.addDependency('../../core/theme/modern.js', ['Blockly.Themes.Modern'], ['Blockly.Theme'], {});
goog.addDependency('../../core/theme/tritanopia.js', ['Blockly.Themes.Tritanopia'], ['Blockly.Theme'], {});
goog.addDependency('../../core/theme/zelos.js', ['Blockly.Themes.Zelos'], ['Blockly.Theme'], {});
goog.addDependency('../../core/theme_manager.js', ['Blockly.ThemeManager'], ['Blockly.Theme'], {});
goog.addDependency('../../core/toolbox.js', ['Blockly.Toolbox'], ['Blockly.Css', 'Blockly.Events', 'Blockly.Events.Ui', 'Blockly.Touch', 'Blockly.navigation', 'Blockly.registry', 'Blockly.tree.TreeControl', 'Blockly.tree.TreeNode', 'Blockly.utils', 'Blockly.utils.Rect', 'Blockly.utils.aria', 'Blockly.utils.colour', 'Blockly.utils.dom', 'Blockly.utils.object', 'Blockly.utils.toolbox'], {});
goog.addDependency('../../core/tooltip.js', ['Blockly.Tooltip'], ['Blockly.utils.string'], {});
goog.addDependency('../../core/touch.js', ['Blockly.Touch'], ['Blockly.utils', 'Blockly.utils.global', 'Blockly.utils.string'], {});
goog.addDependency('../../core/touch_gesture.js', ['Blockly.TouchGesture'], ['Blockly.Gesture', 'Blockly.utils', 'Blockly.utils.Coordinate', 'Blockly.utils.object'], {});
goog.addDependency('../../core/trashcan.js', ['Blockly.Trashcan'], ['Blockly.Scrollbar', 'Blockly.Xml', 'Blockly.utils.Rect', 'Blockly.utils.dom'], {});
goog.addDependency('../../core/type.js', ['Blockly.Type'], [], {});
goog.addDependency('../../core/types.js', ['Blockly.Types'], ['Blockly.Type'], {});
goog.addDependency('../../core/ui_events.js', ['Blockly.Events.Ui'], ['Blockly.Events', 'Blockly.Events.Abstract', 'Blockly.utils.object'], {});
goog.addDependency('../../core/utils.js', ['Blockly.utils'], ['Blockly.Msg', 'Blockly.constants', 'Blockly.utils.Coordinate', 'Blockly.utils.Rect', 'Blockly.utils.colour', 'Blockly.utils.global', 'Blockly.utils.string', 'Blockly.utils.style', 'Blockly.utils.userAgent'], {});
goog.addDependency('../../core/utils/aria.js', ['Blockly.utils.aria'], [], {});
goog.addDependency('../../core/utils/colour.js', ['Blockly.utils.colour'], [], {});
goog.addDependency('../../core/utils/coordinate.js', ['Blockly.utils.Coordinate'], [], {});
goog.addDependency('../../core/utils/dom.js', ['Blockly.utils.dom'], ['Blockly.utils.userAgent'], {});
goog.addDependency('../../core/utils/global.js', ['Blockly.utils.global'], [], {});
goog.addDependency('../../core/utils/idgenerator.js', ['Blockly.utils.IdGenerator'], [], {});
goog.addDependency('../../core/utils/keycodes.js', ['Blockly.utils.KeyCodes'], [], {});
goog.addDependency('../../core/utils/math.js', ['Blockly.utils.math'], [], {});
goog.addDependency('../../core/utils/metrics.js', ['Blockly.utils.Metrics'], [], {});
goog.addDependency('../../core/utils/object.js', ['Blockly.utils.object'], [], {});
goog.addDependency('../../core/utils/rect.js', ['Blockly.utils.Rect'], [], {});
goog.addDependency('../../core/utils/size.js', ['Blockly.utils.Size'], [], {});
goog.addDependency('../../core/utils/string.js', ['Blockly.utils.string'], [], {});
goog.addDependency('../../core/utils/style.js', ['Blockly.utils.style'], ['Blockly.utils.Coordinate', 'Blockly.utils.Size'], {});
goog.addDependency('../../core/utils/svg_paths.js', ['Blockly.utils.svgPaths'], [], {});
goog.addDependency('../../core/utils/toolbox.js', ['Blockly.utils.toolbox'], [], {});
goog.addDependency('../../core/utils/useragent.js', ['Blockly.utils.userAgent'], ['Blockly.utils.global'], {});
goog.addDependency('../../core/utils/xml.js', ['Blockly.utils.xml'], [], {});
goog.addDependency('../../core/variable_events.js', ['Blockly.Events.VarBase', 'Blockly.Events.VarCreate', 'Blockly.Events.VarDelete', 'Blockly.Events.VarRename'], ['Blockly.Events', 'Blockly.Events.Abstract', 'Blockly.utils.object'], {});
goog.addDependency('../../core/variable_map.js', ['Blockly.VariableMap'], ['Blockly.Events', 'Blockly.Events.VarDelete', 'Blockly.Events.VarRename', 'Blockly.Msg', 'Blockly.utils', 'Blockly.utils.object'], {});
goog.addDependency('../../core/variable_model.js', ['Blockly.VariableModel'], ['Blockly.Events', 'Blockly.Events.VarCreate', 'Blockly.utils'], {});
goog.addDependency('../../core/variables.js', ['Blockly.Variables'], ['Blockly.Blocks', 'Blockly.Msg', 'Blockly.VariableModel', 'Blockly.Xml', 'Blockly.utils', 'Blockly.utils.xml'], {});
goog.addDependency('../../core/variables_dynamic.js', ['Blockly.VariablesDynamic'], ['Blockly.Blocks', 'Blockly.Msg', 'Blockly.VariableModel', 'Blockly.Variables', 'Blockly.utils.xml'], {});
goog.addDependency('../../core/warning.js', ['Blockly.Warning'], ['Blockly.Bubble', 'Blockly.Events', 'Blockly.Events.Ui', 'Blockly.Icon', 'Blockly.utils.dom', 'Blockly.utils.object'], {});
goog.addDependency('../../core/widgetdiv.js', ['Blockly.WidgetDiv'], ['Blockly.utils.style'], {});
goog.addDependency('../../core/workspace.js', ['Blockly.Workspace'], ['Blockly.Events', 'Blockly.Options', 'Blockly.VariableMap', 'Blockly.utils', 'Blockly.utils.math'], {});
goog.addDependency('../../core/workspace_audio.js', ['Blockly.WorkspaceAudio'], ['Blockly.utils', 'Blockly.utils.global', 'Blockly.utils.userAgent'], {'lang': 'es5'});
goog.addDependency('../../core/workspace_comment.js', ['Blockly.WorkspaceComment'], ['Blockly.Events', 'Blockly.Events.CommentChange', 'Blockly.Events.CommentCreate', 'Blockly.Events.CommentDelete', 'Blockly.Events.CommentMove', 'Blockly.utils', 'Blockly.utils.Coordinate', 'Blockly.utils.xml'], {});
goog.addDependency('../../core/workspace_comment_render_svg.js', ['Blockly.WorkspaceCommentSvg.render'], ['Blockly.utils', 'Blockly.utils.Coordinate', 'Blockly.utils.dom'], {});
goog.addDependency('../../core/workspace_comment_svg.js', ['Blockly.WorkspaceCommentSvg'], ['Blockly.Css', 'Blockly.Events', 'Blockly.Events.CommentCreate', 'Blockly.Events.CommentDelete', 'Blockly.Events.CommentMove', 'Blockly.Events.Ui', 'Blockly.WorkspaceComment', 'Blockly.utils', 'Blockly.utils.Coordinate', 'Blockly.utils.Rect', 'Blockly.utils.dom', 'Blockly.utils.object'], {});
goog.addDependency('../../core/workspace_drag_surface_svg.js', ['Blockly.WorkspaceDragSurfaceSvg'], ['Blockly.utils', 'Blockly.utils.dom'], {});
goog.addDependency('../../core/workspace_dragger.js', ['Blockly.WorkspaceDragger'], ['Blockly.utils.Coordinate'], {});
goog.addDependency('../../core/workspace_events.js', ['Blockly.Events.FinishedLoading'], ['Blockly.Events', 'Blockly.Events.Ui', 'Blockly.utils.object'], {'lang': 'es5'});
goog.addDependency('../../core/workspace_svg.js', ['Blockly.WorkspaceSvg'], ['Blockly.BlockSvg', 'Blockly.ConnectionDB', 'Blockly.Events', 'Blockly.Events.BlockCreate', 'Blockly.Gesture', 'Blockly.Grid', 'Blockly.MarkerManager', 'Blockly.Msg', 'Blockly.Options', 'Blockly.ThemeManager', 'Blockly.Themes.Classic', 'Blockly.TouchGesture', 'Blockly.Workspace', 'Blockly.WorkspaceAudio', 'Blockly.WorkspaceDragSurfaceSvg', 'Blockly.Xml', 'Blockly.blockRendering', 'Blockly.constants', 'Blockly.navigation', 'Blockly.registry', 'Blockly.utils', 'Blockly.utils.Coordinate', 'Blockly.utils.Metrics', 'Blockly.utils.Rect', 'Blockly.utils.dom', 'Blockly.utils.object', 'Blockly.utils.toolbox'], {});
goog.addDependency('../../core/ws_comment_events.js', ['Blockly.Events.CommentBase', 'Blockly.Events.CommentChange', 'Blockly.Events.CommentCreate', 'Blockly.Events.CommentDelete', 'Blockly.Events.CommentMove'], ['Blockly.Events', 'Blockly.Events.Abstract', 'Blockly.utils.Coordinate', 'Blockly.utils.object', 'Blockly.utils.xml'], {});
goog.addDependency('../../core/xml.js', ['Blockly.Xml'], ['Blockly.Events', 'Blockly.Events.BlockCreate', 'Blockly.Events.FinishedLoading', 'Blockly.Events.VarCreate', 'Blockly.utils', 'Blockly.utils.dom', 'Blockly.utils.global', 'Blockly.utils.xml'], {});
goog.addDependency('../../core/zoom_controls.js', ['Blockly.ZoomControls'], ['Blockly.Css', 'Blockly.Scrollbar', 'Blockly.Touch', 'Blockly.utils.dom'], {'lang': 'es5'});
goog.addDependency("base.js", [], []);

// Load Blockly.
goog.require('Blockly.requires')

delete root.BLOCKLY_DIR;
delete root.BLOCKLY_BOOT;
delete root.IS_NODE_JS;
};

if (this.IS_NODE_JS) {
  this.BLOCKLY_BOOT(this);
  module.exports = Blockly;
} else {
  document.write('<script src="' + this.BLOCKLY_DIR +
      '/closure/goog/base.js"></script>');
  document.write('<script>this.BLOCKLY_BOOT(this);</script>');
}
