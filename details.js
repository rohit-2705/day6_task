class Person {
    constructor(name, age, gender,email_id,ph_no) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.email_id = email_id;
      this.ph_no = ph_no;
    }
  
    displayDetails() {
      console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender},Email_id: ${this.email_id},Ph_no: ${this.ph_no}`);
    }
  }
  
  const person1 = new Person("vijay", 25, "Male","xyz@gmail.com","8965378910");
  const person2 = new Person("vicky", 30, "male","abc@gmail.com","7667876501");
  
  person1.displayDetails();
  person2.displayDetails();