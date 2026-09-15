import Section from '../components/Section';

const galleryItems = [
  {
    src: '/mekgareng.jpg',
    caption: 'Smart City Development – Hartebeespoort Dam: Mekgareng Oberon',
  },
  {
    src: '/smart-city.jpg',
    caption: 'Urban Mega City Development – Conceptual Render',
  },
  {
    src: '/agriculture.jpg',
    caption: 'Sustainable Agricultural Solutions',
  },
  {
    src: '/map.jpg',
    caption: 'Land Use & Development Planning',
  },
];

export default function Gallery() {
  return (
    <>
      <div className="page-hero">
        <h1>Our Gallery</h1>
        <p>Visualising transformative development across urban and rural landscapes.</p>
      </div>

      <Section title="Projects & Developments">
        <div className="gallery-grid">
          {galleryItems.map((item, i) => (
            <div className="gallery-item" key={i}>
              <img src={item.src} alt={item.caption} />
              <div className="gallery-item-caption">{item.caption}</div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}