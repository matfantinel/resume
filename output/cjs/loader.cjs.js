'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-80c13ec9.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["mf-resume_2.cjs",[[1,"mf-resume"],[1,"svg-icon",{"name":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
