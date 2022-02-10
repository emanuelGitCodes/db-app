import React from 'react';

let test:string = 'work work work'
test = '10 \n'

  // add func type at the end of the ()
const getFullName = (name:string, surname:string): string => {
  return `${name} ${surname}`
}

// variables that always hold a type no matter where on the code.
type ID = string
type PopularTag = string
type MaybePopularTag = PopularTag | null

// interface variable starts with a CAP letter
// The interface used to reduce code and avoid errors.
interface UserInterface {
  id:ID
  name:string
  age?:number // [ ? ] the age doesn't have to be included when creating the obj.
  getMessage(): string
}

interface OtherUserInterface {
  name: string,
  surname: string
}

// Use interfaces to avoid repeating types
const user:UserInterface = {
  id: 'asdf',
  name: 'John',
  age: 30,
  getMessage() {
    return `Hello ${user.name}`
  }
}

const user2:UserInterface = {
  id: 'qwerty',
  name: 'Timon',
  // age: 32
  getMessage() {
    return `Hello ${user2.name}`
  }
}

// [ | ] = Union operator // a variable type or another
// great for checking for NULL
let pageName: string | number = '1'
let errorMessage: string | null = null
let otherUser: UserInterface | null = null

const popularTags: PopularTag[] = ['coffee', 'dragon', user.id]
const dragonsTag: MaybePopularTag = 'dragon'

// return type void
const doSomething = (): void => {
  console.log(`doSomething`)
}

// casting is done using [ as ]
let pageNumber: string = '1'
let numericPageNumber: number = (pageNumber as unknown) as number

const someElement = document.getElementById('root') // return the DOM element
console.log('someElement:', someElement)

someElement?.addEventListener('click', (e) => {
  const target = e.target
  console.log('event', target)
})

const Test = () => {

  return(
    <div>
      {test}
      {getFullName(user.name, user2.name)}
      {user2.getMessage()}
      {popularTags}
    </div>
  )
}

export default Test