"use strict";
exports.__esModule = true;
var formatTodoForAi = function (board) {
    var todos = Array.from(board.columns.entries());
    var flatArray = todos.reduce(function (map, _a) {
        var key = _a[0], value = _a[1];
        map[key] = value.todos;
        return map;
    }, {});
    var flatArrayCounted = Object.entries(flatArray).reduce(function (map, _a) {
        var key = _a[0], value = _a[1];
        map[key] = value.length;
        return map;
    }, {});
    return flatArrayCounted;
};
exports["default"] = formatTodoForAi;
