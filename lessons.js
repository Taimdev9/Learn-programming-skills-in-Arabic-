/* ============================================================
   TaimCode — محتوى الدروس
   Dev: Taimdev9
   ============================================================ */

window.COURSES = [

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

/* صف آخر بتوسيط عمودي */
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
  cursor: pointer;
  transition: .25s;
}
button:hover { transform: translateY(-3px); }`
    }
  ]
},
/* ==================== JavaScript ==================== */
{
  id: 'js',
  name: 'JavaScript',
  icon: 'JS',
  color: '#f7df1e',
  desc: 'لغة التفاعل في المتصفح: المتغيرات، الشروط، الحلقات، الدوال.',
  lessons: [
    {
      id: 'js-1',
      title: 'مقدمة إلى JavaScript',
      file: 'script.js',
      mode: 'js',
      body: `
        <h2>ما هي JavaScript؟</h2>
        <p><strong>JavaScript</strong> لغة برمجة حقيقية تعمل داخل المتصفح، وتضيف <strong>الحياة والتفاعل</strong> للصفحة: أزرار تعمل، بيانات تتحدّث، نوافذ تظهر… إلخ.</p>
        <p>اليوم تُستخدم أيضًا على الخادم عبر <em>Node.js</em>، وفي تطبيقات الجوال والحاسوب.</p>
        <h2>أول أمر: الطباعة</h2>
        <pre><code>console.log("مرحبًا بالعالم");</code></pre>
        <p>الجملة <code>console.log</code> تطبع أي شيء في وحدة تحكّم المتصفح. في هذه المنصة، الناتج يظهر في صندوق «الناتج» بالأسفل.</p>
        <h2>الفواصل المنقوطة والأقواس</h2>
        <ul>
          <li>كل جملة تنتهي عادة بـ <code>;</code> — اختيارية لكنها أفضل للممارسة.</li>
          <li>النصوص تُكتب بين علامتي تنصيص <code>" "</code> أو <code>' '</code>.</li>
          <li>JavaScript <strong>حساسة لحالة الأحرف</strong>: <code>Name</code> تختلف عن <code>name</code>.</li>
        </ul>
        <h2>التعليقات</h2>
        <pre><code>// تعليق سطر واحد
/* تعليق
   متعدد الأسطر */</code></pre>
        <div class="tip"><b>ابدأ الآن</b> اكتب أي شيء داخل <code>console.log</code> واضغط «شغّل الكود».</div>
      `,
      code: `// أول برنامج لي في JavaScript
console.log("مرحبًا بك في TaimCode!");

console.log("أنا أتعلم JavaScript اليوم");

// يمكنك طباعة أرقام
console.log(2025);

// ويمكنك طباعة عمليات حسابية
console.log(10 + 5);
console.log(100 / 4);`
    },
    {
      id: 'js-2',
      title: 'المتغيرات وأنواع البيانات',
      file: 'vars.js',
      mode: 'js',
      body: `
        <h2>تعريف المتغير</h2>
        <p>المتغير صندوق نخزّن فيه قيمة لنستخدمها لاحقًا.</p>
        <pre><code>let age = 20;
const name = "Taim";
var old = "قديمة";</code></pre>
        <h2>الفرق بينها</h2>
        <ul>
          <li><code>let</code> يمكن تغيير قيمته لاحقًا.</li>
          <li><code>const</code> <strong>ثابت</strong> لا يمكن إعادة إسناده.</li>
          <li><code>var</code> قديمة، تجنّبها في المشاريع الجديدة.</li>
        </ul>
        <h2>أنواع البيانات الأساسية</h2>
        <ul>
          <li><strong>string</strong> نص: <code>"مرحبا"</code></li>
          <li><strong>number</strong> رقم: <code>42</code> أو <code>3.14</code></li>
          <li><strong>boolean</strong> منطقي: <code>true</code> / <code>false</code></li>
          <li><strong>null</strong> قيمة فارغة متعمّدة</li>
          <li><strong>undefined</strong> غير معرّفة</li>
          <li><strong>object</strong> كائن: <code>{ name: "Ali", age: 20 }</code></li>
          <li><strong>array</strong> مصفوفة: <code>[1, 2, 3]</code></li>
        </ul>
        <h2>معرفة النوع</h2>
        <pre><code>typeof 42        // "number"
