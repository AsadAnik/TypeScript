"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1() {
    console.log('========== Enums ==========');
    let Size;
    (function (Size) {
        Size[Size["Small"] = 0] = "Small";
        Size[Size["Medium"] = 1] = "Medium";
        Size[Size["Large"] = 2] = "Large";
    })(Size || (Size = {}));
    ;
    console.log(Size);
    let mySize = Size.Small;
    console.log(`My Size - ${mySize}`);
    let mySize2 = Size['Medium'];
    console.log(`My Size 2 - ${mySize2}`);
    let Width;
    (function (Width) {
        Width[Width["Sm"] = 2] = "Sm";
        Width[Width["Md"] = 3] = "Md";
        Width[Width["Lg"] = 4] = "Lg";
    })(Width || (Width = {}));
    ;
    console.log(Width);
    let DaysOfWeek;
    (function (DaysOfWeek) {
        DaysOfWeek[DaysOfWeek["Sunday"] = 0] = "Sunday";
        DaysOfWeek[DaysOfWeek["Monday"] = 1] = "Monday";
        DaysOfWeek[DaysOfWeek["Tuesday"] = 2] = "Tuesday";
        DaysOfWeek[DaysOfWeek["Wednesday"] = 3] = "Wednesday";
        DaysOfWeek[DaysOfWeek["Thursday"] = 4] = "Thursday";
        DaysOfWeek[DaysOfWeek["Friday"] = 5] = "Friday";
        DaysOfWeek[DaysOfWeek["Saturday"] = 6] = "Saturday";
    })(DaysOfWeek || (DaysOfWeek = {}));
    ;
    let today = DaysOfWeek.Friday;
    console.log(today);
    let CardinalDirections;
    (function (CardinalDirections) {
        CardinalDirections[CardinalDirections["North"] = 0] = "North";
        CardinalDirections[CardinalDirections["South"] = 1] = "South";
        CardinalDirections[CardinalDirections["East"] = 2] = "East";
        CardinalDirections[CardinalDirections["West"] = 3] = "West";
    })(CardinalDirections || (CardinalDirections = {}));
    ;
    let heading = CardinalDirections.North;
    console.log(heading);
    let HttpStatus;
    (function (HttpStatus) {
        HttpStatus[HttpStatus["OK"] = 200] = "OK";
        HttpStatus[HttpStatus["NotFound"] = 404] = "NotFound";
        HttpStatus[HttpStatus["InternalServerError"] = 500] = "InternalServerError";
    })(HttpStatus || (HttpStatus = {}));
    ;
    let responseCode = HttpStatus.NotFound;
    console.log(`Page Not Found ${responseCode}`);
    let Color;
    (function (Color) {
        Color["Red"] = "#FF0000";
        Color["Green"] = "#00FF00";
        Color["Blue"] = "#0000FF";
    })(Color || (Color = {}));
    ;
    let selectColor = Color.Green;
    console.log(`Green Color Code - ${selectColor}`);
    let Month;
    (function (Month) {
        Month[Month["January"] = 1] = "January";
        Month[Month["February"] = 2] = "February";
        Month[Month["March"] = 3] = "March";
        Month[Month["April"] = 4] = "April";
        Month[Month["May"] = 5] = "May";
        Month[Month["June"] = 6] = "June";
        Month[Month["July"] = 7] = "July";
        Month[Month["August"] = 8] = "August";
        Month[Month["September"] = 9] = "September";
        Month[Month["October"] = 10] = "October";
        Month[Month["November"] = 11] = "November";
        Month[Month["December"] = 12] = "December";
    })(Month || (Month = {}));
    ;
    let currentMonth = Month.July;
    console.log(`Special Month - ${currentMonth}`);
}
exports.default = default_1;
//# sourceMappingURL=enums.js.map