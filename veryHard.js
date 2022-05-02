// Very Hard //
class Person {
    // Properties
    constructor(name, age, job){
        this.name=name;
        this.age=age;
        this.job=job
    }
    // Method 
    exercise(){
        console.log("Whatever we want");
    }
    fetchJob(){
        console.log(`This is ${this.name} and their job is ${this.job}`)
    }
}


class Programmer extends Person {
    constructor(name, age, job, languages){
        super(name, age, job);
        this.languages=languages;
        this.busy=true;    
    }
    completeTask(){
        // Update the busy property to false
        this.busy=false;
    }
    acceptNewTask(){
        // Updates the busy property to true
        this.busy= true;
    }
    offerNewTask(){
        if (this.busy === true){
            console.log(`${this.name} cannot accept a new task.`)
        }
        else {
            console.log(`${this.name} would love to take on a new task.`)
        }
    }
    learnLanguage(language){
        this.languages.push(language)
    }
    listLanguages(){
        for(let i= 0; i < this.languages.length; i++){
            console.log(this.languages[i])
        }
    }
}
let programer1= new Programmer("Jordon", 23, "Coding Instructor", ["English"]);
programer1.completeTask();
programer1.offerNewTask();
programer1.learnLanguage("Spanish");
programer1.listLanguages();
let programer2= new Programmer("India", 23, "Apprentice", ["HTML"])
programer2.fetchJob();
programer2.learnLanguage("Javascript")
programer2.listLanguages();
