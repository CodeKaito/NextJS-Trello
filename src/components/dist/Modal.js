"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@headlessui/react");
var ModalStore_1 = require("@/store/ModalStore");
var BoardStore_1 = require("@/store/BoardStore");
var TaskTypeRadioGroup_1 = require("@/components/TaskTypeRadioGroup");
var react_3 = require("react");
var image_1 = require("next/image");
var solid_1 = require("@heroicons/react/20/solid");
function Modal() {
    var _a = BoardStore_1.useBoardStore(), addTask = _a.addTask, image = _a.image, setImage = _a.setImage, newTaskType = _a.newTaskType, newTaskInput = _a.newTaskInput, setNewTaskInput = _a.setNewTaskInput;
    var _b = ModalStore_1.useModalStore(function (state) { return [
        state.isOpen,
        state.closeModal,
    ]; }), isOpen = _b[0], closeModal = _b[1];
    var handleSubmit = function (e) {
        e.preventDefault();
        if (!newTaskInput)
            return;
        addTask(newTaskInput, newTaskType, image);
        setImage(null);
        closeModal();
    };
    var imagePickerRef = react_3.useRef(null);
    return (
    // Use the `Transition` component at the root level
    React.createElement(react_2.Transition, { appear: true, show: isOpen, as: react_1.Fragment },
        React.createElement(react_2.Dialog, { as: "form", onSubmit: handleSubmit, className: "relative z-10", onClose: closeModal },
            React.createElement(react_2.Transition.Child, { as: react_1.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0" },
                React.createElement("div", { className: "fixed inset-0 bg-black bg-opacity-25  " })),
            React.createElement("div", { className: "fixed inset-0 overflow-y-auto" },
                React.createElement("div", { className: "flex min-h-full items-center justify-center p-4 text-center" },
                    React.createElement(react_2.Transition.Child, { as: react_1.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 scale-95", enterTo: "opacity-100 scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 scale-100", leaveTo: "opacity-0 scale-95" },
                        React.createElement(react_2.Dialog.Panel, { className: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all" },
                            React.createElement(react_2.Dialog.Title, { as: "h3", className: "text-lg font-medium leading-6 text-gray-900 pb-2" }, "Add a Task"),
                            React.createElement("div", { className: "mt-2" },
                                React.createElement("input", { type: "text", value: newTaskInput, onChange: function (e) { return setNewTaskInput(e.target.value); }, placeholder: "Enter a task here...", className: "w-full border border-gray-300 rounded-md outline-none p-5" })),
                            React.createElement(TaskTypeRadioGroup_1["default"], null),
                            React.createElement("div", null,
                                React.createElement("button", { type: "button", onClick: function () {
                                        var _a;
                                        (_a = imagePickerRef.current) === null || _a === void 0 ? void 0 : _a.click();
                                    }, className: "w-full border border-gray-300 rounded-md outline-none p-5 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2" },
                                    React.createElement(solid_1.PhotoIcon, { className: "h-6 w-6 mr-2 inline-block" }),
                                    "Upload Image"),
                                image && (React.createElement(image_1["default"], { alt: "uploaded image", width: 200, height: 200, className: "w-full h-44 object-cover mt-2 filter hover:grayscale transition-all duration-150 cursor-not-allowed", src: URL.createObjectURL(image), onClick: function () {
                                        setImage(null);
                                    } })),
                                React.createElement("input", { type: "file", ref: imagePickerRef, hidden: true, onChange: function (e) {
                                        if (!e.target.files[0].type.startsWith("image/"))
                                            return;
                                        setImage(e.target.files[0]);
                                    } }),
                                React.createElement("div", { className: "mt-2" },
                                    React.createElement("button", { type: "submit", className: "bg-blue-100 text-blue-900 p-2 rounded-md focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none focus-visible:ring-offset-2 disabled:text-gray-300 disabled:bg-gray-100 w-full", disabled: !newTaskInput }, "Add Task"))))))))));
}
exports["default"] = Modal;
