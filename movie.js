//a.)
class movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }

}
var movie1=new movie("leo","avmstudios","pg13");
var movie2=new movie("dada","lycastudios","r");
console.log(movie1,movie2);
//b.)
class movie{
    constructor(title,studio,rating='PG'){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }

}
var movie1=new movie("leo","avmstudios");
var movie2=new movie("dada","lycastudios",'r');
console.log(movie1,movie2);
//c.)
class Movie {
    constructor(title,studio, rating) {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  }
  function getPG(movies) {
    return movies.filter(movie => movie.rating === "PG");
  }
  var movies = [
    new Movie("Movie1","studio1","r"),
    new Movie("Movie2","studio2", "PG"),
    new Movie("Movie3","studio3", "R"),
  ];
  var pgMovies = getPG(movies);
  console.log(pgMovies);

  //d.)
  class movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }

}
var movie1=new movie('Casino Royale','Eon Productions','PG13');

console.log(movie1)