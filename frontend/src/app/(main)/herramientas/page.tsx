import ToolsModal from '@/components/pages/herramientas/ToolsModal';

const HERRAMIENTAS: { name:string, image_url:string, homepage:string }[] = [
  {
    name: 'Chat GPT',
    image_url: '/logosIA/chatgpt-logo.svg',
    homepage: 'https://chatgpt.com/',
  },
  {
    name: 'Bing',
    image_url: '/logosIA/bing-logo.svg',
    homepage: 'https://www.bing.com/',
  },
  {
    name: 'Perplexity',
    image_url: '/logosIA/perplexity-logo.svg',
    homepage: 'https://perplexity.ai/',
  },
  {
    name: 'Copilot',
    image_url: '/logosIA/copilot-logo.svg',
    homepage: 'https://copilot.microsoft.com/',
  },
  {
    name: 'Gemini',
    image_url: '/logosIA/gemini-logo.svg',
    homepage: 'https://gemini.google.com/',
  },
  {
    name: 'Quillbot',
    image_url: '/logosIA/quillbot-logo.svg',
    homepage: 'https://quillbot.com/',
  },
  {
    name: 'Litmaps',
    image_url: '/logosIA/litmaps-logo.png',
    homepage: 'https://litmaps.com/',
  },
  {
    name: 'Jenni',
    image_url: '/logosIA/jenni-logo.webp',
    homepage: 'https://jenni.ai/',
  },
  {
    name: 'Typeset',
    image_url: '/logosIA/typeset-logo.svg',
    homepage: 'https://typeset.io/',
  },
  {
    name: 'Connectedpapers',
    image_url: '/logosIA/connectedpapers-logo.jpg',
    homepage: 'https://connectedpapers.com/',
  },
  {
    name: 'Paperdigest',
    image_url: '/logosIA/paperdigest-logo.png',
    homepage: 'paperdigest.org',
  },
  {
    name: 'Editgpt',
    image_url: '/logosIA/editgpt-logo.webp',
    homepage: 'editgpt.app',
  },
  {
    name: 'Chathub',
    image_url: '/logosIA/chathub-logo.jpeg',
    homepage: 'chathub.gg',
  },
  {
    name: 'Zotero',
    image_url: '/logosIA/zotero-logo.svg',
    homepage: 'zotero.com',
  },
  {
    name: 'Keenious',
    image_url: '/logosIA/keenious-logo.svg',
    homepage: 'keenious.com',
  },
];

export default function HerramientasPage() {
  return (
    <main className="w-full flex-1 flex justify-center items-start py-20">
      <section className="flex flex-col items-center justify-start w-full max-w-6xl gap-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Herramientas mas importantes de
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            {' '}
            IA
            {' '}
          </span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 w-full gap-20 justify-items-center">
          {
            HERRAMIENTAS.map((herramienta) => (
              <ToolsModal
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consectetur libero. Nulla facilisi. Nulla nec purus feugiat, molestie ipsum et, consectetur libero. Nulla facilisi."
                homepage={herramienta.homepage}
                logo={herramienta.image_url}
                name={herramienta.name}
                numberLikes={Math.floor(Math.random() * 100)}
                tags={['IA', 'Machine Learning', 'Deep Learning']}
                video="https://res.cloudinary.com/dazt6g3o1/video/upload/v1724428962/juvdebis2n2bkoioxd08.mp4"
                key={herramienta.name}
              />
            ))
          }
        </div>
      </section>
    </main>
  );
}
