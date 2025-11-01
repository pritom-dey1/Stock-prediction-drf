# Django + DRF + JWT Authentication Setup

This project demonstrates how to set up **Django REST Framework (DRF)** authentication with **JWT (JSON Web Token)** and React frontend support.

---

## 🚀 Tech Stack

**Frontend:** React.js, Tailwind CSS 
**Backend:** Django REST Framework (DRF)  
**Database:** SQLite  
**Authentication:** JWT (via `rest_framework_simplejwt`)  
**CORS:** django-cors-headers  
**Version Control:** Git & GitHub  

---

## ⚙️ Project Setup

### 1️⃣ Clone Repository
```bash
git clone https://github.com/yourusername/yourproject.git
cd yourproject
```

### 2️⃣ Create Virtual Environment
```bash
python -m venv venv
venv\Scripts\activate  # On Windows
source venv/bin/activate  # On Mac/Linux
```

### 3️⃣ Install Dependencies
```bash
pip install -r requirements.txt
```

### 4️⃣ Environment Variables
Create a `.env` file in the project root and add:
```
SECRET_KEY=your_secret_key
DEBUG=True
```

### 5️⃣ Run Migrations
```bash
python manage.py migrate
```

### 6️⃣ Run Server
```bash
python manage.py runserver
```

---

## 🔑 API Endpoints

| Endpoint | Method | Description |
|-----------|--------|--------------|
| `/api/register/` | POST | Register new user |
| `/api/token/` | POST | Obtain JWT token |
| `/api/token/refresh/` | POST | Refresh JWT token |
| `/api/protected-view/` | GET | Example of protected route (requires token) |

---

## 🔐 JWT Setup
JWT authentication is enabled using **`rest_framework_simplejwt`**.

Add this to `settings.py`:
```python
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
}
```

---

## 🌐 CORS Setup
CORS is enabled for React frontend:

```python
CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173"
]
```

Install:
```bash
pip install django-cors-headers
```

Add to `INSTALLED_APPS` and `MIDDLEWARE` as shown in settings.

---

## 🧠 Folder Structure

```
stock_prediction/
│
├── account/
│   ├── views.py
│   ├── serializers.py
│   └── urls.py
│
├── apis/
│
├── stock_prediction/
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
│
└── manage.py
```

---

## ✅ Test Protected Route

Send `Authorization: Bearer <your_token>` header in request to `/api/protected-view/`

---

## 🧩 Example Register Payload

```json
{
  "username": "pritom",
  "email": "pritom@example.com",
  "password": "12345"
}
```

---

## 🛠️ Future Improvements
- Add Google OAuth login (dj-rest-auth + allauth)
- Add password reset system
- Add email verification

---

## 👨‍💻 Author
**Pritom Dey**  
_Developed with Django REST Framework & JWT_