typeof "hello"   // "string"</code></pre>
        <div class="note"><b>قاعدة</b> استخدم <code>const</code> افتراضيًا، و<code>let</code> فقط عند الحاجة لتغيير القيمة.</div>
      `,
      code: `// تعريف متغيرات
const name = "Taim";
let age = 18;
let isStudent = true;

console.log("الاسم:", name);
console.log("العمر:", age);
console.log("طالب؟", isStudent);

// تغيير قيمة let
age = 19;
console.log("بعد سنة:", age);

// أنواع مختلفة
const skills = ["HTML", "CSS", "JS"];
const user = { name: "Taim", level: "مبتدئ" };

console.log("المهارات:", skills);
console.log("المستخدم:", user);

// معرفة النوع
console.log("نوع age هو:", typeof age);
console.log("نوع name هو:", typeof name);`
    },
    {
      id: 'js-3',
      title: 'الشروط if / else',
      file: 'conditions.js',
      mode: 'js',
      body: `
        <h2>لماذا الشروط؟</h2>
        <p>الشروط تسمح للبرنامج <strong>باتخاذ قرار</strong> حسب قيمة معينة.</p>
        <h2>الصيغة</h2>
        <pre><code>if (الشرط) {
  // ينفّذ لو الشرط صحيح
} else if (شرط آخر) {
  // ينفّذ لو الثاني صحيح
} else {
  // ينفّذ لو لا شيء تحقق
}</code></pre>
        <h2>عوامل المقارنة</h2>
        <ul>
          <li><code>===</code> يساوي تمامًا (النوع والقيمة) — <strong>استخدم هذا</strong></li>
          <li><code>!==</code> لا يساوي</li>
          <li><code>&gt;</code> أكبر، <code>&lt;</code> أصغر</li>
          <li><code>&gt;=</code> أكبر أو يساوي، <code>&lt;=</code> أصغر أو يساوي</li>
        </ul>
        <div class="warn"><b>تحذير</b> لا تستخدم <code>==</code> لأنها تحوّل الأنواع تلقائيًا: <code>"5" == 5</code> تعطي <code>true</code>، وهذا يسبب أخطاء خفيّة.</div>
        <h2>العوامل المنطقية</h2>
        <ul>
          <li><code>&amp;&amp;</code> و — يجب تحقق الشرطين.</li>
          <li><code>||</code> أو — يكفي واحد.</li>
          <li><code>!</code> نفي — يعكس النتيجة.</li>
        </ul>
        <h2>العامل الثلاثي</h2>
        <pre><code>const result = age >= 18 ? "بالغ" : "قاصر";</code></pre>
      `,
      code: `// تجربة الشروط
const score = 82;

if (score >= 90) {
  console.log("التقدير: ممتاز 🌟");
} else if (score >= 80) {
  console.log("التقدير: جيد جدًا ✅");
} else if (score >= 70) {
  console.log("التقدير: جيد");
} else if (score >= 50) {
  console.log("التقدير: مقبول");
} else {
  console.log("التقدير: راسب ❌");
}

// مثال آخر: التحقق من العمر
const age = 17;
console.log(age >= 18 ? "مسموح بالدخول" : "غير مسموح");

// الجمع بين الشروط
const hasTicket = true;
const hasId = false;

if (hasTicket && hasId) {
  console.log("يمكنك الدخول");
} else {
  console.log("ناقص: " + (!hasTicket ? "تذكرة " : "") + (!hasId ? "هوية" : ""));
}`
    },
    {
      id: 'js-4',
      title: 'الحلقات التكرارية Loops',
      file: 'loops.js',
      mode: 'js',
      body: `
        <h2>فكرة التكرار</h2>
        <p>الحلقة تكرّر تنفيذ كود عدة مرات بدل كتابته يدويًا.</p>
        <h2>حلقة for</h2>
        <pre><code>for (let i = 0; i &lt; 5; i++) {
  console.log(i);
}</code></pre>
        <p>الترتيب: <strong>التهيئة</strong> ← <strong>الشرط</strong> ← <strong>جسم الحلقة</strong> ← <strong>الزيادة</strong> ← إعادة الفحص.</p>
        <h2>حلقة while</h2>
        <pre><code>let i = 0;
