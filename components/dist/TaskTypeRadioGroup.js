'use client';
"use strict";
exports.__esModule = true;
var BoardStore_1 = require("@/store/BoardStore");
var types = [
    {
        id: 'todo',
        name: 'Todo',
        description: 'A new task to be completed',
        color: 'bg-red-500'
    },
    {
        id: 'done',
        name: 'Done',
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
    return (React.createElement("div", null, "TaskTypeRadioGroup"));
}
exports["default"] = TaskTypeRadioGroup;
