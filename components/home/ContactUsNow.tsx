import Link from 'next/link';
import Description from '../Description';
import Heading from '../Heading';
import Container from '../common/Container';

function ContactUsNow() {
  return (
    <section className="py-20 bg-[#f8f9fa]">
      <Container className="max-w-screen-lg ">
        <div className="bg-[#2b2b2b] py-20 rounded-3xl px-3">
          <Heading
            title="Let’s get started"
            component="h2"
            className="text-center text-4xl md:text-[2.5rem] text-white font-semibold"
          />
          <Description
            text="Say goodbye to technology worries and keep your focus where it matters – on your business. Let us provide the support you deserve to elevate your real estate endeavors."
            className="mt-4 text-base md:text-lg max-w-3xl mx-auto text-center text-white/80"
          />
          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-[#4c4c4d]  bg-[linear-gradient(110deg,#2b2b2b,45%,#4f565f,55%,#2b2b2b)] bg-[length:200%_100%] px-6 font-medium text-white/70 transition-colors focus:outline-none"
            >
              Contact us now
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactUsNow;
