class Media{
  constructor(title){
  this._title=title;
  this._isCheckedOut=false;
  this._ratings=[];
  }

  get title(){
    return this._title;
  }

	get isCheckedOut(){
  return this._isCheckedOut; 
  }

	get ratings(){
    return this._ratings;
  }

  set isCheckedOut(anotherCheckOut){
    this._isCheckedOut= anotherCheckOut;
  }

  toggleCheckOutStatus(){
    this.isCheckedOut=!this.isCheckedOut;  
    }

  getAverageRating(){
    let sum= this.ratings.reduce((sum, rating)=>sum+rating,0);
    const lengthOfArray=this.ratings.length;
    return sum/lengthOfArray;
  }

  addRating(anotherRating){
    this.ratings.push(anotherRating);
  }
  };

class Book extends Media{
  constructor(author, title, pages){
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author(){
    return this._author;
  }

  get pages(){
    return this._pages
  }
};

class Movie extends Media{
  constructor(director, title, runTime){
    super(title);
    this._director=director;
    this._runTime=runTime;
  }

  get director(){
    return this._director;
  }

  get runTime(){
    return this._runTime;
  }
};

class Cd extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
  	this._songs = songs;
  }
  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
};

const historyOfEverything = new Book ('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(`Book's rating is ${historyOfEverything.getAverageRating()}`);


const speed=new Movie ('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(`Movie's rating is ${speed.getAverageRating()}`);


const cd = new Cd ('Origins', 'Imagine Dragons', 'Bad Liar');
cd.toggleCheckOutStatus();
console.log(cd.isCheckedOut);
cd.addRating(3);
cd.addRating(5);
cd.addRating(5);
console.log(`CD's rating is ${cd.getAverageRating()}`);



