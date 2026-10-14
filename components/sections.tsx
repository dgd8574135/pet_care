import { BookingButton } from "./booking";
import { VisitActions } from "./copy-address";
export function Navigation() {
  return (
    <nav>
      <a className="logo" href="#">
        <span className="paw">✿</span>
        <span>
          爪爪泡泡<small>PAW PAW · PET SPA</small>
        </span>
      </a>
      <div className="links">
        <a href="#services">洗护服务</a>
        <a href="#care">我们的用心</a>
        <a href="#environment">店内环境</a>
        <a href="#reviews">顾客评价</a>
        <a href="#visit">到店指南</a>
      </div>
      <BookingButton className="book">预约一次小焕新 ↗</BookingButton>
    </nav>
  );
}

export function Hero() {
  return (
    <section className="hero">
      <div>
        <div className="eyebrow">A LITTLE BUBBLE, A LOT OF LOVE</div>
        <h1>
          把每一份可爱，
          <br />
          照顾得<span>刚刚好。</span>
        </h1>
        <p className="lead">
          洗去小烦恼，留住毛茸茸的快乐。
          <br />
          从温柔洗护到精致造型，给它一次舒服的小焕新。
        </p>
        <div className="actions">
          <BookingButton className="btn">
            预约洗护 <span>↗</span>
          </BookingButton>
          <a className="secondary" href="#services">
            探索我们的服务 ↓
          </a>
        </div>
        <div className="trust">
          <span>温柔对待每只宠物</span>
          <span>一宠一消毒</span>
          <span>透明洗护流程</span>
        </div>
      </div>
      <div className="hero-photo">
        <img
          src="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1100&q=85"
          alt="阳光下毛茸茸的可爱狗狗"
        />
        <span className="photo-tag">今天，也要做香香的小可爱 ♡</span>
        <span className="spark">✳</span>
        <div className="float">
          <span style={{ fontSize: 30 }}>🫧</span>
          <div>
            <b>从爪尖到心尖的呵护</b>
            <small>Fresh paws. Happy hearts.</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Care() {
  return (
    <div className="care" id="care">
      <div>
        <div className="eyebrow">CARE IN EVERY DETAIL</div>
        <h2>
          慢一点，
          <br />
          让它安心一点。
        </h2>
        <p>
          我们相信，好的洗护从理解开始。
          <br />
          先认识它的小习惯，再用合适的节奏照顾它。
          <br />
          每一个小细节，都是一份大大的在意。
        </p>
      </div>
      <div className="steps">
        <div className="step">
          <b>01</b>
          <div>
            <h3>先认识，再开始</h3>
            <p>了解宠物状态、毛发特点与洗护需求。</p>
          </div>
        </div>
        <div className="step">
          <b>02</b>
          <div>
            <h3>温柔洗护，全程关照</h3>
            <p>观察宠物反应，及时调整洗护节奏。</p>
          </div>
        </div>
        <div className="step">
          <b>03</b>
          <div>
            <h3>清爽回家，细心叮嘱</h3>
            <p>分享日常梳毛建议，把舒适带回家。</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Reviews() {
  return (
    <section className="new-block" id="reviews">
      <div className="section-head">
        <div>
          <div className="eyebrow">LITTLE STORIES, HAPPY PAWS</div>
          <h2>洗完香香的，心情也好好的</h2>
        </div>
        <p>
          顾客评价文案示例
          <br />
          待替换为真实授权评价
        </p>
      </div>
      <div className="reviews">
        <article className="review">
          <div className="stars" aria-label="五星文案示例">
            ★★★★★
          </div>
          <blockquote>
            “豆豆有点怕生，我一开始还挺担心的。店员没有急着开始，先让它熟悉了一下，剪完也不是那种硬邦邦的造型，圆圆的很可爱。”
          </blockquote>
          <div className="review-person">
            <span className="avatar">🐶</span>
            <div>
              <b>小林和豆豆</b>
              <small>泰迪 · 造型护理 · 虚构人物示例</small>
            </div>
          </div>
        </article>
        <article className="review">
          <div className="stars" aria-label="五星文案示例">
            ★★★★★
          </div>
          <blockquote>
            “最喜欢洗完以后摸起来蓬蓬松松的感觉！脚底毛和指甲都处理得很仔细，店员还特意跟我说了日常护理的小细节，回家遛弯都觉得它走路轻快了。”
          </blockquote>
          <div className="review-person">
            <span className="avatar">🐾</span>
            <div>
              <b>阿圆家的年糕</b>
              <small>柯基 · 基础洗护 · 虚构人物示例</small>
            </div>
          </div>
        </article>
        <article className="review">
          <div className="stars" aria-label="五星文案示例">
            ★★★★★
          </div>
          <blockquote>
            “我家猫脾气比较大，选洗护真的会纠结。店员会看它的状态，紧张了就停一停，结束后还跟我聊了在家怎么梳毛，感觉挺踏实。”
          </blockquote>
          <div className="review-person">
            <span className="avatar">🐱</span>
            <div>
              <b>橙子妈妈</b>
              <small>猫咪 · 轻柔洗护 · 虚构人物示例</small>
            </div>
          </div>
        </article>
      </div>
      <p className="caption">
        以上为展示版评价文案，并非真实顾客反馈或实际评分。
      </p>
    </section>
  );
}

export function Visit() {
  return (
    <section className="new-block" id="visit">
      <div className="section-head">
        <div>
          <div className="eyebrow">COME SAY HELLO</div>
          <h2>我们在这里，等你和它</h2>
        </div>
        <p>到店前可先保存地址</p>
      </div>
      <div className="visit-card">
        <div className="visit-copy">
          <span className="caption">门店地址 · 上海金山</span>
          <h3>
            上海市金山区
            <br />
            林拓路219号
          </h3>
          <p className="caption">
            地图位置见右侧示意。导航时请确认目的地为林拓路219号；营业时间与联系电话待补充。
          </p>
          <VisitActions />
        </div>
        <img
          className="visit-map"
          src="/assets/location-map.png"
          alt="用户提供的门店位置地图，标记位于上海市金山区林拓路附近"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <span>© 2026 爪爪泡泡 PAW PAW PET SPA</span>
      <span>上海市金山区林拓路219号 · 价格、环境与评价为展示示例</span>
    </footer>
  );
}

export function ServiceCards() {
  return (
    <>
      <article className="service">
        <div className="pic">
          <img
            src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=700&q=80"
            alt="小型犬洗护服务"
            loading="lazy"
          />
          <span>01 / 日常洁净</span>
        </div>
        <div className="body">
          <h3>泡泡基础洗护</h3>
          <p>
            温水沐浴 · 毛发吹护 · 指甲修剪
            <br />
            从日常开始，清清爽爽地奔向你。
          </p>
          <div className="service-foot">
            <div className="price">
              ¥ 99 <small>起 / 示例价格</small>
            </div>
            <BookingButton
              className="round"
              aria-label="预约基础洗护"
              service="泡泡基础洗护"
            >
              ↗
            </BookingButton>
          </div>
        </div>
      </article>
      <article className="service">
        <div className="pic">
          <img
            src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=700&q=80"
            alt="精致造型的宠物狗"
            loading="lazy"
          />
          <span>02 / 可爱加倍</span>
        </div>
        <div className="body">
          <h3>毛茸茸造型护理</h3>
          <p>
            基础洗护 · 全身修剪 · 专属造型
            <br />
            找到适合它的风格，让可爱自在生长。
          </p>
          <div className="service-foot">
            <div className="price">
              ¥ 199 <small>起 / 示例价格</small>
            </div>
            <BookingButton
              className="round"
              aria-label="预约造型护理"
              service="毛茸茸造型护理"
            >
              ↗
            </BookingButton>
          </div>
        </div>
      </article>
      <article className="service">
        <div className="pic">
          <img
            src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=700&q=80"
            alt="安静休息的猫咪"
            loading="lazy"
          />
          <span>03 / 猫咪专属</span>
        </div>
        <div className="body">
          <h3>喵星人轻柔洗护</h3>
          <p>
            舒缓适应 · 温柔清洁 · 细致梳毛
            <br />
            多一点耐心，照顾敏感的小情绪。
          </p>
          <div className="service-foot">
            <div className="price">
              ¥ 159 <small>起 / 示例价格</small>
            </div>
            <BookingButton
              className="round"
              aria-label="预约猫咪洗护"
              service="喵星人轻柔洗护"
            >
              ↗
            </BookingButton>
          </div>
        </div>
      </article>
    </>
  );
}
