'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-a99158e9.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["mf-logotype.cjs",[[1,"mf-logotype"]]],["mf-resume_2.cjs",[[1,"mf-resume",{"showDownloadLink":[4,"show-download-link"]}],[1,"svg-icon",{"name":[1],"small":[4]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
