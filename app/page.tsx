"use client";

import Link from "next/link";
import { useState } from "react";
import "@/styles/pages/ana-sayfa.scss";

type AboutTabId = "kurumsal" | "tedarik" | "ortaklik";

type AboutTab = {
  id: AboutTabId;
  title: string;
  subtitle: string;
  contentTitle: string;
  contentDescription: string;
  imageSrc: string;
  bullets: string[];
};

const aboutTabs: AboutTab[] = [
  {
    id: "kurumsal",
    title: "Kurumsal Yapı",
    subtitle: "Resmi hizmet anlayışı",
    contentTitle: "Güvenilir ve Kurumsal Hizmet Anlayışı",
    contentDescription:
      "CTNGLOBAL, işletmelerin toptan ürün ihtiyaçlarına düzenli, güvenilir ve profesyonel çözümler sunmak amacıyla faaliyet gösterir.",
    imageSrc: "/images/kurumsal-yapi.png",
    bullets: [
      "Resmi ve güvenilir hizmet yaklaşımı",
      "Müşteri odaklı süreç yönetimi",
      "Sürdürülebilir ticaret anlayışı",
    ],
  },
  {
    id: "tedarik",
    title: "Tedarik Gücü",
    subtitle: "Geniş ürün ağı",
    contentTitle: "Geniş Ürün Ağı ve Güçlü Tedarik Süreci",
    contentDescription:
      "Gıda ve elektronik ürün gruplarında geniş tedarik ağıyla işletmelerin ihtiyaçlarına hızlı ve planlı çözümler sunar.",
    imageSrc: "/images/tedarik.png",
    bullets: [
      "Gıda ve elektronik ürün grupları",
      "Planlı tedarik süreci",
      "Zamanında teslimat yaklaşımı",
    ],
  },
  {
    id: "ortaklik",
    title: "İş Ortaklığı",
    subtitle: "Güvenilir iş birlikleri",
    contentTitle: "Uzun Vadeli ve Güvenilir İş Birlikleri",
    contentDescription:
      "CTNGLOBAL, müşterileri ve iş ortaklarıyla güvene dayalı, uzun vadeli ve sürdürülebilir ilişkiler kurmayı hedefler.",
    imageSrc: "/images/is-ortaklari.png",
    bullets: [
      "Kurumsal iş ortaklığı yaklaşımı",
      "Şeffaf iletişim",
      "Uzun vadeli çözüm odaklı çalışma",
    ],
  },
];

