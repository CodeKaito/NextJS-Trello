"use strict";
exports.__esModule = true;
exports.useModalStore = void 0;
var zustand_1 = require("zustand");
exports.useModalStore = zustand_1.create()(function (set) { return ({
    isOpen: false,
    openModal: function () { return set({ isOpen: true }); },
    closeModal: function () { return set({ isOpen: false }); }
}); });
