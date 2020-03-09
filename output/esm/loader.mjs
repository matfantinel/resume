import { a as patchEsm, b as bootstrapLazy } from './core-9d0b34d5.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["mf-resume_2",[[1,"mf-resume",{"showDownloadLink":[4,"show-download-link"]}],[1,"svg-icon",{"name":[1]}]]]], options);
  });
};

export { defineCustomElements };
