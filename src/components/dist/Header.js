"use client";
"use strict";
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
var image_1 = require("next/image");
var solid_1 = require("@heroicons/react/20/solid");
var react_avatar_1 = require("react-avatar");
var BoardStore_1 = require("@/store/BoardStore");
var react_1 = require("react");
var fetchSuggestion_1 = require("@/lib/fetchSuggestion");
function Header() {
    var _this = this;
    var _a = BoardStore_1.useBoardStore(function (state) { return [
        state.board,
        state.searchString,
        state.setSearchString
    ]; }), board = _a[0], searchString = _a[1], setSearchString = _a[2];
    var _b = react_1.useState(false), loading = _b[0], setLoading = _b[1];
    var _c = react_1.useState([]), suggestion = _c[0], setSuggestion = _c[1];
    react_1.useEffect(function () {
        if (board.columns.size === 0)
            return;
        setLoading(true);
        var fetchSuggestionFunc = function () { return __awaiter(_this, void 0, void 0, function () {
            var suggestion;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetchSuggestion_1["default"](board)];
                    case 1:
                        suggestion = _a.sent();
                        setSuggestion(suggestion);
                        setLoading(false);
                        return [2 /*return*/];
                }
            });
        }); };
        setTimeout(function () {
            fetchSuggestionFunc();
        }, 3000);
    }, [board]);
    return (React.createElement("header", null,
        React.createElement("div", { className: "flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl" },
            React.createElement("div", { className: "absolute top-0 left-0 h-96 w-full bg-gradient-to-br from-white via-slate-[#0055D1] to-[#28bbce] rounded-b-md -z-50 opacity-50 blur-3xl" }),
            React.createElement(image_1["default"], { src: "https://links.papareact.com/c2cdd5", alt: "Trello logo", width: 300, height: 100, className: "w-44 md:w-56 pb-10 md:pb-0 object-contain" }),
            React.createElement("div", { className: "flex items-center space-x-5 flex-1 justify-end w-full" },
                React.createElement("form", { className: "flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial" },
                    React.createElement(solid_1.MagnifyingGlassIcon, { className: "h-6 w-6 text-gray-400" }),
                    React.createElement("input", { type: "text", placeholder: "Search", value: searchString, onChange: function (e) { return setSearchString(e.target.value); }, className: "flex-1" }),
                    React.createElement("button", { type: "submit", hidden: true }, "Search")),
                React.createElement(react_avatar_1["default"], { name: "Jerome", round: true, size: "50", color: "#0055D1" }))),
        React.createElement("div", { className: "flex justify-center px-5 py-2 md:py-5" },
            React.createElement("p", { className: "bg-white rounded-md shadow-md p-2 text-[#0055D1]" },
                React.createElement(solid_1.UserCircleIcon, { className: "inline-block h-10 w-10 text-[#0055D1] mr-1 " + (loading && "animate-spin") }),
                (suggestion.length !== 0) ? "You have " + ((suggestion[0] === 1) ? "1 task to do" : suggestion[0] + " tasks to do") + ", " + ((suggestion[1] === 1) ? "1 task in progress" : suggestion[1] + " tasks in progress ") + " and " + ((suggestion[2] === 1) ? "1 task done" : suggestion[2] + " tasks done") : "Hello, We are summarising your tasks for the day"))));
}
exports["default"] = Header;
