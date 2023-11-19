const translations = {
  ar: {
    "digital-business": "الأعمال الرقمية",
    "digital-business-slogan": "الأعمال الرقمية من البداية إلى الإطلاق!",
    "digital-business-description":
      "هم منتجات إلكترونية جاهزة للاستخدام على شكل منصات وتطبيقات وأعمال دعم ذات صلة. بالإضافة إلى الحلول التقنية المتكاملة التي تهدف إلى تطوير منتجات مبتكرة وفقًا لاحتياجات العملاء.",
    "digital-business-lang": "English",
    'sign-in-to-your-account': 'تسجيل الدخول إلى حسابك',
    'username-or-email': 'اسم المستخدم أو البريد الإلكتروني',
    'sign-in': 'تسجيل دخول',
    'sign-up': 'مستخدم جديد',
    'password': 'كلمة السر',
    'remember-me': 'تذكرني',
    'login': 'تسجيل الدخول',
    'forgot-password': 'هل نسيت كلمة السر؟',
    'username': 'اسم المستخدم',
    'email': 'البريد الإلكتروني',
    'confirm-password': 'تأكيد كلمة السر',
    'sign-up': 'إنشاء حساب'
  },
  en: {
    "digital-business": "Digital Business",
    "digital-business-slogan": "Digital Business From Scratch to Launch!",
    "digital-business-description":
      "They are ready-to-use electronic products in the form of platforms, applications, and related support work. In addition to integrated technical solutions that aimed in developing innovative products according to the customer's need.",
    "digital-business-lang": "عربي",
    'sign-in-to-your-account': 'Sign in to your account',
    'username-or-email': 'username or email',
    'sign-in': 'sign in',
    'sign-up': 'sign-up',
    'password': 'Password',
    'remember-me': 'Remember me',
    'login': 'Login',
    'forgot-password': 'Forgot password',
    'username': 'username',
    'email': 'Email',
    'confirm-password': 'Confirm password',
    'sign-up': 'Sign Up'
  },
};
function translatePageTo(language) {
  document.querySelectorAll("[data-lang]").forEach((elem) => {
    const key = elem.getAttribute("data-lang");
    if (translations[language] && translations[language][key]) {
      elem.textContent = translations[language][key];
    }
  });
}

// Function to toggle language
function toggleLanguage() {
  var html = document.documentElement;
  if (html.getAttribute("lang") === "en") {
    setLanguage("ar");
    translatePageTo("ar");
  } else {
    setLanguage("en");
    translatePageTo("en");
  }
}
// Function to set language
function setLanguage(lang) {
  var html = document.documentElement;
  if (lang === "ar") {
    html.classList.remove("ltr");
    html.classList.add("rtl");
    localStorage.setItem("lang", "ar");
    html.lang = "ar";
  } else {
    html.classList.remove("rtl");
    html.classList.add("ltr");
    localStorage.setItem("lang", "en");
    html.lang = "en";
  }
}

document.addEventListener("DOMContentLoaded", function () {
var savedLang = localStorage.getItem('lang');
    if (savedLang) {
        setLanguage(savedLang);
    }
});
