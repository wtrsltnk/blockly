/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview An object that provides constants for rendering blocks in the
 * custom_renderer renderer.
 */
'use strict';

goog.provide('Blockly.custom_renderer.ConstantProvider');

goog.require('Blockly.blockRendering.ConstantProvider');
goog.require('Blockly.utils.object');

/**
 * An object that provides constants for rendering blocks in the sample.
 * @constructor
 * @package
 * @extends {Blockly.blockRendering.ConstantProvider}
 */
Blockly.custom_renderer.ConstantProvider = function() {
  Blockly.custom_renderer.ConstantProvider.superClass_.constructor.call(this);

  // Override a few properties.
  /**
   * The width of the notch used for previous and next connections.
   * @type {number}
   * @override
   */
  this.NOTCH_WIDTH = 20;

  /**
   * The height of the notch used for previous and next connections.
   * @type {number}
   * @override
   */
  this.NOTCH_HEIGHT = 0;

  /**
   * Rounded corner radius.
   * @type {number}
   * @override
   */
  this.CORNER_RADIUS = 8;
  /**
   * The height of the puzzle tab used for input and output connections.
   * @type {number}
   * @override
   */
  this.TAB_HEIGHT = 8;
this.FIELD_BORDER_RECT_Y_PADDING = 5;
this.FIELD_DROPDOWN_BORDER_RECT_HEIGHT = 30;
  this.SMALL_PADDING = 10;
  this.MEDIUM_PADDING = 10;
  this.LARGE_PADDING = 20;
  this.BOTTOM_ROW_MIN_HEIGHT = 0;
};

Blockly.utils.object.inherits(Blockly.custom_renderer.ConstantProvider,
    Blockly.blockRendering.ConstantProvider);
