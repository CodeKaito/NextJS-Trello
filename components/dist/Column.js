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
var react_beautiful_dnd_1 = require("react-beautiful-dnd");
var TodoCard_1 = require("./TodoCard");
var BoardStore_1 = require("@/store/BoardStore");
var idToColumnText = { "todo": "To Do", "inprogress": "In Progress", "done": "Done" };
function Column(_a) {
    var id = _a.id, todos = _a.todos, index = _a.index;
    var searchString = BoardStore_1.useBoardStore(function (state) { return [state.searchString]; })[0];
    return (React.createElement(react_beautiful_dnd_1.Draggable, { draggableId: id, index: index }, function (provided) { return (React.createElement("div", __assign({}, provided.draggableProps, provided.dragHandleProps, { ref: provided.innerRef }),
        React.createElement(react_beautiful_dnd_1.Droppable, { droppableId: index.toString(), type: "card" }, function (provided, snapshot) { return (React.createElement("div", __assign({}, provided.droppableProps, { ref: provided.innerRef, className: "pb-2 p-2 rounded-2xl shadow-sm \n                                    " + (snapshot.isDraggingOver ? "bg-green-200" : "bg-white/50") }),
            React.createElement("h2", { className: "flex justify-between font-bold text-xl p-2" },
                idToColumnText[id],
                React.createElement("span", { className: "text-gray-500 bg-gray-200 rounded-full px-2 py-2 text-sm font-normal" }, todos.length)),
            React.createElement("div", { className: "space-y-2" },
                todos.map(function (todo, index) {
                    if (searchString &&
                        !todo.title.toLowerCase().includes(searchString.toLowerCase()))
                        return null;
                    return (React.createElement(react_beautiful_dnd_1.Draggable, { key: todo.$id, draggableId: todo.$id, index: index }, function (provided) { return (React.createElement(TodoCard_1["default"], { todo: todo, index: index, id: id, innerRef: provided.innerRef, draggableProps: provided.draggableProps, dragHandleProps: provided.dragHandleProps })); }));
                }),
                provided.placeholder,
                React.createElement("div", { className: "flex items-end justify-end p-2" },
                    React.createElement("button", { className: "text-green-500 hover:text-green-600" },
                        React.createElement(solid_1.PlusCircleIcon, { className: "h-10 w-10" })))))); }))); }));
}
exports["default"] = Column;
