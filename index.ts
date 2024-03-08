// 17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let guest_list : string[] = ["kainat", "Maham","Marium","ayesha"]

 for (let i=0; i<guest_list.length; i++){

    console.log(`Dear Miss`+" " + guest_list[i] + `,\n\nplease come to my birthday party\n\n\t\t thank you\t\t`)
 }

 let new_guest: string ="Rubab";

 let absent_guest: string = "kainat";

 guest_list[0]= new_guest;

 for (let i=0; i<guest_list.length; i++){

     console.log(`Dear Miss`+" " + guest_list[i] + `,\n\nplease come to my birthday party\n\n\t\t thank you\t\t\n\n`)
  }

    console.log(`Dear Miss ${absent_guest} is not comming to my birthday party`);

    console.log(`good news!we are organizing big dinner table so we are inviting 3 more guests`);
//3 guest add here
    guest_list.unshift('kiran');
    guest_list.splice(2, 0, 'farhana');
    guest_list.push('shumaila');
//6 guest array
   for (let i=0; i<guest_list.length; i++){

      console.log(`Dear Miss`+" " + guest_list[i] + `,\n\nplease come to my birthday party\n\n\t\t thank you\t\t\n\n`)
   }

   //sorry message for not inviting guest
   console.log(`\n we are sorry to announce that we are inviting only two people as we dont have much space`);

   //we remove here guest

while(guest_list.length > 2){
    
    let remove_guest = guest_list.pop();
    console.log(`sorry miss. ${remove_guest},you are not invited to the birthday dinner`);
}
//two remaining guest who are still
for (let i=0; i<guest_list.length; i++){

    console.log(`Dear Miss`+" " + guest_list[i] + `,\n\nyou are still invited to my birthday party\n\n\t\t thank you\t\t\n\n`)
 }
 //remove all guest from my guest arry
 guest_list.splice(0, 2);
 console.log(guest_list)
 









  
