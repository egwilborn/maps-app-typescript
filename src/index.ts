/// <reference types="@types/google.maps" />
import { CustomMap } from "./CustomMap";
import { User } from "./User";
import { Company } from "./Company";

const user = new User();

console.log(user);

const company = new Company();
console.log(company);

new CustomMap("map");
