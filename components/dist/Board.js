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
var BoardStore_1 = require("@/store/BoardStore");
var react_1 = require("react");
var react_beautiful_dnd_1 = require("react-beautiful-dnd");
var Column_1 = require("./Column");
function Board() {
    var _a = BoardStore_1.useBoardStore(function (state) { return [
        state.board,
        state.getBoard,
        state.setBoardState,
        state.updateTodoInDB,
    ]; }), board = _a[0], getBoard = _a[1], setBoardState = _a[2], updateTodoInDb = _a[3];
    react_1.useEffect(function () {
        getBoard();
    }, [getBoard]);
    var handleOnDragEnd = function (result) {
        var destination = result.destination, source = result.source, type = result.type;
        if (!destination)
            return;
        if (type === "column") {
            var entries = Array.from(board.columns.entries());
            var removed = entries.splice(source.index, 1)[0];
            entries.splice(destination.index, 0, removed);
            var rearrangedColumns = new Map(entries);
            setBoardState(__assign(__assign({}, board), { columns: rearrangedColumns }));
        }
        var columns = Array.from(board.columns);
        var startColIndex = columns[Number(source.droppableId)];
        var finishColIndex = columns[Number(destination.droppableId)];
        var startCol = {
            id: startColIndex[0],
            todos: startColIndex[1].todos
        };
        var finishCol = {
            id: finishColIndex[0],
            todos: finishColIndex[1].todos
        };
        if (!startCol || !finishCol)
            return;
        if (source.index === destination.index && startCol === finishCol)
            return;
        var newTodos = startCol.todos;
        var todoMoved = newTodos.splice(source.index, 1)[0];
        if (startCol.id === finishCol.id) {
            // Same column as destination
            newTodos.splice(destination.index, 0, todoMoved);
            var newCol = {
                id: startCol.id,
                todos: newTodos
            };
            var newColumns = new Map(board.columns);
            newColumns.set(startCol.id, newCol);
            updateTodoInDb(todoMoved, finishCol.id);
            setBoardState(__assign(__assign({}, board), { columns: newColumns }));
        }
        else {
            // Drag to another column
            var finishTodos = Array.from(finishCol.todos);
            finishTodos.splice(destination.index, 0, todoMoved);
            var newColumns = new Map(board.columns);
            var newCol = {
                id: startCol.id,
                todos: newTodos
            };
            newColumns.set(startCol.id, newCol);
            newColumns.set(finishCol.id, {
                id: finishCol.id,
                todos: finishTodos
            });
            // Update in DB
            updateTodoInDb(todoMoved, finishCol.id);
            setBoardState(__assign(__assign({}, board), { columns: newColumns }));
        }
    };
    return (React.createElement(react_beautiful_dnd_1.DragDropContext, { onDragEnd: handleOnDragEnd },
        React.createElement(react_beautiful_dnd_1.Droppable, { droppableId: "board", direction: "horizontal", type: "column" }, function (provided) { return (React.createElement("div", __assign({ className: "grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto" }, provided.droppableProps, { ref: provided.innerRef }), Array.from(board.columns.entries()).map(function (_a, index) {
            var id = _a[0], column = _a[1];
            return (React.createElement(Column_1["default"], { key: id, id: id, todos: column.todos, index: index }));
        }))); })));
}
;
exports["default"] = Board;
