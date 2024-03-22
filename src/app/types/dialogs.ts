export interface Message {
   id: number;
   user: string;
   mess: string;
   time: string;
   avatar: string;
 }
export interface Contact {
   id: number;
   fullName: string;
   avatar: string;
   lastMess: string;
   time: string;
   login: string;
 }