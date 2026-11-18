import { Link } from "../../components";

const Contact = () => (
  <div className="container mx-auto max-w-4xl px-4">
    <div className="flex flex-col space-y-4">
      <h2 className="text-center text-3xl font-bold">Contact</h2>
      <p>
        <Link href="mailto:eric.jkailly@gmail.com">eric.jkailly@gmail.com</Link>
      </p>
      <p>
        <Link href="https://www.github.com/ekailly">github.com/ekailly</Link>
      </p>
      <p>
        <Link href="https://linkedin.com/in/ekailly">
          linkedin.com/in/ekailly
        </Link>
      </p>
    </div>
  </div>
);

export default Contact;
