abstract class Department {
  static fiscalYear = 2025;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {}
   abstract describe(this: Department): void;
    // console.log(`Department ${this.id}: ${this.name}`);


  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
  static createEmpoloyee(name : string){
    return {name:name};

  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
  describe(){
    console.log("IT department - ID: "+ this.id);
  }
   
}

class AccountingDepartment extends Department {
  private lastReport:string;
  private static instance : AccountingDepartment;

  private constructor(id: string, private reports: string[]) {
    super(id, "accounting");
    this.lastReport = reports[0];
  }

  static getInstance(){
    if(AccountingDepartment.instance){
      return this.instance;
    }
    this.instance = new AccountingDepartment(`d2`, []);
    return this.instance;
  }

  describe(){
    console.log("Accounting department - ID: "+ this.id);
  }
  get mostRecentReport(){
    if(this.lastReport){
    return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value:string){
    if(!value){
      throw new Error("Please pass a valid value");
    }
    this.addReports(value);
  }


     addEmployee(name: string) {
    if (name === "Max") {
      return;
    } else {
      this.employees.push(name);
    }
  }

  addReports(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }
}
const employee1 = Department.createEmpoloyee("Max");
console.log(employee1);
console.log(Department.fiscalYear);
const it = new ITDepartment("d1", ["Yll"]);
// const accounting = new AccountingDepartment("d1", []);
 const accounting = AccountingDepartment.getInstance();
 const accounting1 = AccountingDepartment.getInstance();
 console.log(accounting);
 console.log(accounting1);
accounting.mostRecentReport = "raport1";
console.log(accounting.mostRecentReport);
it.addEmployee("Max");
it.addEmployee("Manu");

accounting.describe();
// IT.employees[2] = 'Anna';
it.describe();
it.printEmployeeInformation();
console.log(it);
// const ITCopy = {name:"DUMMY", describe: IT.describe};
// ITCopy.describe();
accounting.addEmployee("Max");
accounting.addEmployee("Manu");

accounting.addReports("report3");
accounting.addReports("report4");
accounting.printReports();
accounting.printEmployeeInformation();
