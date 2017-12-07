import { Event } from "./event.model";

export class EventService {
//will be filled with methods

//events is and is an array of Event class instances
    private events : Event [] = [];

addEvent(event: Event){
    this.events.push(event);
    console.log(this.events);
    
}

 }