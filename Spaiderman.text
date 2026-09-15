import cv2
import turtle

# اسم ملف الصورة (يجب أن يكون بنفس المجلد مع ملف الكود)
IMAGE = "spiderman.png"

# قراءة الصورة بالأبيض والأسود (Grayscale)
img = cv2.imread(IMAGE, cv2.IMREAD_GRAYSCALE)

if img is None:
    print("Image not found! تأكد من وجود ملف الصورة في نفس المجلد.")
else:
    # معالجة الصورة لاستخراج الخطوط والثنائيات (Thresholding)
    _, thresh = cv2.threshold(img, 200, 255, cv2.THRESH_BINARY_INV)
    
    # استخراج الحدود والمخططات (Contours) من الصورة
    contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    # إعداد نافذة Turtle
    screen = turtle.Screen()
    screen.setup(width=800, height=800)
    screen.bgcolor("white")
    screen.title("Spiderman Drawing - Turtle Graphics")

    # إعداد السلحفاة للرسم بأقصى سرعة
    t = turtle.Turtle()
    t.hideturtle()
    t.speed(0)  # أقصى سرعة للرسم
    t.pensize(1)
    t.color("black")

    # حساب أبعاد الصورة لتوسيط الرسمة بدقة على شاشة Turtle
    height, width = img.shape
    offset_x = -width / 2
    offset_y = height / 2

    print("جاري رسم الصورة، يرجى الانتظار...")

    # رسم كل مسار أو خط مستخرج من الصورة
    for contour in contours:
        if len(contour) > 1:
            t.penup()
            # نقطة البداية للمسار (مع تعديل الإحداثيات لتتوافق مع محاور Turtle)
            start_x = contour[0][0][0] + offset_x
            start_y = offset_y - contour[0][0][1]
            t.goto(start_x, start_y)
            t.pendown()

            # تتبع ورسم باقي نقاط المسار
            for point in contour[1:]:
                x = point[0][0] + offset_x
                y = offset_y - point[0][1]
                t.goto(x, y)

    print("تم الانتهاء من الرسم بنجاح!")
    turtle.done()
  
