function List() {
  const fruits = [{id: 1, name: "apple", calories: 98}, 
                  {id: 2, name: "orange", calories: 45}, 
                  {id: 3, name: "banana", calories: 105}, 
                  {id: 4, name: "coconut", calories: 159}, 
                  {id: 5, name: "pineapple", calories: 37}]
  
  // fruits.sort((a, b) => a.name.localeCompare(b.name)) //Alphabetical order
  // fruits.sort((a, b) => b.name.localeCompare(a.name)) //Reverse Alphabetical order
  // fruits.sort((a, b) => a.calories - b.calories) //Numerically
  // fruits.sort((a, b) => b.calories - a.calories) //Reverse Numerically

  const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
  const highCalFruits = fruits.filter(fruit => fruit.calories >= 100)

  const listItems = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>
                                                        {highCalFruit.name}: &nbsp;
                                                        <b>{highCalFruit.calories}</b></li>)

  return(<ol>{listItems}</ol>)
}

export default List