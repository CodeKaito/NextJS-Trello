'use client';
"use strict";
exports.__esModule = true;
var BoardStore_1 = require("@/store/BoardStore");
var react_1 = require("@headlessui/react");
var solid_1 = require("@heroicons/react/20/solid");
var types = [
    {
        id: 'todo',
        name: 'To do',
        description: 'A new task to be completed',
        color: 'bg-red-500'
    },
    {
        id: 'inprogress',
        name: 'In Progress',
        description: 'A task that is currently being worked on',
        color: 'bg-yellow-500'
    },
    {
        id: 'done',
        name: 'Done',
        description: 'A task has been completed',
        color: 'bg-green-500'
    },
];
function TaskTypeRadioGroup() {
    var _a = BoardStore_1.useBoardStore(function (state) { return [
        state.setNewTaskType,
        state.newTaskType,
    ]; }), setNewTaskType = _a[0], newTaskType = _a[1];
    return (React.createElement("div", { className: "w-full px-4 py-5" },
        React.createElement("div", { className: "mx-auto w-full max-w-md" },
            React.createElement(react_1.RadioGroup, { value: newTaskType, onChange: function (e) { return setNewTaskType(e); } },
                React.createElement(react_1.RadioGroup.Label, { className: "sr-only" }, "Server size"),
                React.createElement("div", { className: "space-y-2" }, types.map(function (type) { return (React.createElement(react_1.RadioGroup.Option, { key: type.id, value: type.id, className: function (_a) {
                        var active = _a.active, checked = _a.checked;
                        return (active
                            ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-500'
                            : '') + "\n                  " + (checked ? type.color + " bg-opacity-75 text-white" : 'bg-white') + "\n                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none";
                    } }, function (_a) {
                    var active = _a.active, checked = _a.checked;
                    return (React.createElement(React.Fragment, null,
                        React.createElement("div", { className: "flex w-full items-center justify-between" },
                            React.createElement("div", { className: "flex items-center" },
                                React.createElement("div", { className: "text-sm" },
                                    React.createElement(react_1.RadioGroup.Label, { as: "p", className: "font-medium  " + (checked ? 'text-white' : 'text-gray-900') }, type.name),
                                    React.createElement(react_1.RadioGroup.Description, { as: "span", className: "inline " + (checked ? 'text-sky-100' : 'text-gray-500') },
                                        React.createElement("span", null, type.description)))),
                            checked && (React.createElement("div", { className: "shrink-0 text-white" },
                                React.createElement(solid_1.CheckCircleIcon, { className: "h-6 w-6" }))))));
                })); }))))));
}
exports["default"] = TaskTypeRadioGroup;