while (i &lt; 5) {
  console.log(i);
  i++;
}</code></pre>
        <div class="warn"><b>تحذير</b> نسيان زيادة <code>i++</code> يسبب حلقة لا نهائية تُجمّد المتصفح.</div>
        <h2>حلقة do...while</h2>
        <p>تنفّذ مرة على الأقل حتى لو كان الشرط خاطئًا من البداية.</p>
        <h2>المرور على المصفوفات</h2>
        <pre><code>const items = ["HTML", "CSS", "JS"];

// الطريقة الكلاسيكية
for (let i = 0; i &lt; items.length; i++) { }

// الأحدث والأوضح
for (const item of items) { }

// مع الفهرس
items.forEach((item, i) =&gt; { });</code></pre>
        <h2>أوامر التحكم</h2>
        <ul>
          <li><code>break</code> يخرج من الحلقة فورًا.</li>
          <li><code>continue</code> يتخطى الدورة الحالية ويكمل.</li>
        </ul>
      `,
      code: `// حلقة for بسيطة
console.log("--- العد من 1 إلى 5 ---");
for (let i = 1; i <= 5; i++) {
  console.log("الرقم:", i);
}

// حلقة while
console.log("--- while ---");
let count = 3;
while (count > 0) {
  console.log("باقي:", count);
  count--;
}
console.log("انطلقنا! 🚀");

// المرور على مصفوفة
const langs = ["HTML", "CSS", "JavaScript", "Python"];

console.log("--- اللغات ---");
for (const lang of langs) {
  console.log("•", lang);
}

// مع الفهرس
console.log("--- مع الترقيم ---");
langs.forEach((lang, i) => {
  console.log((i + 1) + ") " + lang);
});

// break و continue
console.log("--- الأرقام الزوجية فقط ---");
for (let n = 1; n <= 10; n++) {
  if (n % 2 !== 0) continue;  // تخطَّ الفردي
  if (n > 8) break;           // توقف بعد 8
  console.log(n);
}`
    },
    {
      id: 'js-5',
      title: 'الدوال Functions',
      file: 'functions.js',
      mode: 'js',
      body: `
        <h2>ما هي الدالة؟</h2>
        <p>الدالة كتلة كود نسمّيها، ونستدعيها عند الحاجة، بدل تكرار نفس الكود.</p>
        <h2>الصيغة التقليدية</h2>
        <pre><code>function greet(name) {
  return "أهلاً " + name;
}

greet("Taim");</code></pre>
        <h2>الدوال السهمية Arrow Functions</h2>
        <pre><code>const greet = (name) =&gt; "أهلاً " + name;

const sum = (a, b) =&gt; a + b;</code></pre>
        <h2>المعاملات الافتراضية</h2>
        <pre><code>function welcome(name = "زائر") {
  return "مرحبًا " + name;
}</code></pre>
        <h2>return مقابل console.log</h2>
        <ul>
          <li><code>return</code> تُعيد قيمة للاستخدام لاحقًا، وتوقف تنفيذ الدالة.</li>
          <li><code>console.log</code> تطبع فقط ولا تُعيد شيئًا.</li>
        </ul>
        <div class="tip"><b>قاعدة ذهبية</b> اجعل كل دالة تفعل شيئًا <strong>واحدًا</strong> فقط. الدالة القصيرة الواضحة أسهل في الصيانة وإعادة الاستخدام.</div>
        <h2>الدوال المجهولة والاستدعاء الذاتي</h2>
        <pre><code>const say = function () { /* ... */ };

(function () {
  console.log("تعمل فورًا");
})();</code></pre>
      `,
      code: `// دالة تقليدية
function greet(name) {
  return "أهلاً " + name + " 👋";
}
console.log(greet("Taim"));
console.log(greet("أحمد"));

// دالة حسابية
function add(a, b) {
  return a + b;
}
console.log("5 + 3 =", add(5, 3));

// دالة سهمية
const square = (n) => n * n;
console.log("مربع 7 هو:", square(7));

// معامل افتراضي
function welcome(name = "زائر") {
  return "مرحبًا " + name;
}
console.log(welcome());
console.log(welcome("سارة"));

// دالة مع حلقة
function sumArray(arr) {
  let total = 0;
  for (const n of arr) total += n;
  return total;
}
console.log("مجموع [10,20,30]:", sumArray([10, 20, 30]));

