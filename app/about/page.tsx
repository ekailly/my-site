"use client";

import { Link } from "../../components";

const About = () => {
  return (
    <div className="container mx-auto max-w-4xl px-4">
      <div className="flex flex-col space-y-6">
        <p>
          I&apos;m working as a software engineer at{" "}
          <Link href="https://www.readywhen.com/">ReadyWhen</Link>, building{" "}
          <Link href="https://goveyance.com/">GoVeyance</Link>, a Canadian
          conveyancing tool.
        </p>
        <h2 className="text-center text-2xl font-bold">
          What I&apos;ve worked on
        </h2>
        <div>
          <h4 className="mb-4 text-center text-xl font-semibold">
            <Link href="https://www.readywhen.com/">ReadyWhen</Link>
          </h4>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Shipped smart document wording to 217 customers, rolling out
              across standard and custom documents. Updated 1,537 documents and
              removed hand-editing per matter.
            </li>
            <li>
              Rebuilt the{" "}
              <Link href="https://goveyance.com/dipi_popup_maker/bc-product-release/">
                accounts page
              </Link>
              : inline fee editing, drag-and-drop reordering, and live tax
              totals, with batched saves in one request instead of one per row.
            </li>
            <li>
              Removed off-by-one-cent fee errors by moving money math into
              shared helpers that use integer cents.
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-center text-xl font-semibold">
            <Link href="https://ev.com/">EV.com</Link>
          </h4>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Cut page weight 99.6% (5MB to 20KB) during a WordPress migration,
              speeding up <Link href="https://ev.com/search">search</Link> and
              the rest of the site.
            </li>
            <li>
              Cut the search-vehicles endpoint from 240ms to 16ms (15x faster)
              on a route handling 88k requests a week.
            </li>
            <li>
              Found the cause of creeping CPU on production Next.js and fixed it
              without taking routes down.
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-center text-xl font-semibold">
            <Link href="https://www.crunchbase.com/organization/babbly">
              Babbly
            </Link>
          </h4>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Solo React Native developer on Babbly&apos;s{" "}
              <Link href="https://apps.apple.com/ca/app/babbly-baby-speech-tracker/id1513738981">
                iOS
              </Link>{" "}
              and{" "}
              <Link href="https://play.google.com/store/apps/details?id=babbly.app&hl=en_CA&gl=US&pli=1">
                Android
              </Link>{" "}
              app, shipping onboarding and in-app video.
            </li>
            <li>
              Built a React Native web app in 4 weeks, ready for real users.
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-center text-xl font-semibold">
            <Link href="https://www.fobi.ai/">Fobi</Link>
          </h4>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Cut a MongoDB query from 30s to 1ms on a 950k-document collection
              with compound indexes.
            </li>
            <li>
              Owned frontend, backend, and infrastructure for{" "}
              <Link href="https://www.fobi.ai/passpro?hsLang=en">PassPro</Link>,{" "}
              <Link href="https://www.fobi.ai/checkpoint?hsLang=en">
                CheckPoint
              </Link>
              , <Link href="https://www.fobi.ai/altid?hsLang=en">AltID</Link>,
              and{" "}
              <Link href="https://www.fobi.ai/checkvax?hsLang=en">
                CheckVax
              </Link>
              .
            </li>
            <li>
              Led PassPro frontend design and shipped the{" "}
              <Link href="https://www.pulseir.com/">PulseIR</Link> web app, a{" "}
              <Link href="https://www.fobi.ai/press/fobi-announces-pulseir-subsidiary">
                subsidiary of Fobi
              </Link>
              .
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-center text-xl font-semibold">
            <Link href="https://medimap.ca/">Medimap</Link>
          </h4>
          <p className="mb-4 text-center">
            Has helped 12M+ Canadians find and book care.
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              One of two engineers who built patient intake for{" "}
              <Link href="https://medimap.ca/VirtualCare">
                Medimap&apos;s telemedicine product
              </Link>
              .
            </li>
            <li>
              Built full-stack features (profiles, billing, scheduling) for the{" "}
              <Link href="https://medimap.ca/ForClinics">facility portal</Link>,
              used by 4,200+ clinics across Canada.
            </li>
            <li>
              Owned releases of the mobile app (10K+ downloads), the shared
              component library, and the Electron desktop app for clinic staff.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
