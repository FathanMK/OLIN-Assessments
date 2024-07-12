import type { IPerson } from "../interfaces/IPerson"

export default function Greeting(person: IPerson) {
  return `Hello, my name is ${person.name} and my age is ${person.age}`
}