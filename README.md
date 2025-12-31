#  Slooze – Commodities Management System (Front-End)

This project is a **front-end implementation** of the Slooze Take-Home Challenge.  
It simulates a **role-based commodities management system** with authentication, dashboard insights, and product management.

Built using **React + Vite + Tailwind CSS**, with a mocked front-end data layer (no backend).

---

##  Features Implemented

###  Authentication & Roles
- Login using **email + password**
- Role-based access:
  - **Manager**
    - Can access Dashboard
    - Can view, add, edit, remove products
  - **Store Keeper**
    - Can view, add, edit, remove products
    - No Dashboard access

#### Demo Credentials
| Role | Email | Password |
|----|------|---------|
| Manager | `manager@gmail.com` | `manager` |
| Store Keeper | `keeper@gmail.com` | `keeper` |

---

###  Manager Dashboard
- Total Products
- Total Stock
- Number of Categories
- Low Stock Alerts (stock < 20)

 Dashboard is **protected via role-based routing**

---

###  Product Management
- View all products
- Add new products
- Edit product stock
- Remove products
- Low-stock items highlighted in red

> Data is stored using a **mocked front-end data layer** (`src/data/products.js`) to simulate backend APIs.

---

### UI & UX
- Clean responsive layout
- Centered navbar logo
- Role-based menu items
- Light / Dark mode toggle (persisted in `localStorage`)
- Styled tables and forms using Tailwind CSS

---

## Tech Stack
- **React** (with Hooks)
- **Vite**
- **Tailwind CSS**
- **React Router**
- Context API (Auth & Theme)

---
## How to run
- npm run dev 