// دالة تحقق
const isEven = (n) => n % 2 === 0;
console.log("هل 8 زوجي؟", isEven(8));
console.log("هل 7 زوجي؟", isEven(7));`
    }
  ]
},

/* ==================== Python ==================== */
{
  id: 'python',
  name: 'Python',
  icon: 'Py',
  color: '#3776ab',
  desc: 'لغة عامة قوية وسهلة: المتغيرات، الشروط، الحلقات، الدوال.',
  lessons: [
    {
      id: 'py-1',
      title: 'مقدمة إلى Python',
      file: 'main.py',
      mode: 'python',
      body: `
        <h2>ما هي Python؟</h2>
        <p><strong>Python</strong> لغة برمجة عامة، تتميّز ببساطة تركيبها وقوة مكتباتها. تُستخدم في الذكاء الاصطناعي، تحليل البيانات، الويب، الأتمتة، والألعاب.</p>
        <h2>أول أمر: الطباعة</h2>
        <pre><code>print("مرحبًا بالعالم")</code></pre>
        <p>الدالة <code>print()</code> تطبع أي شيء على الشاشة.</p>
        <h2>المسافات البادئة Indentation</h2>
        <p>في Python <strong>المسافات ليست للزينة</strong>، بل جزء من اللغة. أي كتلة كود (شرط، حلقة، دالة) تُكتب بعد نقطتين <code>:</code> ثم يُزاح سطرها بمقدار 4 مسافات.</p>
        <pre><code>if True:
    print("هذا داخل الكتلة")
print("هذا خارجها")</code></pre>
        <div class="warn"><b>خطأ شائع</b> خلط المسافات (tabs) مع الفراغات (spaces) يسبب خطأ <code>IndentationError</code>. اختر واحدة والتزم بها.</div>
        <h2>التعليقات</h2>
        <pre><code># تعليق سطر واحد
print("مرحبا")  # تعليق بعد الكود</code></pre>
        <div class="tip"><b>ملاحظة</b> أول تشغيل لبايثون قد يأخذ بضع ثوانٍ لتحميل المحرك. بعد ذلك يكون فوريًا.</div>
      `,
      code: `# أول برنامج بايثون
print("مرحبًا بك في TaimCode! 🐍")
print("أنا أتعلم Python اليوم")

# طباعة أرقام
print(2025)

# عمليات حسابية
print(10 + 5)
print(100 / 4)
print(2 ** 8)   # 2 أس 8

# جمع نصوص
print("Taim" + " " + "Dev")`
    },
    {
      id: 'py-2',
      title: 'المتغيرات وأنواع البيانات',
      file: 'vars.py',
      mode: 'python',
      body: `
        <h2>تعريف المتغير</h2>
        <p>في Python لا نكتب نوع المتغير، اللغة تفهمه تلقائيًا:</p>
        <pre><code>name = "Taim"
age = 18
height = 1.75
is_dev = True</code></pre>
        <h2>الأنواع الأساسية</h2>
        <ul>
          <li><strong>str</strong> نص: <code>"مرحبا"</code></li>
          <li><strong>int</strong> عدد صحيح: <code>42</code></li>
          <li><strong>float</strong> عدد عشري: <code>3.14</code></li>
          <li><strong>bool</strong> منطقي: <code>True</code> / <code>False</code> (بحرف كبير)</li>
          <li><strong>list</strong> قائمة: <code>[1, 2, 3]</code></li>
          <li><strong>tuple</strong> ثابتة: <code>(1, 2)</code></li>
          <li><strong>dict</strong> قاموس: <code>{"name": "Taim"}</code></li>
        </ul>
        <h2>معرفة النوع</h2>
        <pre><code>type(42)     # &lt;class 'int'&gt;
type("hi")   # &lt;class 'str'&gt;</code></pre>
        <h2>تحويل الأنواع</h2>
        <pre><code>int("25")      # 25
str(100)       # "100"
float("3.5")   # 3.5</code></pre>
        <h2>f-strings للتنسيق</h2>
        <pre><code>name = "Taim"
age = 18
print(f"اسمي {name} وعمري {age}")</code></pre>
        <div class="tip"><b>الأفضل</b> استخدم f-strings فهي أوضح وأسرع من الجمع بـ <code>+</code>.</div>
      `,
      code: `# متغيرات متنوعة
name = "Taim"
age = 18
height = 1.75
is_developer = True

print("الاسم:", name)
print("العمر:", age)
print("الطول:", height)
print("مطور؟", is_developer)

# تغيير القيمة
age = 19
print("العمر الجديد:", age)

# معرفة النوع
print("نوع age:", type(age))
print("نوع name:", type(name))

