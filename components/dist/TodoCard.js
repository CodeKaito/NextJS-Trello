'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var solid_1 = require("@heroicons/react/20/solid");
var BoardStore_1 = require("@/store/BoardStore");
function TodoCard(_a) {
    var todo = _a.todo, index = _a.index, id = _a.id, innerRef = _a.innerRef, draggableProps = _a.draggableProps, dragHandleProps = _a.dragHandleProps;
    var deleteTask = BoardStore_1.useBoardStore();
    return (React.createElement("div", __assign({ className: "bg-white rounded-md space-y-2 drop-shadow-md" }, draggableProps, dragHandleProps, { ref: innerRef }),
        React.createElement("div", { className: "flex justify-between items-center p-5" },
            React.createElement("p", null, todo.title),
            React.createElement("button", { onClick: function () { return deleteTask(index, todo, id); }, className: "text-red-500 hover:text-red-700" },
                React.createElement(solid_1.XCircleIcon, { className: "ml-5 h-8 w-8" })))));
}
exports["default"] = TodoCard;
