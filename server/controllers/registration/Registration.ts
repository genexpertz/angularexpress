/**
 * Created by admin on 05/04/18.
 */

export class Registration implements IRegistration{
  firstName: string;
  lastName: string;
  age: number;

  constructor(reg:IRegistration){
    this.firstName = reg.firstName
    this.lastName = reg.lastName
    this.age = reg.age
  }

}
