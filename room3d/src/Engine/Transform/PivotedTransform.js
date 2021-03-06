/* 
 * File: PicotedTransform.js
 * Generatlize matrix transformation to support pivoted position
 */

/*jslint node: true, vars: true */
/*global gEngine, vec2, mat4, Transform */
/* find out more about jslint: http://www.jslint.com/help.html */

"use strict";

//function PivotedTransform() {
//    Transform.call(this);
//    this.mPivot = vec2.fromValues(0, 0);  // this is the pivot
//}

function PivotedTransform(xPos, yPos) {
    Transform.call(this);

    if (xPos === undefined) xPos = 0;
    if (yPos === undefined) yPos = 0;
    this.mPivot = vec2.fromValues(xPos, yPos);  // this is the pivot
}
gEngine.Core.inheritPrototype(PivotedTransform, Transform);

// <editor-fold desc="Public Methods">

//<editor-fold desc="Setter/Getter methods">
PivotedTransform.prototype.setPivot = function (xPos, yPos) { this.setPivotXPos(xPos); this.setPivotYPos(yPos); };
PivotedTransform.prototype.getPivot = function () { return this.mPivot; };
PivotedTransform.prototype.getPivotXPos = function () { return this.mPivot[0]; };
PivotedTransform.prototype.setPivotXPos = function (xPos) { this.mPivot[0] = xPos; };
PivotedTransform.prototype.getPivotYPos = function () { return this.mPivot[1]; };
PivotedTransform.prototype.setPivotYPos = function (yPos) { this.mPivot[1] = yPos; };
//</editor-fold>
//
// returns the matrix the concatenates the transformations defined
PivotedTransform.prototype.getXform = function () {
    // Creates a blank identity matrix
    var matrix = mat4.create();

    // The matrices that WebGL uses are transposed, thus the typical matrix
    // operations must be in reverse.

    mat4.translate(matrix, matrix, vec3.fromValues(this.getXPos(), this.getYPos(), 0.0));
    mat4.translate(matrix, matrix, vec3.fromValues(this.getPivotXPos(), this.getPivotYPos(), 0.0));
    mat4.rotateZ(matrix, matrix, this.getRotationInRad());
    mat4.scale(matrix, matrix, vec3.fromValues(this.getWidth(), this.getHeight(), 1.0));
    mat4.translate(matrix, matrix, vec3.fromValues(-this.getPivotXPos(), -this.getPivotYPos(), 0.0));

    return matrix;
};

PivotedTransform.prototype.getXform2d = function () {
    // Creates a blank identity matrix
    var matrix = mat3.create();

    // The matrices that WebGL uses are transposed, thus the typical matrix
    // operations must be in reverse.
    mat3.translate(matrix, matrix, vec2.fromValues(this.getXPos(), this.getYPos()));
    mat3.translate(matrix, matrix, vec2.fromValues(this.getPivotXPos(), this.getPivotYPos()));
    mat3.rotate(matrix, matrix, this.getRotationInRad());
    mat3.scale(matrix, matrix, vec2.fromValues(this.getWidth(), this.getHeight()));
    mat3.translate(matrix, matrix, vec2.fromValues(-this.getPivotXPos(), -this.getPivotYPos()));

    return matrix;
};
//</editor-fold>