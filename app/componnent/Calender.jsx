"use client";

import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useRef, useState } from "react";
import Container from "./Container";

// Dummy functions for testing
const getCookie = () => "dummy-token";
const getRole = () => "Admin";
const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    return {
        isOpen,
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
    };
};

// Fix renderEventContent function
function renderEventContent(eventInfo) {
    const colorClass = `fc-bg-${eventInfo.event.extendedProps.calendar.toLowerCase()}`;
    return (
        <div className={`event-fc-color flex fc-event-main ${colorClass} p-1 rounded-sm`}>
            <div className="fc-daygrid-event-dot"></div>
            <div className="fc-event-time">{eventInfo.timeText}</div>
            <div className="fc-event-title">{eventInfo.event.title}</div>
        </div>
    );
}

export default function Calendar() {
    const token = getCookie();
    const accessRole = getRole();
    const { isOpen, openModal, closeModal } = useModal();
    const calendarRef = useRef(null);

    const [events, setEvents] = useState([
        {
            id: "1",
            title: "Mawas Birthday",
            start: new Date().toISOString().split("T")[0],
            extendedProps: { calendar: "Danger" },
        },
    ]);

    const handleDateSelect = (selectInfo) => {
        if (accessRole === "Admin") openModal();
    };

    const handleEventClick = (clickInfo) => {
        if (accessRole === "Admin") openModal();
    };

    return (

        <div className="bg-yellow-50 py-16">
            <Container>
                <div className="rounded-2xl border border-gray-200 bg-white  w-full py-10">
                    <FullCalendar
                        height="500px"
                        ref={calendarRef}
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        headerToolbar={{
                            left: "prev,next",
                            center: "title",
                            right: "dayGridMonth",
                        }}
                        events={events}
                        selectable
                        select={handleDateSelect}
                        eventClick={handleEventClick}
                        eventContent={renderEventContent}
                        customButtons={{
                            prev: {
                                text: "Add Event +",
                                click: openModal,

                            },
                        }}
                    />
                </div>
            </Container>
        </div>
    );
}
