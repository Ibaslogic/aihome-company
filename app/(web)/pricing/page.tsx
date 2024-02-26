import Description from '@/components/Description';
import Heading from '@/components/Heading';
import Container from '@/components/common/Container';
import { getPricingPlan } from '@/lib/client';
import { Check, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { PiCheckCircleFill } from 'react-icons/pi';

const PricingPage = async () => {
  const pricing = await getPricingPlan();

  return (
    <section className="my-12">
      <div>
        <Heading
          title="Our packages"
          className="font-semibold text-3xl sm:text-6xl mb-6 text-center pb-2"
          component="h1"
        />
        <Description
          text="Choose your pricing plan"
          className="text-base sm:text-lg mb-10"
        />
      </div>
      <Container className="max-w-screen-xl">
        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6 cursor-pointer pb-20  items-start ">
          {pricing.map((plan, index) => (
            <div
              key={plan._id}
              className="h-full flex flex-col justify-between border rounded-3xl px-6  "
            >
              <div className="rounded-3xl py-10 text-black">
                <div className="text-3xl flex  items-center font-medium">
                  {plan.title}
                </div>
                <div className="text-xl pt-6">{plan.price}</div>
                <div className="py-6">{plan.description}</div>

                <ul>
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm py-2 flex space-x-2 items-center"
                    >
                      <PiCheckCircleFill className="text-[#202d5c] mr-2 text-xl" />

                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="">
                <Link
                  href="#"
                  className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center h-11 animate-shimmer border border-blue-950/[0.96]  bg-[linear-gradient(110deg,#202d5b,45%,#2f4e78,55%,#202d5b)] bg-[length:200%_100%] px-6 font-medium transition-colors focus:outline-none"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PricingPage;