# تحويل الأنواع
num_text = "25"
num_int = int(num_text)
print(num_int + 5)

# f-string
print(f"أنا {name}، عمري {age} سنة، وطولي {height} متر")

# قوائم وقواميس
skills = ["Python", "HTML", "CSS"]
user = {"name": "Taim", "level": "مبتدئ"}

print("المهارات:", skills)
print("أول مهارة:", skills[0])
print("المستخدم:", user)
print("المستوى:", user["level"])`
    },
    {
      id: 'py-3',
      title: 'الشروط if / elif / else',
      file: 'conditions.py',
      mode: 'python',
      body: `
        <h2>الصيغة</h2>
        <pre><code>if الشرط:
    ...
elif شرط_آخر:
    ...
else:
    ...</code></pre>
        <h2>عوامل المقارنة</h2>
        <ul>
          <li><code>==</code> يساوي (لاحظ الاثنين)</li>
          <li><code>!=</code> لا يساوي</li>
          <li><code>&gt;</code> <code>&lt;</code> <code>&gt;=</code> <code>&lt;=</code></li>
        </ul>
        <h2>العوامل المنطقية</h2>
        <p>في Python تُكتب بالكلمات وليس بالرموز:</p>
        <ul>
          <li><code>and</code> بدل <code>&amp;&amp;</code></li>
          <li><code>or</code> بدل <code>||</code></li>
          <li><code>not</code> بدل <code>!</code></li>
        </ul>
        <pre><code>if age &gt;= 18 and has_id:
    print("مسموح")</code></pre>
        <h2>التحقق من العضوية</h2>
        <pre><code>if "Python" in skills:
    print("تعرف بايثون")</code></pre>
        <h2>الشروط المتداخلة</h2>
        <p>يمكن وضع <code>if</code> داخل <code>if</code>، مع زيادة المسافات البادئة بمقدار 4 لكل مستوى.</p>
        <div class="note"><b>تذكّر</b> النقطتان <code>:</code> إلزامية بعد كل شرط، والمسافة البادئة بعده إلزامية أيضًا.</div>
      `,
      code: `# شروط بسيطة
score = 85

if score >= 90:
    print("التقدير: ممتاز 🌟")
elif score >= 80:
    print("التقدير: جيد جدًا ✅")
elif score >= 70:
    print("التقدير: جيد")
elif score >= 50:
    print("التقدير: مقبول")
else:
    print("التقدير: راسب ❌")

# شروط مركبة
age = 20
has_id = True

if age >= 18 and has_id:
    print("يمكنك الدخول")
else:
    print("غير مسموح")

# استخدام or
day = "جمعة"
if day == "جمعة" or day == "سبت":
    print("عطلة نهاية الأسبوع 🎉")
else:
    print("يوم عمل")

# التحقق من العضوية
langs = ["Python", "JavaScript", "HTML"]

if "Python" in langs:
    print("Python موجودة في القائمة ✔")

if "Go" not in langs:
    print("Go ليست في القائمة")

# شروط متداخلة
temp = 35
if temp > 30:
    print("الجو حار")
    if temp > 40:
        print("حار جدًا! اشرب ماء")
    else:
        print("حار لكن محتمل")`
    },
    {
      id: 'py-4',
      title: 'الحلقات for و while',
      file: 'loops.py',
      mode: 'python',
      body: `
        <h2>حلقة for</h2>
        <p>تُستخدم للمرور على عناصر متسلسلة:</p>
        <pre><code>for i in range(5):
    print(i)   # 0 1 2 3 4</code></pre>
        <h2>الدالة range</h2>
        <ul>
          <li><code>range(5)</code> من 0 إلى 4</li>
          <li><code>range(1, 6)</code> من 1 إلى 5</li>
          <li><code>range(0, 10, 2)</code> من 0 إلى 8 بخطوة 2</li>
        </ul>
        <h2>المرور على القوائم</h2>
        <pre><code>fruits = ["تفاح", "موز", "عنب"]

for fruit in fruits:
    print(fruit)</code></pre>
        <h2>مع الفهرس</h2>
        <pre><code>for i, fruit in enumerate(fruits):
    print(i, fruit)</code></pre>
        <h2>حلقة while</h2>
        <pre><code>count = 5
