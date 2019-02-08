export class Habit {
    title;          // (string) the name of the habit. Required.
    good;           // (boolean) true if this is a good habit and false if this is a bad habit. Required.
    category;       // (string) the category the habit falls under. Optional.  
    reason;         // (string) The user's reason for wanting to have/not have the habit. Optional.
    notification;   // (Date) time at which to notify the user to perform the habit. Optional.
    created;        // (Date) the date when this habit was created. Required.
    history;        // (array of Entry) the record of the days on which the user has/has not done the habit. Required.

    constructor(titleInput, goodInput, categoryInput, reasonInput, notificationInput){

        // Required values
        this.title = titleInput;
        this.good = goodInput;
        this.created = Date();

        // Optional values
        this.category = categoryInput;
        this.reason = reasonInput;
        this.notification = notificationInput;

        // Initialize the history
        this.history = [];
    }

    // An entry for this habit given during the quiz
    const Entry = (did) => {
   	    return {
            date: Date();
            did: did
        };
    }
    
    // Adds a new record for this habit to the history
    function record(did){
        this.history.push((Entry(did));
    }
}