"use client";

import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useEffect, useRef, useState } from "react";
import Container from "./Container";
import EventModal from "./site/EventModal";

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

// Event Renderer
function renderEventContent(eventInfo) {
    const colorClass = {
        danger: "bg-red-100 text-red-700 border-red-300",
        success: "bg-green-100 text-green-700 border-green-300",
        info: "bg-blue-100 text-blue-700 border-blue-300",
    }[eventInfo.event.extendedProps.calendar.toLowerCase()] || "bg-gray-100 text-gray-700 border-gray-300";

    return (
        <div className={`flex items-center gap-1 px-2 py-1 border rounded-md ${colorClass}`}>
            <span className="w-2 h-2 rounded-full bg-current"></span>
            <span className="font-medium">{eventInfo.event.title}</span>
        </div>
    );
}

export default function Calendar() {
    const token = getCookie();
    const accessRole = getRole();
    const { isOpen, openModal, closeModal } = useModal();
    const calendarRef = useRef(null);

    const [address, setaddress] = useState('Mobile');

    const [events, setEvents] = useState([
        {
            id: "1",
            title: "Mawas Birthday",
            start: new Date().toISOString().split("T")[0],
            extendedProps: { calendar: "Danger" },
        },
        {
            id: "2",
            title: "Team Meeting",
            start: new Date(new Date().setDate(new Date().getDate() + 2)).toISOString().split("T")[0],
            extendedProps: { calendar: "Success" },
        },
    ]);

    const handleDateSelect = (selectInfo) => {
        if (accessRole === "Admin") openModal();
    };

    const handleEventClick = (clickInfo) => {
        if (accessRole === "Admin") openModal();
    };

    // Responsive toolbar based on screen width
    const getHeaderToolbar = () => {
        if (typeof window !== "undefined" && window.innerWidth < 768) {
            return {
                left: "prev,next",
                center: "title",
                right: "today",
            };
        }
        return {
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
        };
    };

    const [toolbar, setToolbar] = useState(getHeaderToolbar());

    useEffect(() => {
        const handleResize = () => setToolbar(getHeaderToolbar());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="relative bg-gray-50 w-full">
            <Container>
                <div className="flex items-center justify-between shadow-md border border-gray-200 bg-white rounded-t-xl w-full py-6 px-2 sm:px-4">
                    <h3 className="text-2xl">Calender Board</h3>
                    <select
                        value={address}
                        onChange={(e) => setaddress(e.target.value)}
                        className={`border p-2 rounded-md bg-gray-100 cursor-pointer border-gray-300 w-[220px] focus:outline-none`}
                    >
                        <option value="New Orleans">New Orleans</option>
                        <option value="Biloxi">Biloxi</option>
                        <option value="Mobile">Mobile</option>
                        <option value="Pensacola">Pensacola</option>
                    </select>
                </div>
                <div className="rounded-b-2xl shadow-md border border-gray-200 bg-white w-full py-6 px-2 sm:px-4">
                    <FullCalendar
                        height="auto"
                        ref={calendarRef}
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        headerToolbar={toolbar}
                        events={events}
                        selectable
                        select={handleDateSelect}
                        eventClick={handleEventClick}
                        eventContent={renderEventContent}
                        windowResize={() => setToolbar(getHeaderToolbar())}
                    />
                </div>
            </Container>
            {isOpen && <EventModal isOpen={isOpen} onClose={closeModal} />}
        </div>
    );
}
