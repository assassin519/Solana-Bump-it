import { createSlice } from "@reduxjs/toolkit";
import { eventsStateProps } from "../../types/states";
import { dispatch } from "..";
import instance from "../../utils/axios";
import { EventProps } from "../../types";

const initialState: eventsStateProps = {
    error: null,
    events: [],
    event: null,
}

const events = createSlice({
    name: "events",
    initialState,
    reducers: {
        hasError(state, action) {
            state.error = action.payload
        },
        getEventsData(state, action) {
            state.events = action.payload
        },
        addEventData(state, action) {
            state.events.push(action.payload)
        },

        getEventInfo(state, action) {
            state.event = action.payload
        },
        delEvent(state, action) {
            state.events = state.events.filter(event => event.id !== action.payload);
        }
    }
})

export const getAllEvents = () => {
    return async () => {
        try {
            const response = await instance.get("/events/all")
            dispatch(events.actions.getEventsData(response.data.data.events))
        } catch (error) {
            dispatch(events.actions.hasError(error))
        }
    }
}

export const getEventInfo = (pageId: string | null) => {
    return async () => {
        try {
            const response = await instance.get(`/events/eventInfo/${pageId}`)
            dispatch(events.actions.getEventInfo(response.data.data))
        } catch (error) {
            dispatch(events.actions.hasError(error))
        }
    }
}

export function addEvent(eventData: EventProps) {
    return async () => {
        try {
            const response = await instance.post("/events/add", eventData);
            dispatch(events.actions.addEventData(response.data.data));
        } catch (error) {
            dispatch(events.actions.hasError(error));
        }
    };
}
export const delEvent = (eventId: string | null) => {
    return async () => {
        console.log("qqq", eventId)
        try {
            const response = await instance.delete(`/events/delEvent/${eventId}`)
            console.log("delete====", response.data.data);
            dispatch(events.actions.delEvent(eventId))
        } catch (error) {
            dispatch(events.actions.hasError(error))
        }
    }
}

export default events.reducer;