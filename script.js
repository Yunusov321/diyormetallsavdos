const dict = {
    ru:{
      nav:{products:'Продукция', services:'Услуги', about:'О компании', contacts:'Контакты'},
      hero:{title:'Металлопрокат, резка, доставка — в срок и по честной цене', text:'Оптовые и розничные поставки арматуры, листа, балок, труб. Резка в размер, гибка, пескоструй и горячее цинкование.', btn1:'Смотреть продукцию', btn2:'Запросить прайс', overlay:'Поставщик металла №1 для стройки и производства'},
      products:{title:'Продукция', sub:'Популярные позиции со склада в Ташкенте. Сертификаты и паспорта качества прилагаются.', arm:{title:'Арматура A500C', text:'Ø 8–32 мм. Поставляем в прутках и в бухтах. Резка в размер.'}, sheet:{title:'Лист горячекатаный', text:'S235/S355, 2–20 мм. Плазменная, газовая и лазерная резка.'}, beam:{title:'Балка двутавровая', text:'10Б1–45Б2. Порезка и сверловка полок, грунт и цинк.'}, pipe:{title:'Труба профильная/круглая', text:'20×20–100×100, Ø 15–219 мм. Ст3/09Г2С. Порезка, зачистка.'}},
      services:{title:'Услуги', sub:'От заявки до доставки — всё закрываем сами, чтобы вы не отвлекались от проекта.', cut:{t:'Резка/гибка', d:'Плазма, газ, ленточнопильные станки. Точность до 0.5 мм.'}, coat:{t:'Покрытия', d:'Грунт-эмаль, порошок, горячее цинкование и пескоструй.'}, log:{t:'Логистика', d:'Доставка по Узбекистану в течение 24–72 часов. Страховка.'}, docs:{t:'Документы', d:'Паспорта качества, счет/договор, закрывающие документы.'}},
      about:{s1:'Склад 4 500 м² • 1 200 т в наличии', s2:'Собственный цех резки и гибки', s3:'Контроль качества на каждом этапе'},
      stats:{tons:'тонн на складе', area:'м² складских площадей', hours:'часа доставка по стране', since:'работаем с'},
      contacts:{title:'Свяжитесь с нами', sub:'Отправьте заявку — пришлём прайс-лист и предложим варианты из наличия.', note:'Нажимая «Отправить», вы соглашаетесь с обработкой персональных данных.'},
      form:{name:'Имя', phone:'Телефон', company:'Компания (необязательно)', msg:'Что нужно?', send:'Отправить', sent:'Заявка отправлена! Мы свяжемся с вами.'}
    },
    uz:{
      nav:{products:'Mahsulotlar', services:'Xizmatlar', about:'Kompaniya haqida', contacts:'Aloqa'},
      hero:{title:'Metall prokat, kesish, yetkazib berish — o‘z vaqtida va halol narxda', text:'Armatura, list, nurlardan tortib trubalargacha — ulgurji va chakana. O‘lchamga ko‘ra kesish, bukish, qum purkash va ruxlash.', btn1:'Mahsulotlarni ko‘rish', btn2:'Prais so‘rash', overlay:'Qurilish va ishlab chiqarish uchun metall yetkazib beruvchi №1'},
      products:{title:'Mahsulotlar', sub:'Toshkent omboridan mashhur pozitsiyalar. Sertifikatlar taqdim etiladi.', arm:{title:'A500C armatura', text:'Ø 8–32 mm. Novda yoki buklama. O‘lchamga ko‘ra kesish.'}, sheet:{title:'Issiq prokat list', text:'S235/S355, 2–20 mm. Plazma, gaz va lazerli kesish.'}, beam:{title:'Ikki tizmali nur', text:'10B1–45B2. Tokchalarni teshlash, grunt va rux.'}, pipe:{title:'Profil/aylana truba', text:'20×20–100×100, Ø 15–219 mm. St3/09G2S. Kesish, tozalash.'}},
      services:{title:'Xizmatlar', sub:'Arizadan yetkazib berishgacha — hammasini o‘zimiz bajarib beramiz.', cut:{t:'Kesish/bukish', d:'Plazma, gaz, lenta arra. Aniqlik 0.5 mm gacha.'}, coat:{t:'Qoplamalar', d:'Grunt-emal, kukunli bo‘yoq, issiq ruxlash va qum purkash.'}, log:{t:'Logistika', d:'O‘zbekiston bo‘ylab 24–72 soat ichida yetkazib berish. Sug‘urta.'}, docs:{t:'Hujjatlar', d:'Sifat pasportlari, hisob/shartnoma va yopuvchi hujjatlar.'}},
      about:{s1:'Ombor 4 500 m² • 1 200 t mavjud', s2:'O‘z kesish va bukish seximiz', s3:'Har bosqichda sifat nazorati'},
      stats:{tons:'tonna omborda', area:'m² ombor maydoni', hours:'soat ichida yetkazish', since:'dan beri ishlaymiz'},
      contacts:{title:'Biz bilan bog‘laning', sub:'Ariza yuboring — prays-jadvalni jo‘natamiz.', note:'«Yuborish» tugmasini bosib, shaxsiy maʼlumotni qayta ishlashga rozilik bildirasiz.'},
      form:{name:'Ism', phone:'Telefon', company:'Kompaniya (ixtiyoriy)', msg:'Nima kerak?', send:'Yuborish', sent:'Ariza yuborildi! Tez orada aloqaga chiqamiz.'}
    },
    en:{
      nav:{products:'Products', services:'Services', about:'About', contacts:'Contacts'},
      hero:{title:'Steel products, cutting, delivery — on time and fairly priced', text:'Rebar, sheets, beams, pipes. Cut-to-size, bending, sandblasting and hot-dip galvanizing.', btn1:'Browse products', btn2:'Request price list', overlay:'#1 steel supplier for construction & manufacturing'},
      products:{title:'Products', sub:'Top items in stock in Tashkent. Mill test certificates provided.', arm:{title:'Rebar A500C', text:'Ø 8–32 mm. Bars and coils. Cut to size.'}, sheet:{title:'Hot-rolled sheet', text:'S235/S355, 2–20 mm. Plasma, oxy-fuel and laser cutting.'}, beam:{title:'I-beam', text:'10B1–45B2. Flange drilling, primer & galvanizing.'}, pipe:{title:'Profile/round pipe', text:'20×20–100×100, Ø 15–219 mm. St3/09G2S. Cutting, deburring.'}},
      services:{title:'Services', sub:'From inquiry to delivery — handled end‑to‑end so you can focus on the job.', cut:{t:'Cutting/Bending', d:'Plasma, oxy-fuel, band saws. Accuracy up to 0.5 mm.'}, coat:{t:'Coatings', d:'Primer enamel, powder coat, hot-dip galvanizing and sandblasting.'}, log:{t:'Logistics', d:'Delivery across Uzbekistan within 24–72 hours. Insured.'}, docs:{t:'Documents', d:'Mill certs, invoices/contracts and closing docs.'}},
      about:{s1:'Warehouse 4,500 m² • 1,200 t in stock', s2:'In‑house cutting & bending shop', s3:'Quality control at every step'},
      stats:{tons:'tons in stock', area:'m² of warehouse area', hours:'hours delivery nationwide', since:'operating since'},
      contacts:{title:'Get in touch', sub:'Send a request — we will email the price list and stock options.', note:'By clicking “Send”, you agree to personal data processing.'},
      form:{name:'Name', phone:'Phone', company:'Company (optional)', msg:'What do you need?', send:'Send', sent:'Request sent! We will contact you soon.'}
    }
  };

  const i18n = {
    lang: localStorage.getItem('lang') || 'ru',
    t(path){
      return path.split('.').reduce((a,k)=>a&&a[k], dict[this.lang]) || '';
    },
    apply(){
      document.documentElement.lang = this.lang;
      document.querySelectorAll('[data-i18n]').forEach(el=>{
        el.textContent = this.t(el.getAttribute('data-i18n'));
      });
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
        el.placeholder = this.t(el.getAttribute('data-i18n-placeholder'));
      });
      document.querySelectorAll('.lang button').forEach(b=>b.classList.toggle('active', b.dataset.lang===this.lang));
    },
    set(l){ this.lang=l; localStorage.setItem('lang', l); this.apply(); }
  };

  document.querySelectorAll('.lang button').forEach(btn=>{
    btn.addEventListener('click', ()=> i18n.set(btn.dataset.lang));
  });
  i18n.apply();


  document.getElementById('y').textContent = new Date().getFullYear();

  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  let index = 0;
  function go(i){ index = (i+slides.length)%slides.length; track.style.transform = `translateX(${-index*100}%)`; }
  document.querySelector('.carousel .prev').onclick=()=>go(index-1);
  document.querySelector('.carousel .next').onclick=()=>go(index+1);
  setInterval(()=>go(index+1), 3000);

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        const el = e.target; const target = +el.dataset.counter; let n=0; const step = Math.max(1, Math.floor(target/60));
        const timer = setInterval(()=>{ n+=step; if(n>=target){ n=target; clearInterval(timer);} el.textContent = n.toLocaleString('ru-RU'); }, 16);
        io.unobserve(el);
      }
    })
  }, {threshold:.3});
  document.querySelectorAll('[data-counter]').forEach(el=>io.observe(el));