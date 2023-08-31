'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@headlessui/react");
var ModalStore_1 = require("@/store/ModalStore");
var BoardStore_1 = require("@/store/BoardStore");
function Modal() {
    var _a = BoardStore_1.useBoardStore(function (state) { return [
        state.newTaskInput,
        state.setNewTaskInput,
    ]; }), newTaskInput = _a[0], setNewTaskInput = _a[1];
    var _b = ModalStore_1.useModalStore(function (state) { return [state.isOpen, state.closeModal]; }), isOpen = _b[0], closeModal = _b[1];
    return (
    // Use the `Transition` component at the root level
    React.createElement(react_2.Transition, { appear: true, show: isOpen, as: react_1.Fragment },
        React.createElement(react_2.Dialog, { as: 'form', className: 'relative z-10', onClose: closeModal },
            React.createElement(react_2.Transition.Child, { as: react_1.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0" },
                React.createElement("div", { className: "fixed inset-0 bg-black bg-opacity-25" })),
            React.createElement("div", { className: 'fixed inset-0 overflow-y-auto' },
                React.createElement("div", { className: 'flex min-h-full items-center justify-center p-4 text-center' },
                    React.createElement(react_2.Transition.Child, { as: react_1.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0" },
                        React.createElement(react_2.Dialog.Panel, { className: "w-full max-w-md transform overflow-hidden \r\n                            rounded-2xl bg-white p-6 text-left align-middle \r\n                            shadow-xl transition-all" },
                            React.createElement(react_2.Dialog.Title, { as: "h3", className: "text-lg font-medium leading-6 text-gray-900 pb-2" }, "Add a task"),
                            React.createElement("div", { className: 'mt-2' },
                                React.createElement("input", { type: "text", value: newTaskInput, onChange: function (e) { return setNewTaskInput(e.target.value); }, placeholder: 'Enter a task here', className: 'w-full border border-gray-300 rounded-md outline-none p-5' })))))))));
}
exports["default"] = Modal;
