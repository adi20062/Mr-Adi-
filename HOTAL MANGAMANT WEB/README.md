# 🚚 Delivery Management System

A simple **Delivery Management System** built using **HTML, CSS, and JavaScript**.
This project demonstrates how orders are created, assigned, and delivered in a delivery platform.

The system includes three roles:

* **Customer** – Create orders
* **Admin** – Manage and assign orders
* **Delivery Agent** – Deliver assigned orders

All data is stored using **browser localStorage**, so no backend server is required.

---

# 📌 Features

* User role selection (Customer / Admin / Delivery Agent)
* Customer can place new orders
* Admin can view and assign delivery orders
* Delivery agent can mark orders as delivered
* Order status tracking
* Data persistence using **localStorage**

---

# 🧩 Project Structure

```
delivery-management-system/
│
├── index.html        # Login / Role selection
├── customer.html     # Customer dashboard
├── admin.html        # Admin panel
├── delivery.html     # Delivery agent panel
│
├── css/
│   └── style.css     # Styles
│
├── js/
│   └── app.js        # Main logic
│
└── README.md
```

---

# ⚙️ Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* Browser localStorage

---

# 🚀 How to Run

1. Clone the repository

```
git clone https://github.com/your-username/delivery-management-system.git
```

2. Open the project folder

3. Run the project by opening:

```
index.html
```

in your browser.

No server installation required.

---

# 📦 Order Workflow

Customer creates an order

```
Pending
   ↓
Admin assigns delivery
   ↓
Out For Delivery
   ↓
Delivery Agent
   ↓
Delivered
```

---

# 📸 Screenshots (Optional)

You can add screenshots here:

```
/screenshots/login.png
/screenshots/customer-dashboard.png
/screenshots/admin-panel.png
/screenshots/delivery-panel.png
```

---

# ⭐ Future Improvements

* Add real-time tracking
* Add authentication system
* Add database integration
* Improve UI with modern design
* Add analytics dashboard

---

# 📜 License

This project is open-source and available under the MIT License.

---

# 👨‍💻 Author

Developed by **Your Name**

If you like this project, feel free to ⭐ the repository.
