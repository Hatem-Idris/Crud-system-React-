import { useState } from "react";
export default function App() {
  const [isshowen, setisshowen] = useState(false); // boolean
  const [phones, setPhones] = useState([
    { name: "iPhone x", price: 500, qty: 3 },
    { name: "iPhone 11", price: 550, qty: 3 },
    { name: "iPhone 12", price: 600, qty: 3 },
    { name: "iPhone 13", price: 550, qty: 3 },
    { name: "iPhone 14", price: 550, qty: 3 },
    { name: "iPhone 15", price: 550, qty: 3 },
  ]);
  const addNewPhone = () => {
    let newPhoneName = prompt("Please Enter New Phone Name");
    let newPhonePrice = +prompt("Enter New Phone Price");
    let newQty = +prompt("Enter new phone Qty");
    let newObj = {
      name: newPhoneName,
      price: newPhonePrice,
      qty: newQty,
    };
    let copy = [...phones];
    copy.push(newObj);
    setPhones(copy);
  };
  const deletephone = () => {
    let deleteindex = +prompt("Please enter phone index you want to delete");
    let copy = [...phones];
    copy.splice(deleteindex - 1, 1);
    setPhones(copy);
  };
  const showphone = () => {
    setisshowen(!isshowen);
  };
  const editphone = () => {
    let editindex = +prompt("Enter phone index you want to edit");
    let indexnumber=editindex-1
    let newphonename = prompt("Please enter new phone name");
    let newphoneprice = +prompt("Please enter new phone price");
    let newphoneQTY = +prompt("Please enter new phone QTY");
    let editedphone = {
      name: newphonename,
      price: newphoneprice,
      qty: newphoneQTY,
    };
    phones[indexnumber] = editedphone;
    let copy = [...phones];
    setPhones(copy);
  };
  // map()
  return (
    <div>
      <div className="flex flex-wrap justify-evenly border-b-2 border-b-neutral-950 p-2 gap-5 mb-5">
        <button
          onClick={() => {
            addNewPhone();
          }}
          className="btn btn-success text-white"
        >
          Add New Phone
        </button>
        <button
          onClick={() => {
            showphone();
          }}
          className="btn btn-primary"
        >
          {isshowen ? "Hide Phones" : "Show Phones"}
        </button>
        <button
          onClick={() => {
            editphone();
          }}
          className="btn btn-info"
        >
          Edit Phone
        </button>
        <button
          onClick={() => {
            deletephone();
          }}
          className="btn btn-error text-white"
        >
          Delete Phone
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item Name</th>
            <th>Item Price</th>
            <th>Item Qty</th>
            <th>Item Total</th>
          </tr>
        </thead>
        <tbody>
          {phones.map((el, index) => {
            return (
              <tr id="showlist" className={isshowen ? "" : "hidden"}>
                <td>{index + 1}</td>
                <td>{el.name}</td>
                <td>{el.price}</td>
                <td>{el.qty}</td>
                <td>{el.price * el.qty}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
