/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var similarity = require('../app/util/similarity');
var assert = require('assert');
var path = require('path');
var fs = require('fs');

describe('similarity', function() {

  it('should return 1 if source and target are the same', function() {
    var origin = JSON.parse(fs.readFileSync(path.join(__dirname,'..','profiles','14578997.json'), 'utf8'));
    var target = JSON.parse(fs.readFileSync(path.join(__dirname,'..','profiles','14578997.json'), 'utf8'));
    assert.equal(1, similarity(origin, target, 'personality'))
    assert.equal(1, similarity(origin, target, 'needs'))
    assert.equal(1, similarity(origin, target, 'values'))
  });

  it('should return distance if profiles are from different API versions', function() {
    var origin = JSON.parse(fs.readFileSync(path.join(__dirname,'..','profiles','14578997.json'), 'utf8'));
    var target = JSON.parse(fs.readFileSync(path.join(__dirname,'..','profiles','1139651.json'), 'utf8'));
    assert.equal(0.7025814861323696, similarity(origin, target, 'personality'))
    assert.equal(0.4818150693033726, similarity(origin, target, 'needs'))
    assert.equal(0.6608327405394706, similarity(origin, target, 'values'))
  });

});