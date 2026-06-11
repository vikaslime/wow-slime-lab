export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div className="heroText">
          <div className="badge">🧪 Для детей 7–12 лет</div>

          <h1>WOW SLIME LAB</h1>

          <h2>Создай 3 невероятных слайма за 3 дня!</h2>

          <p>
            Весёлый онлайн-челлендж, где ребёнок создаёт яркие слаймы,
            выполняет игровые задания и получает диплом настоящего Слаймолога.
          </p>

          <div className="features">
            <span>🧪 3 дня</span>
            <span>✨ 3 рецепта</span>
            <span>🏆 Диплом</span>
            <span>🚀 Доступ сразу</span>
          </div>

          <button>🚀 ХОЧУ УЧАСТВОВАТЬ</button>

          <div className="proof">
            ⭐⭐⭐⭐⭐ Авторский челлендж для детей, которые любят творчество и эксперименты
          </div>
        </div>

        <div className="videoCard">
          <video
            src="/Дизайн без названия.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </section>

      <section className="section whiteSection">
  <div className="sectionHeader">
    <h2>Что ребёнок создаст за 3 дня?</h2>
    <p>
      Каждый день — новая лабораторная миссия, новый рецепт и новый
      красивый результат своими руками.
    </p>
  </div>

  <div className="cardsGrid threeCards">
    <div className="card">
      <div className="icon">☁️</div>
      <p className="cardLabel">День 1</p>
      <h3>Cloud Slime</h3>
      <p>Мягкий, воздушный и приятный на ощупь слайм.</p>
    </div>

    <div className="card">
      <div className="icon">✨</div>
      <p className="cardLabel">День 2</p>
      <h3>Glitter Slime</h3>
      <p>Яркий слайм с блёстками и настоящим WOW-эффектом.</p>
    </div>

    <div className="card">
      <div className="icon">🌌</div>
      <p className="cardLabel">День 3</p>
      <h3>Galaxy Slime</h3>
      <p>Космический слайм с фантастическими цветами.</p>
    </div>
  </div>
</section>

      <section className="section neonSection">
        <div className="sectionHeader">
          <p className="label">Для кого</p>
          <h2>Кому подойдёт WOW Slime Lab?</h2>
        </div>

        <div className="listGrid">
          <div>✔ Детям 7–12 лет</div>
          <div>✔ Тем, кто любит творчество</div>
          <div>✔ Любителям слаймов и блёсток</div>
          <div>✔ Детям, которые хотят делать всё сами</div>
          <div>✔ Родителям, которые ищут занятие дома</div>
          <div>✔ Тем, кто любит челленджи и награды</div>
        </div>
      </section>

      <section className="section whiteSection">
        <div className="sectionHeader">
          <p className="label">Что внутри</p>
          <h2>Всё необходимое для старта</h2>
        </div>

        <div className="cardsGrid">
          <div className="card">📹 <h3>3 коротких видеоурока</h3></div>
          <div className="card">📄 <h3>Пошаговые инструкции</h3></div>
          <div className="card">🎁 <h3>Бонусный рецепт</h3></div>
          <div className="card">🏆 <h3>Диплом участника</h3></div>
          <div className="card">⭐ <h3>Игровые задания</h3></div>
          <div className="card">📱 <h3>Доступ сразу после оплаты</h3></div>
        </div>
      </section>

      <section className="section neonSection">
        <div className="sectionHeader">
          <p className="label">Польза</p>
          <h2>Почему родители выбирают WOW Slime Lab?</h2>
          <p>
            Это не просто просмотр видео. Это активное творческое участие, где
            ребёнок создаёт результат своими руками.
          </p>
        </div>

        <div className="listGrid">
          <div>🧠 Развивает творчество</div>
          <div>✋ Тренирует мелкую моторику</div>
          <div>🎨 Помогает проявить фантазию</div>
          <div>😊 Даёт чувство успеха</div>
          <div>🏆 Мотивирует завершать начатое</div>
          <div>👨‍👩‍👧 Не требует постоянной помощи взрослых</div>
        </div>
      </section>

      <section className="section whiteSection">
        <div className="sectionHeader">
          <p className="label">FAQ</p>
          <h2>Частые вопросы</h2>
        </div>

        <div className="faq">
          <div>
            <h3>Нужны ли специальные материалы?</h3>
            <p>Нет. Большинство ингредиентов легко найти дома или купить в ближайшем магазине.</p>
          </div>

          <div>
            <h3>Для какого возраста подходит курс?</h3>
            <p>Для детей от 7 до 12 лет.</p>
          </div>

          <div>
            <h3>Сколько длится один урок?</h3>
            <p>Примерно 10–15 минут.</p>
          </div>

          <div>
            <h3>Когда открывается доступ?</h3>
            <p>Сразу после оплаты.</p>
          </div>
        </div>
      </section>

      <section className="finalCta">
        <h2>Готовы создать свой первый WOW-слайм?</h2>
        <p>3 дня творчества, экспериментов и ярких эмоций.</p>
        <button>🚀 ПРИСОЕДИНИТЬСЯ К WOW SLIME LAB</button>
      </section>
    </main>
  );
}
