/*Task # 30 : Hello Admin : Make a arrey of five `or` more user name s, including the name `Admin` . Imagin you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

*If the user name is `admin` , print a special greeting , such as Hello Admin , would you like to see a status report?

*Other wisw , print a generic greeting , such as Hello Eric , thank you for logging in again */

let usernames: string[] = ['admin', 'Asad', 'Sabtain', 'Kashif', 'Zohair'];


for (let i = 0; i < usernames.length; i++){
if(usernames[i] === `admin`){
 console.log("Hello admin , would you like to see a status report?");
}
else{
    console.log(`Hello ${usernames[i]}, thank you logging in again.`);
}
}