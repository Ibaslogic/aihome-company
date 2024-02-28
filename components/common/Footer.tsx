import { getSocials } from '@/lib/client';
import Container from './Container';
import {
  FaBullseye,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import Heading from '../Heading';

const Footer = async () => {
  const socials = await getSocials();

  return (
    <footer>
      <Container className="max-w-screen-lg">
        <div className="p-6 sm:p-8 border-b">
          <div className="flex gap-8">
            <Heading
              title="Follow us"
              component="h3"
              className="font-medium pb-0"
            />
            <ul className="flex gap-8">
              {socials?.map((item) => {
                const social = item.platform.toLowerCase();

                const socialIcon =
                  social === 'linkedin' ? (
                    <FaLinkedin size={24} />
                  ) : social === 'twitter' ? (
                    <FaTwitter size={24} />
                  ) : social === 'facebook' ? (
                    <FaFacebookSquare size={24} />
                  ) : social === 'instagram' ? (
                    <FaInstagram size={24} />
                  ) : (
                    //generic icon
                    <FaBullseye size={24} />
                  );
                {
                  return (
                    item.isActive && (
                      <li key={item._id}>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`@${item.username} ${item.platform}`}
                        >
                          {socialIcon}
                        </a>
                      </li>
                    )
                  );
                }
              })}
            </ul>
          </div>
        </div>
        <div className="p-10">
          <div className=""></div>
          <nav></nav>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
