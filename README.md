# 🚦 Traffic Light Simulator  

A simple interactive traffic light built with **React.js**. The traffic light changes color when clicked and supports additional features like cycling colors and adding a new light.  

---

## ⚙️ How It Works  

1. **Traffic Light Display**  
   - The component shows **Red, Yellow, and Green** lights.  
   - Only one light glows at a time.  

2. **Click to Change**  
   - When a light is clicked, it becomes the active glowing light.  
   - The other lights turn off.  

3. **State Management**  
   - The active color is tracked using React’s `useState` hook:  
     ```js
     const [color, setColor] = useState("red");
     ```  
   - `setColor` updates the active light and re-renders the component.  

4. **Rendering**  
   - The component is rendered with:  
     ```js
     const root = ReactDOM.createRoot(document.querySelector('#root'));
     root.render(<TrafficLight />);
     ```  

---

## 🔥 Bonus Features  

- **Cycle Button** → A button that cycles between **Red → Green → Yellow → Red**.  
- **Add Purple Light** → A button that adds an extra **Purple** light to the traffic light.  

---

## 🚀 Running the App  

1. Install dependencies:  
   ```bash
   npm install
