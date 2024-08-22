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
              <div key={herramienta.name} className="flex items-center justify-center p-0 hover:scale-105 transition-transform rounded-md relative w-32 h-32 group">
                <img
                  src={herramienta.image_url}
                  alt={herramienta.name}
                  className="w-full h-auto rounded-lg"
                />
                <img src={herramienta.image_url} alt={herramienta.name} className="absolute top-0 left-0 blur-xl -z-10 opacity-0 w-full h-auto group-hover:opacity-100 transition-all rounded-lg" />
              </div>
            ))
          }
        </div>
      </section>
    </main>
  );
}