export default function AnaSayfa() {
  const [activeTabId, setActiveTabId] = useState<AboutTabId>("kurumsal");
  const activeTab = aboutTabs.find((tab) => tab.id === activeTabId) ?? aboutTabs[0];

  return (
    <main className="home-page">
      <header className="home-header">
        <div className="home-header-inner">
          <Link href="/" className="home-header-logo-link">
            <img
              src="/images/ctnglobal_logo.jpg"
              alt="CTNGLOBAL"
              className="home-header-logo"
            />
          </Link>

          <nav className="home-header-nav" aria-label="Ana menü">
            <Link href="/" className="home-header-nav-link home-header-nav-link--active">
              Anasayfa
            </Link>
            <Link href="/hakkimizda" className="home-header-nav-link">
              Hakkımızda
            </Link>
            <Link href="/faaliyet-alanlari" className="home-header-nav-link">
              Faaliyet Alanları
            </Link>
          </nav>

          <Link href="/iletisim" className="home-header-cta">
            İletişim
          </Link>
        </div>
      </header>

      <section className="home-hero">
        <div className="home-hero-inner">
          <div className="home-hero-content">
            <span className="home-hero-label">Yetkili Bayi & Toptan Ticaret</span>

            <h1 className="home-hero-title">
              Gıda ve Elektronik Toptan Satışında Güvenilir Çözüm Ortağınız
            </h1>

            <p className="home-hero-description">
              CTNGLOBAL, gıda ve elektronik sektörlerinde geniş ürün ağı, güvenilir
              tedarik süreci ve kurumsal hizmet anlayışıyla toptan satış çözümleri
              sunar.
            </p>

            <div className="home-hero-actions">
              <Link href="/faaliyet-alanlari" className="home-hero-button home-hero-button--primary">
                Faaliyet Alanlarımız
              </Link>
              <Link href="/iletisim" className="home-hero-button home-hero-button--secondary">
                İletişime Geçin
              </Link>
            </div>
          </div>

          <div className="home-hero-visual" aria-hidden="true">
            <div className="home-hero-visual-frame">
              <div className="home-hero-visual-media">
                <img
                  src="/images/ctnglobal-hero.png"
                  alt=""
                  className="home-hero-visual-placeholder"
                />
                <span className="home-hero-visual-overlay" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>

        <div className="home-hero-angle" aria-hidden="true" />
      </section>

      <section className="home-about" aria-labelledby="home-about-title">
        <div className="home-about-inner">
          <h2 id="home-about-title" className="home-about-title">
            CTN Global Kimdir?
          </h2>
          <p className="home-about-description">
            Gıda ve elektronik toptan satış alanlarında güvenilir tedarik, kurumsal
            hizmet ve sürdürülebilir iş ortaklığı anlayışıyla faaliyet gösteriyoruz.
          </p>

          <div className="home-about-panel">
            <div className="home-about-tabs" role="tablist" aria-label="CTN Global Kimdir sekmeleri">
              {aboutTabs.map((tab) => {
                const isActive = tab.id === activeTabId;

                return (
                  <button
                    key={tab.id}
                    id={`home-about-tab-${tab.id}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`home-about-tab${isActive ? " home-about-tab--active" : ""}`}
                    onClick={() => setActiveTabId(tab.id)}
                  >
                    <span className="home-about-tab-icon" aria-hidden="true">
                      {tab.id === "kurumsal" && (
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <rect x="2" y="4" width="14" height="12" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M6 4V2.5H12V4" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                      )}
                      {tab.id === "tedarik" && (
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <path d="M2 5H16L14 14H4L2 5Z" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M2 5L4 2H14L16 5" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                      )}
                      {tab.id === "ortaklik" && (
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <circle cx="6" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" />
                          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M8.2 7.8L9.8 10.2" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                      )}
                    </span>
                    <span className="home-about-tab-text">
                      <span className="home-about-tab-title">{tab.title}</span>
                      <span className="home-about-tab-subtitle">{tab.subtitle}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            <div
              className="home-about-content"
              role="tabpanel"
              aria-labelledby={`home-about-tab-${activeTab.id}`}
            >
              <div key={activeTabId} className="home-about-content-panel">
              <div className="home-about-content-body">
                <h3 className="home-about-content-title">{activeTab.contentTitle}</h3>
                <p className="home-about-content-description">{activeTab.contentDescription}</p>
                <ul className="home-about-content-list">
                  {activeTab.bullets.map((item) => (
                    <li key={item} className="home-about-content-list-item">
                      <span className="home-about-content-check" aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path
                            d="M2.5 7L5.5 10L11.5 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="home-about-content-visual">
                <img
                  src={activeTab.imageSrc}
                  alt=""
                  className="home-about-content-visual-img"
                />
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-fields" aria-labelledby="home-fields-title">
        <div className="home-fields-inner">
          <div className="home-fields-header">
            <div className="home-fields-eyebrow">
              <span className="home-fields-eyebrow-line" aria-hidden="true" />
              <span className="home-fields-eyebrow-text">FAALİYET ALANLARI</span>
            </div>
            <h2 id="home-fields-title" className="home-fields-title">
              Ne Yapıyoruz?
            </h2>
            <p className="home-fields-description">
              Üç temel sektörde toptan ticaret ve yetkili bayi hizmetleri.
            </p>
          </div>

          <div className="home-fields-cards">
            <article className="home-fields-card">
              <span className="home-fields-card-category">01 – GIDA</span>
              <span className="home-fields-card-icon home-fields-card-icon--gida" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path
                    d="M4 10C4 6 7 3 11 3C15 3 18 6 18 10C18 14 15 17 11 19C7 17 4 14 4 10Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path d="M8 10H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
              <h3 className="home-fields-card-title">Toptan Gıda Ticareti</h3>
              <p className="home-fields-card-description">
                Geniş ürün yelpazesiyle toptan gıda tedariki ve dağıtım hizmetleri sunuyor;
                kaliteli ürünleri güvenilir bir tedarik zinciriyle işletmelere ulaştırıyoruz.
              </p>
              <div className="home-fields-card-footer">
                <span className="home-fields-card-badge">TOPTAN DAĞITIM</span>
                <span className="home-fields-card-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            </article>

            <article className="home-fields-card">
              <span className="home-fields-card-category">02 – ELEKTRONİK</span>
              <span className="home-fields-card-icon home-fields-card-icon--brand" aria-hidden="true">
                <img
                  src="/images/kiwi_logo.png"
                  alt=""
                  className="home-fields-card-icon-img"
                />
              </span>
              <h3 className="home-fields-card-title">Kiwi Elektronik Bayiliği</h3>
              <p className="home-fields-card-description">
                Türkiye merkezli Kiwi markasının küçük ev aletleri gamında yetkili toptan satış
                ortağıyız. Blender&apos;dan kahve makinesine, ütüden süpürgeye geniş ürün portföyü.
              </p>
              <div className="home-fields-card-footer">
                <span className="home-fields-card-badge">YETKİLİ BAYİ</span>
                <span className="home-fields-card-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            </article>

            <article className="home-fields-card">
              <span className="home-fields-card-category">03 – KİŞİSEL BAKIM</span>
              <span className="home-fields-card-icon home-fields-card-icon--brand" aria-hidden="true">
                <img
                  src="/images/aprilla_logo.png"
                  alt=""
                  className="home-fields-card-icon-img"
                />
              </span>
              <h3 className="home-fields-card-title">Aprilla</h3>
              <p className="home-fields-card-description">
                2015 kuruluşlu yerli marka Aprilla&apos;nın kişisel bakım elektroniğinde yetkili
                distribütörüyüz. Tıraş makinesi, epilasyon aleti, saç kurutma ve daha fazlası.
              </p>
              <div className="home-fields-card-footer">
                <span className="home-fields-card-badge">YETKİLİ BAYİ</span>
                <span className="home-fields-card-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="home-petivedi" aria-labelledby="home-petivedi-title">
        <div className="home-petivedi__inner">
          <div className="home-petivedi__content">
            <span className="home-petivedi__badge">Çok Yakında</span>
            <span className="home-petivedi__eyebrow">Yeni Markamız</span>
            <h2 id="home-petivedi-title" className="home-petivedi__title">
              PETİVEDİ Çok Yakında Sizlerle
            </h2>
            <p className="home-petivedi__description">
              CTNGLOBAL çatısı altında hayata geçecek PETİVEDİ, evcil dostlarınızın ihtiyaçlarına
              yönelik ürünleri e-ticaret deneyimiyle sunacak yeni online petshop markamızdır.
            </p>
            <p className="home-petivedi__domain">petivedi.com</p>
            <p className="home-petivedi__note">Online petshop deneyimi yakında başlıyor.</p>
            <span className="home-petivedi__button">Yakında</span>
          </div>

          <div className="home-petivedi__visual">
            <img
              src="/images/petivedi.png"
              alt="PETİVEDİ"
              className="home-petivedi__logo"
            />
          </div>
        </div>
      </section>

      <section className="home-brands" aria-labelledby="home-brands-title">
        <div className="home-brands__inner">
          <div className="home-brands__header">
            <div className="home-brands__header-left">
              <span className="home-brands__eyebrow">MARKALARIMIZ</span>
              <h2 id="home-brands-title" className="home-brands__title">
                Yetkili Bayisi Olduğumuz Markalar
              </h2>
            </div>
            <p className="home-brands__header-description">
              Kiwi ve Aprilla markalarında toptan satış, kurumsal tedarik ve bayi kanalı
              yönetimini üstleniyoruz.
            </p>
          </div>

          <div className="home-brands__divider" aria-hidden="true" />

          <div className="home-brands__grid">
            <article className="home-brands__column">
              <img
                src="/images/kiwi_logo.png"
                alt="Kiwi"
                className="home-brands__logo home-brands__logo--kiwi"
              />
              <h3 className="home-brands__column-title">Kiwi Elektronik – Küçük Ev Aletleri</h3>
              <p className="home-brands__column-description">
                İstanbul merkezli Türk markası Kiwi, 2016&apos;dan bu yana küçük ev aletleri üretiyor.
                20&apos;den fazla ülkeye ihracat yapan markada yetkili toptan satış ortağıyız. Her ürün
                için 2 yıl garanti ile kurumsal tedarik hizmetleri sunuyoruz.
              </p>
              <span className="home-brands__distributor">Yetkili Toptan Distribütör</span>
              <h4 className="home-brands__list-title">TEMSİLİ ÜRÜN KATEGORİLERİ</h4>
              <ul className="home-brands__list">
                <li className="home-brands__list-item">Çay & Kahve Makineleri</li>
                <li className="home-brands__list-item">Blender & Doğrayıcı</li>
                <li className="home-brands__list-item">Tost & Sandviç Makinesi</li>
                <li className="home-brands__list-item">Buharlı Ütü</li>
                <li className="home-brands__list-item">Elektrikli Süpürge</li>
                <li className="home-brands__list-item">Izgara & Buharlı Pişirici</li>
              </ul>
            </article>

            <article className="home-brands__column">
              <img
                src="/images/aprilla_logo.png"
                alt="Aprilla"
                className="home-brands__logo home-brands__logo--aprilla"
              />
              <h3 className="home-brands__column-title">Aprilla Elektronik – Kişisel Bakım</h3>
              <p className="home-brands__column-description">
                2015 yılında kurulan yerli marka Aprilla, kişisel bakım elektroniğinde kaliteyi ve
                yaratıcılığı bir arada sunuyor. Ergonomik tasarımları ve kullanıcı dostu ürünleriyle
                sektörde saygın bir konuma ulaşmış markada yetkili toptan distribütörüyüz.
              </p>
              <span className="home-brands__distributor">Yetkili Toptan Distribütör</span>
              <h4 className="home-brands__list-title">TEMSİLİ ÜRÜN KATEGORİLERİ</h4>
              <ul className="home-brands__list">
                <li className="home-brands__list-item">Tıraş & Sakal Makinesi</li>
                <li className="home-brands__list-item">Epilasyon Aleti</li>
                <li className="home-brands__list-item">Saç Kurutma Makinesi</li>
                <li className="home-brands__list-item">Saç Kesim Makinesi</li>
                <li className="home-brands__list-item">Masaj Aleti</li>
                <li className="home-brands__list-item">Dijital Tartı & Sağlık</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="home-cta" aria-labelledby="home-cta-title">
        <div className="home-cta-inner">
          <h2 id="home-cta-title" className="home-cta-title">
            Toptan satış ihtiyaçlarınız için bizimle iletişime geçin.
          </h2>
          <p className="home-cta-description">
            Gıda, elektronik ve kişisel bakım ürün gruplarında profesyonel tedarik çözümleri
            için CTNGLOBAL ile iletişime geçebilirsiniz.
          </p>
          <Link href="/iletisim" className="home-cta-button">
            İletişime Geçin
          </Link>
        </div>
      </section>

      <footer className="home-footer">
        <div className="home-footer-inner">
          <div className="home-footer-grid">
            <div className="home-footer-brand">
              <Link href="/" className="home-footer-logo-link">
                <img
                  src="/images/ctnglobal_logo.jpg"
                  alt="CTNGLOBAL"
                  className="home-footer-logo"
                />
              </Link>
              <p className="home-footer-brand-description">
                Gıda ve elektronik toptan satış alanlarında güvenilir tedarik ve kurumsal iş
                ortaklığı çözümleri sunar.
              </p>
            </div>

            <div className="home-footer-column">
              <h3 className="home-footer-column-title">Sayfalar</h3>
              <nav className="home-footer-nav" aria-label="Footer sayfa bağlantıları">
                <Link href="/" className="home-footer-link">
                  Ana Sayfa
                </Link>
                <Link href="/hakkimizda" className="home-footer-link">
                  Hakkımızda
                </Link>
                <Link href="/faaliyet-alanlari" className="home-footer-link">
                  Faaliyet Alanları
                </Link>
                <Link href="/iletisim" className="home-footer-link">
                  İletişim
                </Link>
              </nav>
            </div>

            <div className="home-footer-column">
              <h3 className="home-footer-column-title">Faaliyet Alanları</h3>
              <ul className="home-footer-list">
                <li className="home-footer-list-item">Toptan Gıda Ticareti</li>
                <li className="home-footer-list-item">Kiwi Elektronik Bayiliği</li>
                <li className="home-footer-list-item">Aprilla Elektronik Bayiliği</li>
              </ul>
            </div>

            <div className="home-footer-column">
              <h3 className="home-footer-column-title">İletişim</h3>
              <ul className="home-footer-list">
                <li className="home-footer-list-item">
                  <a href="mailto:info@ctnglobal.com.tr" className="home-footer-link">
                    info@ctnglobal.com.tr
                  </a>
                </li>
                <li className="home-footer-list-item">
                  <a href="tel:08508400191" className="home-footer-link">
                    0850 840 01 91
                  </a>
                </li>
                <li className="home-footer-list-item">
                  Macun, Batı Blv. ATB İş Merkezi No:1/5 Yenimahalle/ANKARA
                </li>
              </ul>
            </div>
          </div>

          <div className="home-footer-bottom">
            <p className="home-footer-copyright">© 2026 CTNGLOBAL. Tüm hakları saklıdır.</p>
            <p className="home-footer-company">Teknoloji | Ticaret A.Ş.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
