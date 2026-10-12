/* ============================================================
   TaimCode — منطق التطبيق
   Dev: Taimdev9
   ============================================================ */
(function () {
  'use strict';

  var COURSES = window.COURSES || [];
  var STORAGE_KEY = 'taimcode.progress.v1';
  var MIN_LOADING = 800;   // ⚡ مدة شاشة التحميل (ميلي ثانية)
  var startedAt = Date.now();

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var app = $('#app');

  /* ---------------- التقدّم ---------------- */
  var progress = (function () {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch (e) { return {}; }
  })();

  function saveProgress() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); } catch (e) {}
  }

  function coursePercent(course) {
    var done = course.lessons.filter(function (l) { return progress[l.id]; }).length;
    return Math.round((done / course.lessons.length) * 100);
  }

  /* ---------------- شاشة التحميل ---------------- */
  function hidePreloader() {
    var p = $('#preloader');
    if (!p || p.classList.contains('is-hidden')) return;
    p.classList.add('is-hidden');
    document.body.classList.add('ready');
    setTimeout(function () {
      if (p.parentNode) p.parentNode.removeChild(p);
    }, 850);
  }
  function scheduleHide() {
    var wait = Math.max(0, MIN_LOADING - (Date.now() - startedAt));
    setTimeout(hidePreloader, wait);
  }
  if (document.readyState === 'complete') scheduleHide();
  else window.addEventListener('load', scheduleHide);
  setTimeout(hidePreloader, 6000); // احتياط

  /* ---------------- الهيدر ---------------- */
  function buildNav() {
    var nav = $('#nav');
    var html = '<a href="#/" data-nav="home">الرئيسية</a>';
    COURSES.forEach(function (c) {
      html += '<a href="#/c/' + c.id + '" data-nav="' + c.id + '">' + c.name + '</a>';
    });
    nav.innerHTML = html;

    nav.addEventListener('click', function () {
      nav.classList.remove('open');
    });
  }

  function highlightNav(courseId) {
    $$('#nav a').forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('data-nav') === (courseId || 'home'));
    });
  }

  /* ---------------- الصفحة الرئيسية ---------------- */
  function renderHome() {
    highlightNav(null);
    document.title = 'TaimCode | تعلّم البرمجة بالعربي';

    var cards = COURSES.map(function (c) {
      var pct = coursePercent(c);
      return '' +
        '<a class="card" href="#/c/' + c.id + '" style="--c:' + c.color + '">' +
          '<div class="card-top">' +
            '<span class="card-icon">' + c.icon + '</span>' +
            '<div>' +
              '<h3>' + c.name + '</h3>' +
              '<span class="sub">' + c.lessons.length + ' دروس</span>' +
            '</div>' +
          '</div>' +
          '<p>' + c.desc + '</p>' +
          '<div class="bar"><i style="width:' + pct + '%"></i></div>' +
          '<div class="card-foot"><span>التقدّم</span><span>' + pct + '%</span></div>' +
        '</a>';
    }).join('');

    app.innerHTML = '' +
      '<section class="hero">' +
        '<span class="hero-badge">منصة عربية · تجربة مباشرة</span>' +
        '<h1>تعلّم <span>HTML · CSS · JavaScript · Python</span><br>بالشرح والتطبيق</h1>' +
        '<p>دروس مبسّطة بالعربي، مع محرر كود تنفّذ فيه مباشرة من متصفحك — على الجوال أو اللابتوب.</p>' +
      '</section>' +
      '<h2 class="section-title">اختر مسارك</h2>' +
      '<div class="grid">' + cards + '</div>';
  }

  /* ---------------- صفحة الدرس ---------------- */
  function renderCourse(course, index) {
    highlightNav(course.id);
    var lesson = course.lessons[index];
    document.title = lesson.title + ' | ' + course.name + ' — TaimCode';

    var lessonItems = course.lessons.map(function (l, i) {
      var isDone = !!progress[l.id];
      var cls = 'lesson-link';
      if (i === index) cls += ' active';
      if (isDone) cls += ' done';
      return '<li><a class="' + cls + '" href="#/c/' + course.id + '/' + i + '">' +
               '<span class="num">' + (isDone ? '✓' : (i + 1)) + '</span>' +
               '<span class="t">' + l.title + '</span>' +
             '</a></li>';
    }).join('');

    var isDone = !!progress[lesson.id];

    app.innerHTML = '' +
      '<div class="course-layout">' +

        '<aside class="sidebar" id="sidebar">' +
          '<div class="sidebar-head">' +
            '<h3>' + course.name + '</h3>' +
            '<span class="progress-pill">' + coursePercent(course) + '%</span>' +
          '</div>' +
          '<ul class="lesson-list">' + lessonItems + '</ul>' +
        '</aside>' +

        '<section class="lesson">' +
          '<div class="lesson-head">' +
            '<button class="mini only-mobile" id="toggleSidebar">☰ الدروس</button>' +
            '<span class="crumb">' + course.name + ' • الدرس ' + (index + 1) + ' من ' + course.lessons.length + '</span>' +
            '<button class="done-btn' + (isDone ? ' is-done' : '') + '" id="doneBtn">' +
              (isDone ? '✓ مُنجز' : 'علّم كمُنجز') +
            '</button>' +
          '</div>' +

          '<h1 class="lesson-title">' + lesson.title + '</h1>' +
          '<div class="lesson-body">' + lesson.body + '</div>' +

          '<div class="editor-card">' +
            '<div class="editor-bar">' +
              '<span class="dot r"></span><span class="dot y"></span><span class="dot g"></span>' +
              '<span class="file-name">' + (lesson.file || 'example') + '</span>' +
              '<div class="editor-actions">' +
                '<button class="mini" id="copyBtn">نسخ</button>' +
                '<button class="mini" id="resetBtn">استرجاع</button>' +
              '</div>' +
            '</div>' +
            '<textarea id="codeArea" class="code-area" spellcheck="false" dir="ltr"></textarea>' +
            '<div class="editor-foot">' +
              '<button class="run-btn" id="runBtn">▶ شغّل الكود</button>' +
            '</div>' +
          '</div>' +

          '<div class="output-card">' +
            '<div class="output-head">' +
              '<span>الناتج</span>' +
              '<button class="mini" id="clearOut">مسح</button>' +
            '</div>' +
            '<div id="output" class="output">' +
              '<div class="output-hint">اضغط «شغّل الكود» لعرض النتيجة هنا.</div>' +
            '</div>' +
          '</div>' +

          '<div class="pager">' +
            '<button class="pager-btn" id="prevBtn"' + (index === 0 ? ' disabled' : '') + '>→ الدرس السابق</button>' +
            '<button class="pager-btn" id="nextBtn"' + (index === course.lessons.length - 1 ? ' disabled' : '') + '>الدرس التالي ←</button>' +
          '</div>' +
        '</section>' +
      '</div>';

    /* --- تهيئة المحرر --- */
    var area = $('#codeArea');
    var output = $('#output');
    var runBtn = $('#runBtn');
    area.value = lesson.code;

    // دعم زر Tab داخل المحرر
    area.addEventListener('keydown', function (e) {
      if (e.key === 'Tab') {
        e.preventDefault();
        var s = area.selectionStart, en = area.selectionEnd;
        area.value = area.value.substring(0, s) + '  ' + area.value.substring(en);
        area.selectionStart = area.selectionEnd = s + 2;
      }
    });

    /* --- تشغيل الكود --- */
    runBtn.addEventListener('click', function () {
      if (runBtn.disabled) return;
      runBtn.disabled = true;
      runBtn.textContent = '⏳ جارٍ التنفيذ...';
      runCode(lesson, area.value, output).then(function () {
        runBtn.disabled = false;
        runBtn.textContent = '▶ شغّل الكود';
      });
    });

    /* --- نسخ --- */
    $('#copyBtn').addEventListener('click', function () {
      var btn = this;
      area.select();
      area.setSelectionRange(0, 999999);
      try {
        if (navigator.clipboard) navigator.clipboard.writeText(area.value);
        else document.execCommand('copy');
        btn.textContent = '✓ تم';
      } catch (e) {
        btn.textContent = 'فشل';
      }
      setTimeout(function () { btn.textContent = 'نسخ'; }, 1400);
    });

    /* --- استرجاع الكود الأصلي --- */
    $('#resetBtn').addEventListener('click', function () {
      area.value = lesson.code;
      output.innerHTML = '<div class="output-hint">تم استرجاع الكود الأصلي.</div>';
    });

    /* --- مسح الناتج --- */
    $('#clearOut').addEventListener('click', function () {
      output.innerHTML = '<div class="output-hint">تم مسح الناتج.</div>';
    });

    /* --- تعليم كمُنجز --- */
    var doneBtn = $('#doneBtn');
    doneBtn.addEventListener('click', function () {
      if (progress[lesson.id]) {
        delete progress[lesson.id];
      } else {
        progress[lesson.id] = true;
      }
      saveProgress();
      renderCourse(course, index);
    });

    /* --- التنقل --- */
    if (index > 0) {
      $('#prevBtn').addEventListener('click', function () {
        location.hash = '#/c/' + course.id + '/' + (index - 1);
      });
    }
    if (index < course.lessons.length - 1) {
      $('#nextBtn').addEventListener('click', function () {
        location.hash = '#/c/' + course.id + '/' + (index + 1);
      });
    }

    /* --- سايدبار الجوال --- */
    var sidebar = $('#sidebar');
    var toggle = $('#toggleSidebar');
    if (toggle) {
      toggle.addEventListener('click', function (e) {
        e.stopPropagation();
        sidebar.classList.toggle('open');
      });
      document.addEventListener('click', function onDoc(e) {
        if (!sidebar.classList.contains('open')) return;
        if (!sidebar.contains(e.target) && e.target !== toggle) {
          sidebar.classList.remove('open');
        }
      });
    }

    // التمرير للأعلى
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ---------------- تنفيذ الكود ---------------- */
  function runCode(lesson, code, output) {
    output.innerHTML = '';

    if (lesson.mode === 'python') {
      return runPython(code, output);
    }

    var iframe = document.createElement('iframe');
    iframe.className = 'preview-frame';
    iframe.setAttribute('sandbox', 'allow-scripts allow-modals');
    iframe.srcdoc = buildDoc(lesson.mode, code);
    output.appendChild(iframe);

    // ضبط ارتفاع الإطار بعد التحميل
    iframe.addEventListener('load', function () {
      try {
        var d = iframe.contentDocument;
        if (d && d.body) {
          var h = Math.max(260, d.body.scrollHeight + 30);
          iframe.style.height = h + 'px';
        }
      } catch (e) {}
    });

    return Promise.resolve();
  }

  function buildDoc(mode, code) {
    if (mode === 'html') return code;
    if (mode === 'css') return cssTemplate(code);
    if (mode === 'js') return jsTemplate(code);
    return code;
  }

  function cssTemplate(code) {
    return [
      '<!DOCTYPE html><html lang="ar" dir="rtl"><head><meta charset="utf-8">',
      '<style>',
      'body{font-family:Cairo,system-ui,-apple-system,sans-serif;padding:18px;background:#ffffff;color:#111827;line-height:1.8;margin:0}',
      'h2{margin:0 0 14px;font-size:22px}',
      '.box{background:#e5e7eb;padding:16px;border-radius:10px;margin-bottom:14px}',
      'button{padding:10px 18px;border:1px solid #d1d5db;background:#f9fafb;border-radius:9px;cursor:pointer;font-family:inherit;font-size:14px}',
      'p{margin:10px 0}',
      'ul{margin:10px 0;padding-inline-start:22px}',
      'li{margin-bottom:6px}',
      '</style>',
      '<style>',
      code,
      '</style>',
      '</head><body>',
      '<h2>منطقة التجربة</h2>',
      '<div class="box">هذا عنصر div يحمل الصنف box</div>',
      '<p>هذه فقرة نصية لتجربة تنسيق النصوص.</p>',
      '<ul><li>العنصر الأول</li><li>العنصر الثاني</li><li>العنصر الثالث</li></ul>',
      '<button>زر تجريبي</button>',
      '</body></html>'
    ].join('\n');
  }

  function jsTemplate(code) {
    return [
      '<!DOCTYPE html><html lang="ar" dir="rtl"><head><meta charset="utf-8">',
      '<style>',
      'body{font-family:"Fira Code",Consolas,monospace;padding:16px;background:#0d1117;color:#e6edf3;margin:0}',
      'pre{white-space:pre-wrap;word-break:break-word;font-size:13.5px;line-height:1.85;margin:0}',
      '.err{color:#fb7185;font-family:Cairo,sans-serif;margin-top:12px;padding:10px 14px;border-radius:10px;background:rgba(251,113,133,.12);border-inline-start:4px solid #fb7185}',
      '</style></head><body><pre id="out"></pre>',
      '<script>',
      'var out=document.getElementById("out");',
      'function __p(v){var s;try{s=(typeof v==="object"&&v!==null)?JSON.stringify(v,null,2):String(v);}catch(e){s=String(v);}out.textContent+=s+"\\n";}',
      'console.log=__p;console.info=__p;console.warn=__p;console.error=__p;',
      'console.table=__p;',
      'try{',
      code,
      '}catch(e){var el=document.createElement("div");el.className="err";el.textContent="خطأ: "+e.message;document.body.appendChild(el);}',
      '<\/script></body></html>'
    ].join('\n');
  }

  /* ---------------- Python (Pyodide) ---------------- */
  var pyodidePromise = null;

  function loadPyodideOnce() {
    if (pyodidePromise) return pyodidePromise;
    pyodidePromise = new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js';
      s.onload = function () {
        window.loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/' })
          .then(resolve)
          .catch(function () { reject(new Error('تعذّر تشغيل محرك بايثون.')); });
      };
      s.onerror = function () {
        reject(new Error('تعذّر تحميل محرك بايثون. تأكد من اتصالك بالإنترنت.'));
      };
      document.head.appendChild(s);
    });
    return pyodidePromise;
  }

  function runPython(code, output) {
    output.innerHTML = '<div class="output-hint">⏳ جارٍ تحميل محرك بايثون… (أول مرة فقط، قد يأخذ بضع ثوانٍ)</div>';

    return loadPyodideOnce().then(function (py) {
      output.innerHTML = '';
      var pre = document.createElement('pre');
      pre.className = 'output-pre';
      output.appendChild(pre);

      py.setStdout({ batched: function (s) { pre.textContent += s + '\n'; } });
      py.setStderr({ batched: function (s) { pre.textContent += s + '\n'; } });

      return py.runPythonAsync(code).catch(function (err) {
        var msg = String(err && err.message ? err.message : err);
        pre.textContent += '\n⚠️ ' + msg;
        pre.classList.add('error');
      });
    }).catch(function (err) {
      output.innerHTML = '<pre class="output-pre error">' + err.message + '</pre>';
    });
  }

  /* ---------------- التوجيه ---------------- */
  function route() {
    var hash = location.hash.replace(/^#\/?/, '');
    var parts = hash.split('/').filter(Boolean);

    // #/  أو  فارغ  → الرئيسية
    if (parts.length === 0) {
      renderHome();
      return;
    }

    // #/c/{courseId}  أو  #/c/{courseId}/{index}
    if (parts[0] === 'c' && parts[1]) {
      var course = COURSES.find(function (c) { return c.id === parts[1]; });
      if (!course) { renderHome(); return; }

      var idx = parseInt(parts[2], 10);
      if (isNaN(idx) || idx < 0 || idx >= course.lessons.length) idx = 0;

      renderCourse(course, idx);
      return;
    }

    renderHome();
  }

  /* ---------------- الإقلاع ---------------- */
  window.addEventListener('hashchange', route);
  window.addEventListener('DOMContentLoaded', function () {
    buildNav();
    route();

    // سنة الفوتر
    var y = $('#year');
    if (y) y.textContent = new Date().getFullYear();

    // زر القائمة للجوال
    var burger = $('#burger');
    if (burger) {
      burger.addEventListener('click', function (e) {
        e.stopPropagation();
        $('#nav').classList.toggle('open');
      });
    }
  });

  // احتياط في حال تأخر DOMContentLoaded
  if (document.readyState !== 'loading') {
    setTimeout(function () {
      if (!$('#nav').innerHTML) {
        buildNav();
        route();
        var y = $('#year');
        if (y) y.textContent = new Date().getFullYear();
      }
    }, 0);
  }

})();