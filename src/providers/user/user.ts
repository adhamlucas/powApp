// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Storage } from '@ionic/storage';
// import { DatePipe } from '@angular/common';
/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
// @Injectable()
export class UserProvider {
  

//   constructor(private storage: Storage, private datepipe: DatePipe) { 

//   }

//   public insert(user: User){
//     return this.save(user.userName, user);
//   }

//   public update(user: User){
//     return this.save(user.userName, user);
//   }

//   public save(key: string, user: User){
//     return this.storage.set(key, user);
//   }

//   public remove(key: string){
//     return this.storage.remove(key);
//   }

//   public get(key: string) {
//     return this.storage.get(key);
//   }

//   public getAll() {
//     let users: UserList[] = [];

//     return this.storage.forEach((value: User, key: string, iterationNumber: Number) => {
//       let user = new UserList();
      

//       user.user = value;

//       users.push(user);
//     })
//       .then(() => {
//         return Promise.resolve(users);
//       })
//       .catch((error) =>{
//         return Promise.reject(error);
//       });
//   }
// }

// export class User {
//   userName: string;
//   password: string;
// }

// export class UserList {
//   user: User;
}

export interface User {
  email: string;
  password: string;
}