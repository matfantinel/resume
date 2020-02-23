import { a as patchEsm, b as bootstrapLazy } from './core-757268fe.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["mf-resume_2",[[1,"mf-resume"],[1,"svg-icon",{"name":[1]}]]]], options);
  });
};

export { defineCustomElements };
