'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@headlessui/react");
var ModalStore_1 = require("@/store/ModalStore");
function Modal() {
    var _a = ModalStore_1.useModalStore(function (state) { return [state.isOpen, state.closeModal]; }), isOpen = _a[0], closeModal = _a[1];
    return (
    // Use the `Transition` component at the root level
    React.createElement(react_2.Transition, { show: isOpen, as: react_1.Fragment },
        React.createElement(react_2.Dialog, { onClose: closeModal },
            React.createElement(react_2.Transition.Child, { as: react_1.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0" },
                React.createElement("div", { className: "fixed inset-0 bg-black/30" })),
            React.createElement(react_2.Transition.Child, { as: react_1.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 scale-95", enterTo: "opacity-100 scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 scale-100", leaveTo: "opacity-0 scale-95" },
                React.createElement(react_2.Dialog.Panel, null,
                    React.createElement(react_2.Dialog.Title, null, "Deactivate account"))))));
}
exports["default"] = Modal;
