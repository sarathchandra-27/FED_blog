import React from "react";
import Sidebar from "./Sidebar";
//import image1 from './image1.png';
//import image2 from './image2.png';
//import image3 from './image3.png';
//import image4 from './image4.png';

const Main = () => {
    return (

    <div>

  <div className="article">
     <table className="tab">
      <h1><u>Destructuring elements</u></h1>
      <tr><h2 align="left"><u>Introduction:</u></h2></tr>
      <tr><div><p><b>Destructuring,</b><br/>
To illustrate destructuring, we'll make a sandwich. Do you take everything out of the refrigerator to make your sandwich? No, you only take out the items you would like to use on your sandwich.

Destructuring is exactly the same. We may have an array or object that we are working with, but we only need some of the items contained in these.

Destructuring makes it easy to extract only what is needed.</p></div></tr>
      <tr><h2 align="left"><u>Destructing Arrays:</u></h2>
      <li><p>Here is the old way of assigning array items to a variable:</p>

<div>
<h3>Before:</h3>
<div><p>const vehicles = ['mustang', 'f-150', 'expedition'];<br/>

<b>// old way</b><br/>
const car = vehicles[0];<br/>
const truck = vehicles[1];<br/>
const suv = vehicles[2];<br/></p></div>

<p>Here is the new way of assigning array items to a variable:</p></div>

<div>
<h3>With destructuring:</h3>
const vehicles = ['mustang', 'f-150', 'expedition'];<br/>
const [car, truck, suv] = vehicles;<br/>
</div>

<div>
<p><h5>When destructuring arrays, the order that variables are declared is important.</h5></p>
</div>

<p>If we only want the car and suv we can simply leave out the truck but keep the comma:</p>

<div>
const vehicles = ['mustang', 'f-150', 'expedition'];<br/>
const [car,, suv] = vehicles;<br/>
</div>
<h2>Destructuring Objects</h2>
<p>Here is the old way of using an object inside a function:</p><br/>

<div>
<h3>Before:</h3><br/>
<div><p>
const vehicleOne = (<br/>
  brand: 'Ford',<br/>
  model: 'Mustang',<br/>
  type: 'car',<br/>
  year: 2021, <br/>
  color: 'red'<br/>
    )<br/>

myVehicle(vehicleOne);<br/>

<b>// old way</b><br/>
function myVehicle(vehicle) (<br/>
  const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';<br/>
)<br/>
</p></div>
</div>

<p>Here is the new way of using an object inside a function:</p>

<div class="w3-example">
<h3>With destructuring:</h3>
<div><p>const vehicleOne = (<br/>
  brand: 'Ford',<br/>
  model: 'Mustang',<br/>
  type: 'car',<br/>
  year: 2021, <br/>
  color: 'red'<br/>
)<br/>

myVehicle(vehicleOne);<br/>

function myVehicle((type, color, brand, model)) (<br/>
  const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';<br/>
)<br/>
</p></div>
</div></li></tr><br/>
      
          <tr><h2 align="left">Conclusion</h2>
          <p>This is about Destructing elements in React</p>
          </tr>



      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
     </table>


   </div>
    <Sidebar />
    </div>
    )
};

export default Main;