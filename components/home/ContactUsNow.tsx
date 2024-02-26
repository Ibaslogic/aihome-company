import Link from 'next/link';
import Description from '../Description';
import Heading from '../Heading';
import Container from '../common/Container';

function ContactUsNow() {
  return (
    <section className="mt-10 md:mt-20">
      <Container className="max-w-screen-lg">
        <Heading
          title="Let’s get started"
          component="h2"
          className="text-center py-10 md:pb-8 text-4xl md:text-5xl"
        />
        <Description
          text="Say goodbye to technology worries and keep your focus where it matters – on your business. Let us provide the support you deserve to elevate your real estate endeavors."
          className="mt-4 text-lg max-w-3xl mx-auto"
        />
        <div className="mt-8 text-center">
          <Link
            href="/contact"
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-blue-950/[0.96]  bg-[linear-gradient(110deg,#202d5b,45%,#2f4e78,55%,#202d5b)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none"
          >
            Contact us now
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default ContactUsNow;
