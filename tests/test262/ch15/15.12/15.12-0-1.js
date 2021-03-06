/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * This test should be run without any built-ins being added/augmented.
 * The name JSON must be bound to an object.
 * 4.2 calls out JSON as one of the built-in objects.
 *
 * @path ch15/15.12/15.12-0-1.js
 * @description JSON must be a built-in object
 */


function testcase() {
  var o = JSON;
  if (typeof(o) === "object") {  
    return true;
  }
 }
runTestCase(testcase);
