'use client'

import { XCircleIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";
import { Draggable, DraggableProvidedDraggableProps, DraggableProvidedDragHandleProps } from "react-beautiful-dnd";
import Image from "next/image";
import { useBoardStore } from "@/store/BoardStore";

type Props = {
    todo: Todo;
    index: number;
    id: TypedColumn;
    innerRef: (element: HTMLElement | null) => void;
    draggableProps: DraggableProvidedDraggableProps;
    dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
    };

function TodoCard({
    todo,
    index,
    id,
    innerRef,
    draggableProps,
    dragHandleProps,
}: Props) {
    return (
        <div className="bg-white rounded-md space-y-2 drop-shadow-md"
            {...draggableProps} {...dragHandleProps} ref={innerRef}>hello</div>
    )
}

export default TodoCard
