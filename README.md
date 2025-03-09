# CRUD API with Node.js, Express, and MongoDB

This project is a simple **CRUD (Create, Read, Update, Delete) API** built using **Node.js, Express, and MongoDB**. It provides basic operations for managing products in a database.

---

## 📌 Features
- **Create** ➝ Add new products to the database.
- **Read** ➝ Retrieve all or a specific product's details.
- **Update** ➝ Modify product details.
- **Delete** ➝ Remove products from the database.
- **MongoDB Integration** ➝ Uses Mongoose for database operations.
- **Environment Variables** ➝ Secure sensitive data using `.env`.

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Testing:** Postman or Insomnia

---

## 🚀 Installation & Setup

### **1️⃣ Clone the repository**
```sh
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### **2️⃣ Install dependencies**
```sh
npm install
```

### **3️⃣ Setup Environment Variables**
Create a `.env` file in the project root and add:

```ini
PORT=3000
MONGO_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/your-database-name
```

💡 **Important:** Do not push your `.env` file to GitHub. Add `.env` to `.gitignore`.

### **4️⃣ Start the Server**
```sh
npm start
```

Or for development with **nodemon**:
```sh
npm run dev
```

---

## 📡 API Endpoints

### **1️⃣ Create a Product**
* **Endpoint:** `POST /api/products`
* **Body:**
```json
{
  "name": "Laptop",
  "quantity": 10,
  "price": 50000,
  "image": "https://example.com/laptop.jpg"
}
```

### **2️⃣ Get All Products**
* **Endpoint:** `GET /api/products`

### **3️⃣ Get a Single Product**
* **Endpoint:** `GET /api/products/:id`

### **4️⃣ Update a Product**
* **Endpoint:** `PUT /api/products/:id`
* **Body (example update):**
```json
{
  "name": "Gaming Laptop",
  "quantity": 5,
  "price": 70000
}
```

### **5️⃣ Delete a Product**
* **Endpoint:** `DELETE /api/products/:id`

---

## 📌 Project Structure
```
/simple-crud-app
│── /node_modules      # Dependencies
│── /routes            # API routes
│── /models            # Mongoose schemas
│── .env               # Environment variables (ignored in Git)
│── .gitignore         # Ignore unnecessary files
│── package.json       # Project configuration
│── server.js          # Main server file
└── README.md          # Project documentation
```

---

## 🛠️ Dependencies Used
* **express** ➝ Web framework
* **mongoose** ➝ MongoDB ORM
* **dotenv** ➝ Manage environment variables
* **nodemon** ➝ Auto-restart server on changes (for development)

---

## 🏗️ Future Enhancements
* ✅ Add authentication using JWT
* ✅ Implement pagination for large datasets
* ✅ Use a frontend framework like React for UI
