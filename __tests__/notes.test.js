import {test, expect} from 'vitest';
import { getAllNotes } from '../src/notes';
import { fetchData } from '../src/fetchTest';
import fs from 'node:fs/promises';

test('get mock all users from jsonplaceholder website',async()=>{
    fetch.mockResponseOnce(
      JSON.stringify({
        data:"mocked data"
      })
    );

    const res = await fetchData('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();


    expect(data.data).toBe("mocked data")
   
  

})


test("get all notes",async()=>{
  const notes = await getAllNotes()
  expect(notes.length).not.toBeFalsy()
})

test("get all notes mocks from the db",async()=>{
  fetch.mockResponseOnce(
    JSON.stringify({
      data:"mocked data123"
    })
  
  )

  const res = await fetchData(new URL("../db.json",import.meta.url).pathname)


const data = await res.json();

console.log(data)

expect(data.data).toBe("mocked data123")

})