while count &gt; 0:
    print(count)
    count -= 1</code></pre>
        <div class="warn"><b>تحذير</b> تأكد من تغيير شرط الحلقة داخل جسمها، وإلا ستستمر للأبد (وقد تتوقف المنصة بعد مهلة).</div>
        <h2>break و continue</h2>
        <ul>
          <li><code>break</code> تخرج من الحلقة فورًا.</li>
          <li><code>continue</code> تتخطى الدورة الحالية.</li>
        </ul>
        <h2>حلقة on else</h2>
        <p>ميزة خاصة ببايثون: يمكن إضافة <code>else</code> بعد الحلقة، وتُنفَّذ فقط إن لم يحدث <code>break</code>.</p>
      `,
      code: `# حلقة for بسيطة
print("--- العد من 1 إلى 5 ---")
for i in range(1, 6):
    print(i)

# خطوة مختلفة
print("--- الأرقام الزوجية ---")
for i in range(0, 11, 2):
    print(i)

# المرور على قائمة
print("--- الفواكه ---")
fruits = ["تفاح", "موز", "عنب", "مانجو"]
for fruit in fruits:
    print("•", fruit)

# مع الفهرس
print("--- مع الترقيم ---")
for i, fruit in enumerate(fruits, start=1):
    print(f"{i}) {fruit}")

# حلقة while
print("--- العد التنازلي ---")
count = 5
while count > 0:
    print(count)
    count -= 1
print("انطلقنا! 🚀")

# break و continue
print("--- الأرقام الفردية حتى 9 ---")
for n in range(1, 20):
    if n % 2 == 0:
        continue
    if n > 9:
        break
    print(n)

# مجموع الأرقام
total = 0
for n in range(1, 101):
    total += n
print("مجموع 1 إلى 100 =", total)`
    },
    {
      id: 'py-5',
      title: 'الدوال Functions',
      file: 'functions.py',
      mode: 'python',
      body: `
        <h2>تعريف الدالة</h2>
        <pre><code>def greet(name):
    return "أهلاً " + name</code></pre>
        <p>الكلمة <code>def</code> تعني «تعريف»، ثم اسم الدالة، ثم الأقواس بالمعاملات، ثم نقطتان.</p>
        <h2>الاستدعاء</h2>
        <pre><code>message = greet("Taim")
print(message)</code></pre>
        <h2>قيم افتراضية</h2>
        <pre><code>def welcome(name="زائر"):
    return "مرحبًا " + name</code></pre>
        <h2>معاملات مسماة</h2>
        <pre><code>def user(name, age):
    return f"{name} عمره {age}"

user(age=20, name="Ali")   # الترتيب لا يهم</code></pre>
        <h2>عدد غير محدود من المعاملات</h2>
        <pre><code>def total(*numbers):
    return sum(numbers)

total(1, 2, 3, 4)</code></pre>
        <h2>return مقابل print</h2>
        <ul>
          <li><code>return</code> تُعيد قيمة وتوقف الدالة.</li>
          <li><code>print</code> تطبع فقط ولا تُعيد شيئًا (تُعيد <code>None</code>).</li>
        </ul>
        <div class="tip"><b>نصيحة</b> اجعل كل دالة مسؤولة عن مهمة واحدة، وسمّها باسم يعبّر عنها بوضوح مثل <code>calculate_total</code>.</div>
      `,
      code: `# دالة بسيطة
def greet(name):
    return "أهلاً " + name + " 👋"

print(greet("Taim"))
print(greet("سارة"))

# دالة حسابية
def add(a, b):
    return a + b

print("5 + 3 =", add(5, 3))

# قيمة افتراضية
def welcome(name="زائر"):
    return "مرحبًا " + name

print(welcome())
print(welcome("أحمد"))

# معاملات مسماة
def user_info(name, age):
    return f"{name} عمره {age} سنة"

print(user_info(age=20, name="Ali"))

# عدد غير محدود من المعاملات
def total(*numbers):
    return sum(numbers)

print("المجموع:", total(10, 20, 30, 40))

# دالة مع حلقة
def count_even(numbers):
    count = 0
    for n in numbers:
        if n % 2 == 0:
            count += 1
    return count

nums = [1, 2, 3, 4, 5, 6, 7, 8]
print("عدد الأرقام الزوجية:", count_even(nums))

# دالة تُعيد قائمة
def squares(n):
    return [i * i for i in range(1, n + 1)]

print("المربعات:", squares(6))`
    }
  ]
}

];