/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-543.js
 * @description ES5 Attributes - fail to update [[Get]] attribute of accessor property ([[Get]] is a Function, [[Set]] is a Function, [[Enumerable]] is true, [[Configurable]] is false) to different value
 */


function testcase() {
        var obj = {};

        var getFunc = function () {
            return 1001;
        };

        var verifySetFunc = "data";
        var setFunc = function (value) {
            verifySetFunc = value;
        };

        Object.defineProperty(obj, "prop", {
            get: getFunc,
            set: setFunc,
            enumerable: true,
            configurable: false
        });

        var result1 = obj.prop === 1001;
        var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");

        try {
            Object.defineProperty(obj, "prop", {
                get: undefined
            });

            return false;
        } catch (e) {
            var result2 = obj.prop === 1001;
            var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");

            return result1 && result2 && desc1.get === getFunc && desc2.get === getFunc && e instanceof TypeError;
        }
    }
runTestCase(testcase);
