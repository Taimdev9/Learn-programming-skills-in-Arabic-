/* ============================================================
   TaimCode — الدروس (الجزء 1/2)
   HTML + CSS
   Dev: Taimdev9
   ============================================================ */

window.COURSES = window.COURSES || [];

window.COURSES.push(

/* ==================== HTML ==================== */
{
  id: 'html',
  name: 'HTML',
  icon: '</>',
  color: '#e34c26',
  desc: 'هيكل صفحات الويب: الوسوم، العناصر، الروابط، الصور، النماذج.',
  lessons: [
    {
      id: 'html-1',
      title: 'ما هو HTML ولماذا نتعلمه؟',
      file: 'index.html',
      mode: 'html',
      body: `
        <h2>تعريف HTML</h2>
        <p><strong>HTML</strong> اختصار لـ <em>HyperText Markup Language</em> أي «لغة توصيف النص التشعبي». هي اللغة التي تُبنى بها <strong>هياكل</strong> صفحات الويب، وليست لغة برمجة بالمعنى الكامل — فهي لا تحتوي شروطًا أو حلقات.</p>
        <h2>فكرة الوسوم (Tags)</h2>
        <p>يكتب HTML على شكل وسوم محصورة بين قوسين زاويّين، ومعظمها يأتي مزدوجًا: وسم فتح ووسم إغلاق.</p>
        <pre><code>&lt;h1&gt;هذا عنوان&lt;/h1&gt;
&lt;p&gt;هذه فقرة نصية.&lt;/p&gt;</code></pre>
        <div class="note"><b>ملاحظة</b> وسم الإغلاق يحتوي على شرطة مائلة <code>/</code> قبل الاسم.</div>
        <h2>الهيكل الأساسي لأي صفحة</h2>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="ar" dir="rtl"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;عنوان الصفحة&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  المحتوى المرئي هنا
&lt;/body&gt;
&lt;/html&gt;</code></pre>
        <ul>
          <li><code>&lt;!DOCTYPE html&gt;</code> تخبر المتصفح أن الملف HTML5.</li>
          <li><code>&lt;head&gt;</code> معلومات لا تظهر للمستخدم (الترميز، العنوان، ملفات CSS).</li>
          <li><code>&lt;body&gt;</code> كل ما يراه المستخدم فعليًا.</li>
        </ul>
        <div class="tip"><b>جرّب الآن</b> عدّل الكود في المحرر بالأسفل ثم اضغط «شغّل الكود» لتشاهد النتيجة فورًا.</div>
      `,
      code: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>أول صفحة لي</title>
</head>
<body style="font-family:sans-serif;padding:20px;text-align:center">
  <h1>مرحبًا بك في TaimCode 👋</h1>
  <p>هذه أول صفحة HTML أكتبها بنفسي.</p>
  <p>تعلمت اليوم معنى الوسوم والهيكل الأساسي.</p>
</body>
</html>`
    },
    {
      id: 'html-2',
      title: 'العناوين والفقرات والنصوص',
      file: 'text.html',
      mode: 'html',
      body: `
        <h2>عناوين من h1 إلى h6</h2>
        <p>يوجد ستة مستويات من العناوين، حيث <code>h1</code> الأكبر والأهم و<code>h6</code> الأصغر.</p>
        <pre><code>&lt;h1&gt;عنوان رئيسي&lt;/h1&gt;
&lt;h2&gt;عنوان فرعي&lt;/h2&gt;
&lt;h3&gt;عنوان أصغر&lt;/h3&gt;</code></pre>
        <div class="warn"><b>تنبيه</b> استخدم <code>h1</code> مرة واحدة فقط في الصفحة، لأن محركات البحث تعتمد عليها لفهم الموضوع الرئيسي.</div>
        <h2>الفقرات</h2>
        <p>الفقرة تُكتب بوسم <code>&lt;p&gt;</code>. المتصفح يتجاهل المسافات الزائدة والأسطر الجديدة داخل الفقرة.</p>
        <h2>وسوم تنسيق النص</h2>
        <ul>
          <li><code>&lt;strong&gt;</code> نص <strong>مهم</strong> (عريض دلاليًا).</li>
          <li><code>&lt;em&gt;</code> نص <em>مُشدَّد</em> (مائل دلاليًا).</li>
          <li><code>&lt;br&gt;</code> سطر جديد داخل نفس الفقرة.</li>
          <li><code>&lt;hr&gt;</code> خط فاصل أفقي.</li>
          <li><code>&lt;mark&gt;</code> تظليل <mark>النص</mark>.</li>
        </ul>
        <div class="tip"><b>نصيحة</b> لا تستخدم <code>&lt;b&gt;</code> و<code>&lt;i&gt;</code> للدلالة، فهما للتنسيق البصري فقط. استخدم <code>strong</code> و<code>em</code> لأن لهما معنى.</div>
      `,
      code: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head><meta charset="UTF-8"><title>النصوص</title></head>
<body style="font-family:sans-serif;padding:20px;line-height:1.9">

  <h1>دليل تعلّم البرمجة</h1>
  <h2>الفصل الأول: البداية</h2>

  <p>البرمجة هي <strong>مهارة عملية</strong> تُبنى بالممارسة اليومية،
     وليست مجرد <em>حفظ أوامر</em>.</p>

  <hr>

  <h3>خطوات البدء</h3>
  <p>اختر لغة واحدة، وابدأ بمشروع صغير، ثم <mark>كرّر</mark> المحاولة.</p>

</body>
</html>`
    },
    {
      id: 'html-3',
      title: 'الروابط والصور',
      file: 'links.html',
      mode: 'html',
      body: `
        <h2>الروابط &lt;a&gt;</h2>
        <p>وسم الرابط <code>&lt;a&gt;</code> يحتوي دائمًا على الخاصية <code>href</code> التي تحدد الوجهة.</p>
        <pre><code>&lt;a href="https://example.com"&gt;زيارة الموقع&lt;/a&gt;
&lt;a href="about.html"&gt;صفحة داخلية&lt;/a&gt;
&lt;a href="#section"&gt;انتقال داخلي&lt;/a&gt;</code></pre>
        <h3>الخاصية target</h3>
        <ul>
          <li><code>target="_self"</code> يفتح في نفس التبويب (افتراضي).</li>
          <li><code>target="_blank"</code> يفتح في تبويب جديد.</li>
        </ul>
        <h2>الصور &lt;img&gt;</h2>
        <p>وسم الصورة <strong>مفرد</strong> ولا يحتاج إغلاقًا، ويعتمد على خاصيتين أساسيتين:</p>
        <pre><code>&lt;img src="photo.jpg" alt="وصف الصورة"&gt;</code></pre>
        <div class="note"><b>مهم</b> الخاصية <code>alt</code> تظهر عند فشل تحميل الصورة، وتساعد قارئات الشاشة للمكفوفين، وتحسّن ترتيبك في محركات البحث.</div>
        <h2>المسارات</h2>
        <ul>
          <li><strong>مطلق:</strong> <code>https://site.com/img.png</code></li>
          <li><strong>نسبي:</strong> <code>images/img.png</code></li>
          <li><strong>للأعلى:</strong> <code>../img.png</code></li>
        </ul>
      `,
      code: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head><meta charset="UTF-8"><title>الروابط والصور</title></head>
<body style="font-family:sans-serif;padding:20px;line-height:2">

  <h1>مشاهدة الصور والروابط</h1>

  <a href="https://github.com" target="_blank">زيارة GitHub</a>
  <br><br>

  <img
    src="https://picsum.photos/300/180"
    alt="صورة عشوائية للتجربة"
    style="border-radius:12px;max-width:100%">

  <p>هذه صورة محمّلة من الإنترنت باستخدام وسم img.</p>

</body>
</html>`
    },
    {
      id: 'html-4',
      title: 'القوائم والجداول',
      file: 'lists.html',
      mode: 'html',
      body: `
        <h2>القوائم</h2>
        <p>نوعان رئيسيان:</p>
        <ul>
          <li><code>&lt;ul&gt;</code> قائمة غير مرقّمة (نقاط).</li>
          <li><code>&lt;ol&gt;</code> قائمة مرقّمة (1، 2، 3).</li>
          <li>العنصر داخل أي قائمة يُكتب بوسم <code>&lt;li&gt;</code>.</li>
        </ul>
        <pre><code>&lt;ul&gt;
  &lt;li&gt;تفاح&lt;/li&gt;
  &lt;li&gt;موز&lt;/li&gt;
&lt;/ul&gt;</code></pre>
        <h2>الجداول</h2>
        <p>الجدول يُبنى من صفوف وأعمدة:</p>
        <ul>
          <li><code>&lt;table&gt;</code> الجدول كامل.</li>
          <li><code>&lt;tr&gt;</code> صف واحد (Table Row).</li>
          <li><code>&lt;th&gt;</code> خلية رأس عريضة.</li>
          <li><code>&lt;td&gt;</code> خلية بيانات عادية.</li>
          <li><code>&lt;thead&gt;</code> و<code>&lt;tbody&gt;</code> لتقسيم الرأس والجسم.</li>
        </ul>
        <div class="tip"><b>نصيحة</b> لا تستخدم الجداول لتخطيط الصفحة، فهذا دور CSS Flexbox و Grid.</div>
      `,
      code: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head><meta charset="UTF-8"><title>القوائم والجداول</title></head>
<body style="font-family:sans-serif;padding:20px;line-height:1.9">

  <h2>لغات البرمجة التي أتعلمها</h2>
  <ul>
    <li>HTML لبناء الهيكل</li>
    <li>CSS للتنسيق</li>
    <li>JavaScript للتفاعل</li>
  </ul>

  <h2>خطوات التعلم بالترتيب</h2>
  <ol>
    <li>اتقن الأساسيات</li>
    <li>طبّق مشروعًا صغيرًا</li>
    <li>كرّر وطوّر</li>
  </ol>

  <h2>مقارنة سريعة</h2>
  <table border="1" cellpadding="10" style="border-collapse:collapse">
    <thead style="background:#eee">
      <tr><th>اللغة</th><th>الاستخدام</th></tr>
    </thead>
    <tbody>
      <tr><td>HTML</td><td>الهيكل</td></tr>
      <tr><td>CSS</td><td>التصميم</td></tr>
      <tr><td>JavaScript</td><td>التفاعل</td></tr>
    </tbody>
  </table>

</body>
</html>`
    },
    {
      id: 'html-5',
      title: 'النماذج Forms والمدخلات',
      file: 'form.html',
      mode: 'html',
      body: `
        <h2>ما هو النموذج؟</h2>
        <p>النموذج <code>&lt;form&gt;</code> يُستخدم لإرسال بيانات المستخدم إلى الخادم: تسجيل دخول، بحث، تعليق… إلخ.</p>
        <h2>وسم الإدخال &lt;input&gt;</h2>
        <p>وسم مفرد، ويتغيّر شكله وسلوكه حسب الخاصية <code>type</code>:</p>
        <ul>
          <li><code>text</code> نص عادي</li>
          <li><code>email</code> بريد إلكتروني</li>
          <li><code>password</code> كلمة مرور مخفية</li>
          <li><code>number</code> أرقام فقط</li>
          <li><code>checkbox</code> مربع اختيار</li>
          <li><code>radio</code> اختيار واحد من عدة</li>
          <li><code>date</code> تاريخ</li>
        </ul>
        <h2>الوسوم المهمة الأخرى</h2>
        <ul>
          <li><code>&lt;label&gt;</code> تسمية الحقل، وترتبط به عبر <code>for</code> و<code>id</code>.</li>
          <li><code>&lt;textarea&gt;</code> نص طويل متعدد الأسطر.</li>
          <li><code>&lt;select&gt;</code> قائمة منسدلة، وعناصرها <code>&lt;option&gt;</code>.</li>
          <li><code>&lt;button&gt;</code> زر الإرسال.</li>
        </ul>
        <div class="note"><b>الخاصية required</b> تجعل الحقل إلزاميًا، و<code>placeholder</code> تعرض نصًا إرشاديًا باهتًا.</div>
      `,
      code: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head><meta charset="UTF-8"><title>نموذج</title></head>
<body style="font-family:sans-serif;padding:20px;line-height:2">

  <h2>نموذج تسجيل</h2>

  <form>
    <label for="name">الاسم:</label><br>
    <input id="name" type="text" placeholder="اكتب اسمك" required><br><br>

    <label for="mail">البريد:</label><br>
    <input id="mail" type="email" placeholder="you@mail.com"><br><br>

    <label for="pass">كلمة المرور:</label><br>
    <input id="pass" type="password"><br><br>

    <label for="lang">اللغة المفضلة:</label><br>
    <select id="lang">
      <option>HTML</option>
      <option>CSS</option>
      <option>JavaScript</option>
      <option>Python</option>
    </select><br><br>

    <label for="msg">ملاحظات:</label><br>
    <textarea id="msg" rows="3" cols="30"></textarea><br><br>

    <button type="button">إرسال</button>
  </form>

</body>
</html>`
    }
  ]
},

/* ==================== CSS ==================== */
{
  id: 'css',
  name: 'CSS',
  icon: '#',
  color: '#264de4',
  desc: 'تنسيق الصفحات: الألوان، الخطوط، الصندوق، Flexbox، والتصميم المتجاوب.',
  lessons: [
    {
      id: 'css-1',
      title: 'مقدمة إلى CSS وطرق ربطه',
      file: 'style.css',
      mode: 'css',
      body: `
        <h2>ما هي CSS؟</h2>
        <p><strong>CSS</strong> اختصار لـ <em>Cascading Style Sheets</em> أي «أوراق الأنماط المتتالية». مهمتها تنسيق شكل عناصر HTML: الألوان، الأحجام، المسافات، الترتيب.</p>
        <h2>صيغة القاعدة</h2>
        <pre><code>المحدد {
  الخاصية: القيمة;
}</code></pre>
        <pre><code>h1 {
  color: red;
  font-size: 32px;
}</code></pre>
        <h2>ثلاث طرق لربط CSS</h2>
        <ol>
          <li><strong>داخلي Inline:</strong> عبر الخاصية <code>style</code> مباشرة على العنصر.</li>
          <li><strong>داخلي Internal:</strong> داخل وسم <code>&lt;style&gt;</code> في الـ head.</li>
          <li><strong>خارجي External:</strong> ملف <code>.css</code> منفصل — <strong>الأفضل دائمًا</strong>.</li>
        </ol>
        <pre><code>&lt;link rel="stylesheet" href="style.css"&gt;</code></pre>
        <div class="tip"><b>لماذا الملف الخارجي؟</b> لأنك تكتب التنسيق مرة واحدة ويُطبَّق على كل الصفحات، وسهل التعديل والصيانة.</div>
        <h2>الوراثة والتتالي</h2>
        <p>بعض الخصائص مثل <code>color</code> و<code>font-family</code> <strong>تُورَّث</strong> من العنصر الأب للأبناء. وعند تعارض قاعدتين، تفوز الأكثر تخصيصًا أو الأحدث.</p>
      `,
      code: `/* اكتب تنسيقك هنا */
body {
  background: #0f172a;
  color: #e2e8f0;
  font-family: sans-serif;
  padding: 24px;
}

h2 {
  color: #22d3ee;
  border-bottom: 3px solid #22d3ee;
  padding-bottom: 8px;
}

.box {
  background: #1e293b;
  border-radius: 12px;
  padding: 18px;
  margin-bottom: 14px;
  box-shadow: 0 6px 18px rgba(0,0,0,.35);
}

p {
  line-height: 1.9;
}

button {
  background: #7c5cff;
  color: #fff;
  border: none;
  padding: 10px 22px;
  border-radius: 10px;
  font-size: 15px;
  cursor: pointer;
}`
    },
    {
      id: 'css-2',
      title: 'المحددات Selectors',
      file: 'selectors.css',
      mode: 'css',
      body: `
        <h2>أنواع المحددات</h2>
        <ul>
          <li><strong>الوسم:</strong> <code>p { }</code> يستهدف كل الفقرات.</li>
          <li><strong>الصنف:</strong> <code>.box { }</code> يستهدف كل عنصر يحمل class="box".</li>
          <li><strong>المعرّف:</strong> <code>#main { }</code> يستهدف عنصرًا واحدًا فقط.</li>
          <li><strong>العام:</strong> <code>* { }</code> يستهدف كل العناصر.</li>
        </ul>
        <h2>المحددات المركّبة</h2>
        <pre><code>div p      /* كل p داخل أي div */
div > p    /* p الابن المباشر فقط */
p + p      /* p يأتي مباشرة بعد p */
p ~ p      /* كل p بعدها p شقيقة */
a:hover    /* عند مرور الماوس */
input:focus /* عند التركيز */</code></pre>
        <h2>الأولوية (Specificity)</h2>
        <p>عند التعارض، المتصفح يحسب نقاطًا:</p>
        <ol>
          <li>Inline style — الأعلى</li>
          <li>المعرّف <code>#id</code></li>
          <li>الصنف <code>.class</code> والـ pseudo</li>
          <li>الوسم <code>tag</code> — الأدنى</li>
        </ol>
        <div class="warn"><b>تجنّب</b> الإفراط في استخدام <code>!important</code>، فهي تكسر نظام الأولوية وتسبب فوضى في المشاريع الكبيرة.</div>
      `,
      code: `/* استهدف العناصر بأساليب مختلفة */
body {
  background: #f8fafc;
  font-family: sans-serif;
  padding: 24px;
}

h2 { color: #1e293b; }

/* محدد الصنف */
.box {
  background: #dbeafe;
  border-inline-start: 5px solid #2563eb;
  padding: 16px;
  border-radius: 10px;
  margin-bottom: 14px;
}

/* محدد الوسم */
p { color: #475569; line-height: 1.9; }

/* محدد العنصر الشقيق */
li + li { margin-top: 6px; }

/* عند المرور */
button {
  background: #2563eb; color: #fff; border: none;
  padding: 10px 20px; border-radius: 9px; cursor: pointer;
  transition: .25s;
}
button:hover { background: #1d4ed8; transform: translateY(-2px); }

/* التظليل عند التحديد */
::selection { background: #fbbf24; color: #000; }`
    },
    {
      id: 'css-3',
      title: 'الألوان والخطوط والنصوص',
      file: 'colors.css',
      mode: 'css',
      body: `
        <h2>طرق كتابة اللون</h2>
        <ul>
          <li><strong>اسم:</strong> <code>red</code>, <code>tomato</code></li>
          <li><strong>HEX:</strong> <code>#ff5733</code></li>
          <li><strong>RGB:</strong> <code>rgb(255, 87, 51)</code></li>
          <li><strong>RGBA:</strong> <code>rgba(255, 87, 51, 0.5)</code> — مع شفافية</li>
          <li><strong>HSL:</strong> <code>hsl(9, 100%, 60%)</code></li>
        </ul>
        <h2>الخطوط</h2>
        <pre><code>font-family: 'Cairo', sans-serif;
font-size: 18px;
font-weight: 700;
font-style: italic;
line-height: 1.8;
letter-spacing: 1px;
text-align: center;</code></pre>
        <h2>تنسيق النص</h2>
        <ul>
          <li><code>text-decoration: underline;</code></li>
          <li><code>text-transform: uppercase;</code></li>
          <li><code>text-shadow: 2px 2px 4px #000;</code></li>
        </ul>
        <h2>التدرجات Gradients</h2>
        <pre><code>background: linear-gradient(135deg, #7c5cff, #22d3ee);
background: radial-gradient(circle, #fff, #000);</code></pre>
        <div class="tip"><b>نصيحة تصميم</b> استخدم HSL لتوليد ألوان متناسقة: ثبّت التشبع والإضاءة وغيّر درجة اللون فقط.</div>
      `,
      code: `body {
  font-family: sans-serif;
  padding: 24px;
  background: #ffffff;
}

h2 {
  font-size: 30px;
  font-weight: 800;
  color: #1e293b;
  letter-spacing: 1px;
  text-shadow: 2px 2px 0 #e2e8f0;
}

.box {
  background: linear-gradient(135deg, #7c5cff, #22d3ee);
  color: #ffffff;
  padding: 22px;
  border-radius: 14px;
  margin-bottom: 16px;
  box-shadow: 0 10px 26px -8px rgba(124,92,255,.6);
}

p {
  font-size: 16px;
  line-height: 1.9;
  color: #475569;
  text-align: justify;
}

ul { line-height: 2; color: #334155; }

button {
  background: rgba(124, 92, 255, 0.12);
  color: #7c5cff;
  border: 2px solid #7c5cff;
  padding: 11px 24px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: .25s;
}
button:hover {
  background: #7c5cff;
  color: #fff;
}`
    },
    {
      id: 'css-4',
      title: 'نموذج الصندوق Box Model',
      file: 'box.css',
      mode: 'css',
      body: `
        <h2>كل عنصر صندوق</h2>
        <p>أي عنصر في CSS يتكوّن من أربع طبقات من الداخل للخارج:</p>
        <ol>
          <li><strong>Content</strong> المحتوى نفسه (النص/الصورة).</li>
          <li><strong>Padding</strong> الحشوة الداخلية.</li>
          <li><strong>Border</strong> الإطار.</li>
          <li><strong>Margin</strong> الهامش الخارجي.</li>
        </ol>
        <h2>القاعدة الذهبية</h2>
        <pre><code>* {
  box-sizing: border-box;
}</code></pre>
        <p>بدونها، يضاف padding والـ border إلى العرض الكلي فيكبر الصندوق عن المتوقع. معها، يصبح العرض ثابتًا مهما أضفت.</p>
        <h2>اختصارات</h2>
        <pre><code>margin: 10px;                 /* كل الجهات */
margin: 10px 20px;            /* عمودي أفقي */
margin: 10px 20px 30px 40px;  /* أعلى يمين أسفل يسار */
padding-top: 14px;</code></pre>
        <h2>المسافات المنطقية (الأفضل للعربي)</h2>
        <pre><code>padding-inline-start: 16px;   /* يمين في RTL */
margin-block-end: 20px;       /* أسفل */</code></pre>
        <div class="tip"><b>تمرين</b> جرّب تغيير قيمة padding في الكود بالأسفل ولاحظ كيف يتضخم الصندوق دون أن تتحرك العناصر الأخرى.</div>
      `,
      code: `* { box-sizing: border-box; }

body {
  font-family: sans-serif;
  padding: 24px;
  background: #f1f5f9;
}

h2 { color: #0f172a; }

.box {
  background: #ffffff;
  /* الحشوة الداخلية */
  padding: 24px;
  /* الإطار */
  border: 3px solid #2563eb;
  border-radius: 14px;
  /* الهامش الخارجي */
  margin-bottom: 22px;
  /* ظل للتوضيح */
  box-shadow: 0 8px 22px -10px rgba(37,99,235,.5);
}

.box.dashed {
  border-style: dashed;
  border-color: #f59e0b;
  padding: 40px 18px;
}

p { color: #475569; line-height: 1.9; margin: 0; }

button {
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 10px;
  background: #2563eb;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
}`
    },
    {
      id: 'css-5',
      title: 'Flexbox لترتيب العناصر',
      file: 'flex.css',
      mode: 'css',
      body: `
        <h2>لماذا Flexbox؟</h2>
        <p>قبلها كنا نستخدم <code>float</code> وطرقًا ملتوية لترتيب العناصر. Flexbox جاءت لتحل الترتيب في <strong>اتجاه واحد</strong> (صف أو عمود) بسهولة تامة.</p>
        <h2>الخصائص على الحاوية</h2>
        <pre><code>.parent {
  display: flex;
  flex-direction: row | column;
  justify-content: center | space-between | space-around;
  align-items: center | flex-start | flex-end | stretch;
  gap: 16px;
  flex-wrap: wrap;
}</code></pre>
        <h2>الخصائص على الأبناء</h2>
        <pre><code>.child {
  flex: 1;          /* يتمدد ليملأ المساحة */
  flex: 0 0 200px;  /* عرض ثابت */
  align-self: flex-end;
  order: 2;
}</code></pre>
        <h2>توسيط مثالي في سطرين</h2>
        <pre><code>.parent {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}</code></pre>
        <div class="tip"><b>تذكّر</b> <code>justify-content</code> تعمل على المحور الرئيسي، و<code>align-items</code> على المحور المتعامد. لو غيّرت <code>flex-direction</code> إلى column، ينعكس دورهما.</div>
      `,
      code: `body {
  font-family: sans-serif;
  padding: 24px;
  background: #0f172a;
  color: #e2e8f0;
}

h2 { color: #22d3ee; }

/* الحاوية */
.box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  background: #1e293b;
  padding: 18px;
  border-radius: 14px;
  margin-bottom: 18px;
}

/* الأبناء */
.item {
  flex: 1 1 110px;
  background: linear-gradient(135deg, #7c5cff, #22d3ee);
  color: #fff;
  padding: 18px;
  border-radius: 10px;
  text-align: center;
  font-weight: 800;
  font-size: 16px;
}
/ صف آخر بتوسيط عمودي *

.center-row {

display: flex;

justify-content: center;

align-items: center;

gap: 12px;

background: #1e293b;

padding: 18px;

border-radius: 14px;

margin-bottom: 18px;

}

button {

padding: 12px 26px;

border: none;

border-radius: 10px;

background: #22d3ee;

color: #0f172a;

font-weight: 800;

font-size: 15px;

cursor: pointer

transition: .25s;

}

button:hover { transform: translateY(-3px); }

}

نهاية الجزء 1