// کورسز کی فہرست (60+)
const courses = [
    { id: 1, title: "Python Programming", price: 4999, views: 0 },
    { id: 2, title: "Digital Marketing", price: 3999, views: 0 }
];

// ادائیگی کے طریقے
function payWithJazzCash() {
    alert("براہ کرم ادائیگی کی تصدیق کے لیے fahadalia729@gmail.com پر ای میل کریں");
}

function payWithEasyPaisa() {
    alert("براہ کرم ادائیگی کی تصدیق کے لیے fahadalia729@gmail.com پر ای میل کریں");
}

function payWithPayPal() {
    window.open("https://paypal.me/fahadali");
}

// ویڈیو ویوز ٹریک کریں
function trackView(courseId) {
    const course = courses.find(c => c.id === courseId);
    course.views++;
    console.log(کورس ${course.title} کے ویوز: ${course.views});
}
