import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ];
  const [showAddFriend, setShowAddFriend] = useState(false);
  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList initialFriends={initialFriends} />
        {showAddFriend && <FormAddFriend />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;

function FriendsList({ initialFriends }) {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend} />
      <h3>{friend.name} </h3>
      {friend.balance < 0 && (
        <p className="red">
          You Owe {friend.name} {Math.abs(friend.balance)} Rupees
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} Owes you {Math.abs(friend.balance)} Rupees
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are Even</p>}

      <Button>Select</Button>
    </li>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function FormAddFriend() {
  const [name, setname] = useState("");
  const [Image, setimage] = useState("");
  return (
    <form className="form-add-friend">
      <label>Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <label>Image url</label>
      <input
        type="text"
        value={Image}
        onChange={(e) => setimage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>
      <label>Bill value</label>
      <input type="text" />
      <label>Your Expense</label>
      <input type="text" />
      <label>X's expense</label>
      <input type="text" disabled />
      <label>Who is paying the bill</label>
      <section>
        <option value="user">You</option>
        <option value="friend">X</option>
      </section>
      <Button>Split Bill</Button>
    </form>
  );
}
