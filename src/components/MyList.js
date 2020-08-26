import React, { Component } from 'react'
import ListItem from "./ListItem";
import '../App.css'

class MyList extends Component {

  state = {
    toDoItemArray: this.props.theList,
    newItem: ""
  }

  newItemChange(e) {
      this.setState({
          newItem: e.target.value
      })
  }

  addItem(e) {
      e.preventDefault()

      let newToDoArray = this.state.toDoItemArray
      newToDoArray.push(this.state.newItem)
      this.setState({
          newItem: "",
          toDoItemArray: newToDoArray
      })
  }

  clearList(e) {
      console.log("Clearing list!")
      this.setState({
          toDoItemArray: []
      })
  }

  render() {
    let todoItems = this.state.toDoItemArray.map((item, index) => (
      <ListItem doThis={item} key={index} />
    ))

    return (
        <div>
          <h1> Things I should stop procrastinating:</h1>
          <ul>
            {todoItems}
          </ul>
        <button onClick={(e) => this.clearList(e)}>Finished the list!</button>
        <form>
            <input type="text"
                   placeholder="Type an item here"
                   onChange={(e) => this.newItemChange(e)}
                   value={this.state.newItem}
            />
            <button onClick={(e) => this.addItem(e)}>Add it!</button>
        </form>
        </div>
    )
  }
}

export default MyList