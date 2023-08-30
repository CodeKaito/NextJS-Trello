'use client';
"use strict";
exports.__esModule = true;
var BoardStore_1 = require("@/store/BoardStore");
var solid_1 = require("@heroicons/react/20/solid");
var image_1 = require("next/image");
var react_avatar_1 = require("react-avatar");
function Header() {
    var _a = BoardStore_1.useBoardStore(function (state) { return [
        state.board,
        state.searchString,
        state.setSearchString
    ]; }), board = _a[0], searchString = _a[1], setSearchString = _a[2];
    return (React.createElement("header", null,
        React.createElement("div", { className: "flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl" },
            React.createElement("div", { className: "absolute top-0 left-0 h-96 w-full bg-gradient-to-br from-white via-slate-[#0055D1] to-[#006ec9] rounded-b-md -z-50 opacity-50 blur-3xl" }),
            React.createElement(image_1["default"], { src: "https://links.papareact.com/c2cdd5", alt: "Trello logo", width: 300, height: 100, className: "w-44 md:w-56 pb-10 md:pb-0 object-contain" }),
            React.createElement("div", { className: "flex items-center space-x-5 flex-1 justify-end w-full" },
                React.createElement("form", { className: "flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial" },
                    React.createElement(solid_1.MagnifyingGlassIcon, { className: "h-6 w-6 text-gray-400" }),
                    React.createElement("input", { type: "text", placeholder: "Search", value: searchString, onChange: function (e) { return setSearchString(e.target.value); }, className: "flex-1" }),
                    React.createElement("button", { type: "submit", hidden: true }, "Search")),
                React.createElement(react_avatar_1["default"], { name: 'Jerome', round: true, size: '50', color: "#0055D1" }))),
        React.createElement("div", { className: "flex items-center justify-center px-5 py-2 md:py-5" },
            React.createElement("p", { className: "flex items-center p-5 text-sm font-medium pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055D1]" },
                React.createElement(solid_1.UserCircleIcon, { className: "inline-block h-10 w-10 text-[#0055D1] mr-1" }),
                "GPT's summarising your tasks for the day..."))));
}
exports["default"] = Header;
