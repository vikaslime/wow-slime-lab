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
            ⭐⭐⭐⭐⭐ Уже более 100 детей создали свои первые WOW-слаймы
          </div>
        </div>

        <div className="videoCard">
          <video
            src="/slime-video.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </section>
    </main>
  );
}
