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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.useBoardStore = void 0;
var zustand_1 = require("zustand");
var getTodosGroupedByColumn_1 = require("@/lib/getTodosGroupedByColumn");
var appwrite_1 = require("@/appwrite");
exports.useBoardStore = zustand_1.create(function (set, get) { return ({
    board: {
        columns: new Map()
    },
    newTaskInput: "",
    newTaskType: "todo",
    setNewTaskType: function (task) { return set({ newTaskType: task }); },
    setNewTaskInput: function (input) { return set({ newTaskInput: input }); },
    getBoard: function () { return __awaiter(void 0, void 0, void 0, function () {
        var board;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getTodosGroupedByColumn_1.getTodosGroupedByColumns()];
                case 1:
                    board = _a.sent();
                    set({ board: board });
                    return [2 /*return*/];
            }
        });
    }); },
    setBoardState: function (board) { return set({ board: board }); },
    updateTodoInDB: function (todo, columnId) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, appwrite_1.databases.updateDocument(process.env.NEXT_PUBLIC_DATABASE_ID, process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID, todo.$id, {
                        title: todo.title,
                        status: columnId
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); },
    searchString: "",
    setSearchString: function (searchString) { return set({ searchString: searchString }); },
    image: null,
    setImage: function (image) { return set({ image: image }); },
    deleteTask: function (taskIndex, todo, id) { return __awaiter(void 0, void 0, void 0, function () {
        var newColumns;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    newColumns = new Map(get().board.columns);
                    (_a = newColumns.get(id)) === null || _a === void 0 ? void 0 : _a.todos.splice(taskIndex, 1);
                    set({ board: { columns: newColumns } });
                    if (!todo.image) return [3 /*break*/, 2];
                    return [4 /*yield*/, appwrite_1.storage.deleteFile(todo.image.bucketId, todo.image.fileId)];
                case 1:
                    _b.sent();
                    _b.label = 2;
                case 2: return [4 /*yield*/, appwrite_1.databases.deleteDocument(process.env.NEXT_PUBLIC_DATABASE_ID, process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID, todo.$id)];
                case 3:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }); },
    addTask: function (todo, columnId, image) { return __awaiter(void 0, void 0, void 0, function () {
        var file, fileUploaded, $id;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!image) return [3 /*break*/, 2];
                    return [4 /*yield*/, uploadImage(image)];
                case 1:
                    fileUploaded = _a.sent();
                    console.log("Uploaded image", fileUploaded);
                    if (fileUploaded) {
                        file = {
                            bucketId: fileUploaded.bucketId,
                            fileId: fileUploaded.$id
                        };
                    }
                    _a.label = 2;
                case 2: return [4 /*yield*/, appwrite_1.databases.createDocument(process.env.NEXT_PUBLIC_DATABASE_ID, process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID, appwrite_1.ID.unique(), __assign({ title: todo, status: columnId }, (file && { image: JSON.stringify(file) })))];
                case 3:
                    $id = (_a.sent()).$id;
                    set({ newTaskInput: "" });
                    set(function (state) {
                        var _a;
                        var newColumns = new Map(state.board.columns);
                        var newTodo = __assign({ $id: $id, $createdAt: new Date().toISOString(), title: todo, status: columnId }, (file && { image: file }));
                        var column = newColumns.get(columnId);
                        if (!column) {
                            newColumns.set(columnId, {
                                id: columnId,
                                todos: [newTodo]
                            });
                        }
                        else {
                            (_a = newColumns.get(columnId)) === null || _a === void 0 ? void 0 : _a.todos.push(newTodo);
                        }
                        return {
                            board: {
                                columns: newColumns
                            }
                        };
                    });
                    return [2 /*return*/];
            }
        });
    }); }
}); });
