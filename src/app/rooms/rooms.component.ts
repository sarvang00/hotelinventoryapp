import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

  hotelName  = "hilton";
  numOfRooms = 10;
  hideRooms = false;

  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20
  }

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: "Deluxe",
      amenities: "AC",
      price: 500,
      photos: "./favicon.ico",
      checkInTime: new Date("11-Nov-2021"),
      checkOutTime: new Date("16-Nov-2021"),
      rating: 4.5
    },
    {
      roomNumber: 2,
      roomType: "Suite",
      amenities: "AC, TV",
      price: 800,
      photos: "./favicon.ico",
      checkInTime: new Date("12-Nov-2021"),
      checkOutTime: new Date("15-Nov-2021"),
      rating: 3.6
    },
    {
      roomNumber: 3,
      roomType: "Regular",
      amenities: "TV",
      price: 400,
      photos: "./favicon.ico",
      checkInTime: new Date("11-Nov-2021"),
      checkOutTime: new Date("16-Nov-2021"),
      rating: 2.6
    }
  ]

  toggle() {
    if (this.hideRooms) {
      this.hideRooms = false;
    } else {
      this.hideRooms = true;
    }
  }
}
