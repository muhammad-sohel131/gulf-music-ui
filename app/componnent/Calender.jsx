// "use client";

// import dayGridPlugin from "@fullcalendar/daygrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import FullCalendar from "@fullcalendar/react";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import { useRef, useState } from "react";
// import Container from "./Container";

// // Dummy functions for testing
// const getCookie = () => "dummy-token";
// const getRole = () => "Admin";
// const useModal = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     return {
//         isOpen,
//         openModal: () => setIsOpen(true),
//         closeModal: () => setIsOpen(false),
//     };
// };

// // Improved event renderer
// function renderEventContent(eventInfo) {
//     const colorClass = {
//         danger: "bg-red-100 text-red-700 border-red-300",
//         success: "bg-green-100 text-green-700 border-green-300",
//         info: "bg-blue-100 text-blue-700 border-blue-300",
//     }[eventInfo.event.extendedProps.calendar.toLowerCase()] || "bg-gray-100 text-gray-700 border-gray-300";

//     return (
//         <div className={`flex items-center gap-1 px-2 py-1 border rounded-md ${colorClass}`}>
//             <span className="w-2 h-2 rounded-full bg-current"></span>
//             <span className="font-medium">{eventInfo.event.title}</span>
//         </div>
//     );
// }

// export default function Calendar() {
//     const token = getCookie();
//     const accessRole = getRole();
//     const { isOpen, openModal, closeModal } = useModal();
//     const calendarRef = useRef(null);

//     const [events, setEvents] = useState([
//         {
//             id: "1",
//             title: "Mawas Birthday",
//             start: new Date().toISOString().split("T")[0],
//             extendedProps: { calendar: "Danger" },
//         },
//         {
//             id: "2",
//             title: "Team Meeting",
//             start: new Date(new Date().setDate(new Date().getDate() + 2)).toISOString().split("T")[0],
//             extendedProps: { calendar: "Success" },
//         },
//     ]);

//     const handleDateSelect = (selectInfo) => {
//         if (accessRole === "Admin") openModal();
//     };

//     const handleEventClick = (clickInfo) => {
//         if (accessRole === "Admin") openModal();
//     };

//     return (
//         <div className="relative bg-gray-50 py-16">
//             <Container>
//                 <div className="rounded-2xl shadow-md border border-gray-200 bg-white w-full py-10 px-4">
//                     <FullCalendar
//                         height="550px"
//                         ref={calendarRef}
//                         plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//                         initialView="dayGridMonth"
//                         headerToolbar={{
//                             left: "prev,next today",
//                             center: "title",
//                             right: "dayGridMonth,timeGridWeek,timeGridDay",
//                         }}
//                         events={events}
//                         selectable
//                         select={handleDateSelect}
//                         eventClick={handleEventClick}
//                         eventContent={renderEventContent}
//                     />
//                 </div>
//             </Container>
//         </div>
//     );
// }




"use client";

import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useEffect, useRef, useState } from "react";
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
        <div className="relative bg-gray-50 py-16">
            <Container>
                <div className="rounded-2xl shadow-md border border-gray-200 bg-white w-full py-6 px-2 sm:px-4">
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
        </div>
    );
}
