/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview custom_renderer renderer.
 */
'use strict';

goog.provide('Blockly.custom_renderer.Renderer');

goog.require('Blockly.blockRendering');
goog.require('Blockly.blockRendering.Renderer');
goog.require('Blockly.utils.object');
goog.require('Blockly.custom_renderer.ConstantProvider');
goog.require('Blockly.custom_renderer.Drawer');
goog.require('Blockly.custom_renderer.RenderInfo');


/**
 * The custom_renderer renderer.
 * @param {string} name The renderer name.
 * @package
 * @constructor
 * @extends {Blockly.blockRendering.Renderer}
 */
Blockly.custom_renderer.Renderer = function(name) {
  Blockly.custom_renderer.Renderer.superClass_.constructor.call(this, name);
};
Blockly.utils.object.inherits(Blockly.custom_renderer.Renderer,
    Blockly.blockRendering.Renderer);

/**
 * Create a new instance of the renderer's constant provider.
 * @return {!Blockly.custom_renderer.ConstantProvider} The constant provider.
 * @protected
 * @override
 */
Blockly.custom_renderer.Renderer.prototype.makeConstants_ = function() {
  return new Blockly.custom_renderer.ConstantProvider();
};

/**
 * Create a new instance of the renderer's render info object.
 * @param {!Blockly.BlockSvg} block The block to measure.
 * @return {!Blockly.custom_renderer.RenderInfo} The render info object.
 * @protected
 * @override
 */
Blockly.custom_renderer.Renderer.prototype.makeRenderInfo_ = function(block) {
  return new Blockly.custom_renderer.RenderInfo(this, block);
};

/**
 * Create a new instance of the renderer's drawer.
 * @param {!Blockly.BlockSvg} block The block to render.
 * @param {!Blockly.blockRendering.RenderInfo} info An object containing all
 *   information needed to render this block.
 * @return {!Blockly.custom_renderer.Drawer} The drawer.
 * @protected
 * @override
 */
Blockly.custom_renderer.Renderer.prototype.makeDrawer_ = function(block, info) {
  return new Blockly.custom_renderer.Drawer(block,
      /** @type {!Blockly.custom_renderer.RenderInfo} */ (info));
};

Blockly.blockRendering.register('custom_renderer', Blockly.custom_renderer.Renderer);
