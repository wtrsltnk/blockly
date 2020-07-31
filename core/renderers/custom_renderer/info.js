/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview custom_renderer render info object.
 */
'use strict';

goog.provide('Blockly.custom_renderer');
goog.provide('Blockly.custom_renderer.RenderInfo');

goog.require('Blockly.utils.object');


/**
 * An object containing all sizing information needed to draw this block.
 *
 * This measure pass does not propagate changes to the block (although fields
 * may choose to rerender when getSize() is called).  However, calling it
 * repeatedly may be expensive.
 *
 * @param {!Blockly.custom_renderer.Renderer} renderer The renderer in use.
 * @param {!Blockly.BlockSvg} block The block to measure.
 * @constructor
 * @package
 * @extends {Blockly.blockRendering.RenderInfo}
 */
Blockly.custom_renderer.RenderInfo = function(renderer, block) {
  Blockly.custom_renderer.RenderInfo.superClass_.constructor.call(this, renderer, block);

};
Blockly.utils.object.inherits(Blockly.custom_renderer.RenderInfo,
    Blockly.blockRendering.RenderInfo);

/**
 * Get the block renderer in use.
 * @return {!Blockly.custom_renderer.Renderer} The block renderer in use.
 * @package
 */
Blockly.custom_renderer.RenderInfo.prototype.getRenderer = function() {
  return /** @type {!Blockly.custom_renderer.Renderer} */ (this.renderer_);
};
