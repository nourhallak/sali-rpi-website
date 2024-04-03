export default function idk() {
  return (
       <body>
          <div className="content">
             <label>Full Keyboard Example</label><br/>
             <textarea className="virtual-keyboard" data-kioskboard-type="all" data-kioskboard-specialcharacters="true" placeholder="Your Address"></textarea>
             <br/>
             <label>Keyboard Example with no top row of numbers or special characters</label><br/>
             <input className="virtual-keyboard" data-kioskboard-type="keyboard" data-kioskboard-specialcharacters="false" placeholder="Your Name" />
             <br/>
             <br/>
             <label>Number Pad Example</label><br/>
             <input className="virtual-keyboard" data-kioskboard-type="numpad" placeholder="Your Number" /> 
          </div>
    <script src="initialize.js"></script>   </body>
  );
}