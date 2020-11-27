import { a as patchEsm, b as bootstrapLazy } from './core-9d0b34d5.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["mf-logotype", [[1, "mf-logotype"]]], ["mf-resume_2", [[1, "mf-resume", { "showDownloadLink": [4, "show-download-link"] }], [1, "svg-icon", { "name": [1], "small": [4] }]]]], options);
    });
};
export { defineCustomElements };
