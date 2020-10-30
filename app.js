var hours = ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm"              ] ;
var location = ["Seattle","Tokyo","Dubai","Paris","Lima"   ] ;



var seattle = {
name : "Seattle" ,
min : 23 ,
max : 65 ,
avg :6.3,
ranadom_cus_per_hour :[],
cookies_per_hour :[] ,



getRandomCusPerHour : function () {
for (var i =0 ; i<  hours.length ; i++ ){
this.ranadom_cus_per_hour[i] = generateRandomNumber (this.min,this.max) ;
}
},
getRandomCookiePerHour :function() {
for (var i =0 ; i<hours.length ; i++){

this.cookies_per_hour[i]= Math.floor(this.ranadom_cus_per_hour[i]*this.avg) ;
}
} ,
render : function (){
    var parent_main = document.getElementById("main") ;
    var location_name = document.createElement("h2");
    location_name.textContent = this.name ;
    parent_main.appendChild(location_name);
    var uol = document.createElement('ul') ;
    parent_main.appendChild(uol);
    for (var h =0 ; h<hours.length ; h++) {
        var list = document.createElement("li");
        list.textContent=hours[h] + ':' + this.cookies_per_hour[h] ;

        uol.appendChild(list);
    }

}





} ;
seattle.getRandomCusPerHour ();
seattle.getRandomCookiePerHour ();
seattle.render();
function generateRandomNumber(min, max) {
    var random = Math.random();
    random = (random * (max - min + 1)) + min;
    random = Math.floor(random);
    return random;
  }