const BEAR = `ᕦʕ •\`ᴥ•\´ʔᕤ`;

const Home = () => (
  <div className="container mx-auto max-w-4xl px-4">
    <div className="flex flex-col items-center space-y-6">
      <pre className="text-sm leading-tight" aria-label="ASCII bear face">
        {BEAR}
      </pre>
    </div>
  </div>
);

export default Home;
