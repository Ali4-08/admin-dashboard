# Admin Dashboard - React + Vite + TailwindCSS

یک پروژه **Admin Dashboard** حرفه‌ای ساخته شده با **React**, **Vite**, **TailwindCSS**, **Recharts** و مدیریت کاربران و محصولات با **CRUD** و **Dark Mode**.  
این پروژه یک نمونه واقعی برای یادگیری و نمایش مهارت‌های **Front-End** در رزومه است.

---

## ویژگی‌ها

- طراحی کاملاً **رسپانسیو** برای موبایل، تبلت و دسکتاپ  
- حالت **Dark Mode** و تغییر پویا با Context API  
- **CRUD Users & Products** با ذخیره‌سازی در LocalStorage  
- نمودار فروش ماهانه با **Recharts**  
- مدیریت مسیرها با **React Router** و **ProtectedRoute**  
- منوی مخصوص **Admin** که فقط برای کاربران با نقش `admin` نمایش داده می‌شود  
- ورود فیک (Fake Login) با ایمیل و رمز  

---

## نقش‌ها و دسترسی‌ها

- **Admin**  
  - ایمیل: `admin@mail.com`  
  - رمز: هر چیزی (به صورت فیک)  
  - دسترسی کامل به منوها و صفحات مدیریت کاربران و محصولات

- **User**  
  - هر ایمیل غیر از admin  
  - دسترسی محدود به منوهای عمومی (بدون منوی Admin Panel)

> ⚠️ توجه: نقش‌ها در LocalStorage ذخیره می‌شوند و سیستم Login صرفاً برای تست و نمونه است.

---

## نصب و اجرای پروژه به صورت محلی

```bash
# کلون کردن ریپازیتوری
git clone <your-github-repo-link>
cd <project-folder>

# نصب وابستگی‌ها
npm install

# اجرای پروژه
npm run dev

پروژه در حالت توسعه روی http://localhost:5173 اجرا می‌شود

برای تولید نسخه Production از دستور زیر استفاده کنید:
npm run build

مشاهده آنلاین
برای مشاهده نسخه آنلاین پروژه، روی لینک زیر کلیک کنید:
https://admin-dashboard-beryl-six-37.vercel.app

ساختار پروژه

src/
 ├─ components/
 │   ├─ Navbar.jsx
 │   ├─ Sidebar.jsx
 │   ├─ Card.jsx
 │   ├─ Chart.jsx
 │   ├─ Table.jsx
 │   └─ ProductTable.jsx
 ├─ context/
 │   ├─ ThemeContext.jsx
 │   └─ AuthContext.jsx
 ├─ pages/
 │   ├─ Dashboard.jsx
 │   ├─ Users.jsx
 │   ├─ Products.jsx
 │   └─ Login.jsx
 ├─ App.jsx
 └─ main.jsx

تکنولوژی‌ها و کتابخانه‌ها

React 18 + Vite
TailwindCSS برای طراحی
Recharts برای نمودارها
React Router DOM برای مدیریت مسیرها
Lucide Icons برای آیکون‌ها
Context API برای Theme و Auth

نکات تکمیلی

اگر ایمیل admin@mail.com وارد شود، Admin Panel Menu در Sidebar ظاهر می‌شود.
سایر ایمیل‌ها فقط منوهای عمومی را می‌بینند.
سیستم Login فیک است و صرفاً برای آموزش و نمونه پروژه کاربرد دارد.