# مشروع Junior 4 Science - ملاحظات للشات الجديد

## الهدف
المشروع عبارة عن موقع تعليمي HTML/CSS/JS لشرح Science.
يعتمد على:
- Sidebar navigation
- Slide system
- lessonData object
- reveal animation
- toolbar ثابت
- cards + sections + summary

## الملفات المهمة في النظام الحالي
- index.html
- assets/css/style.css
- assets/js/script.js

## شكل أي session
أي سيشن جديدة تتكون من:
1. ملف HTML للسيشن
2. ملف JS للداتا (lessonData)

## نظام السيشن الحالي
الـ HTML بيربط:
- style.css
- script.js
- lessonData file

## خصائص النظام الحالية
- العنوان والمعلومة يظهروا في الهيدر
- progress bar
- slidesContainer
- toolbar فيها:
  - previous
  - play
  - pause
  - next
  - restart
  - home
  - fullscreen
- reveal animation
- sections داخل نفس السلايد
- cards
- summary slide

## قواعد مهمة
- كل Activity = slide واحدة
- آخر slide = Summary
- نحافظ على نفس النظام البصري
- الكود المطلوب يكون كامل وليس أجزاء
- لو في تعديل، يكون مبني على نفس style الحالي

## نظام تسمية الصور
بدون underscore

مثال:
- u3c2a10.jpg
- u3c2a102.jpg
- u3c2a103.jpg

المعنى:
- u3 = Unit 3
- c2 = Concept 2
- a10 = Activity 10

## نظام الصور
كل سيشن جديد ممكن يبقى له فولدر خاص داخل:
assets/images/s1/
assets/images/s2/
assets/images/s3/
... إلخ

ويتم تعريف:
const imgPath = "assets/images/sX/";

## المطلوب من الشات الجديد
- يلتزم بالنظام الحالي 100%
- يكتب ملفات كاملة
- لا يغير شكل النظام إلا بطلب واضح
- يستخدم نفس lessonData structure
- يحافظ على cards / sections / summary / toolbar / reveal animation

## تمبلت الاستخدام
لو هتعمل سيشن جديدة:
- انسخ template_session.html
- انسخ template_lesson_data.js
- غيّر المحتوى فقط
- لا تغيّر النظام العام

## جملة بداية مناسبة للشات الجديد
أنا عندي مشروع موقع تعليمي HTML/CSS/JS
وده النظام الحالي بتاعه.
عايزك تشتغل بنفس النظام 100% من غير ما تغيّر الستايل العام.
استخدم الملفات المرجعية المرفقة.
