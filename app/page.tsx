import { BookingProvider, BookingButton } from "../components/booking";
import { EnvironmentCarousel } from "../components/environment-carousel";
import {
  Navigation,
  Hero,
  Care,
  Reviews,
  Visit,
  Footer,
  ServiceCards,
} from "../components/sections";
export default function Home() {
  return (
    <BookingProvider>
      <Navigation />
      <main>
        <Hero />
        <div className="ribbon">
          <span>
            温柔洗护<small>GENTLE CARE</small>
          </span>
          <span>
            快乐小狗<small>HAPPY PAWS</small>
          </span>
          <span>
            用心相伴<small>MADE WITH LOVE</small>
          </span>
        </div>
        <section className="section" id="services">
          <div className="section-head">
            <div>
              <div className="eyebrow">OUR SERVICES</div>
              <h2>每一种可爱，都有专属照顾</h2>
            </div>
            <p>
              不止是洗个澡
              <br />
              也是一段被温柔对待的时光
            </p>
          </div>
          <div className="services">
            <ServiceCards />
          </div>
          <Care />
          <section className="new-block" id="environment">
            <div className="section-head">
              <div>
                <div className="eyebrow">A SPACE TO FEEL AT HOME</div>
                <h2>走进来，先放松一下</h2>
              </div>
              <p>
                店内环境
                <br />
                实景照片参考 · 非本店实拍
              </p>
            </div>
            <EnvironmentCarousel />
          </section>
          <Reviews />
          <Visit />
          <div className="cta">
            <div>
              <h2>下一次见面，香香的。</h2>
              <p>给毛孩子留一段专属的护理时光。</p>
            </div>
            <BookingButton className="btn">
              计划一次到店 <span>↗</span>
            </BookingButton>
          </div>
        </section>
      </main>
      <Footer />
    </BookingProvider>
  );
}
