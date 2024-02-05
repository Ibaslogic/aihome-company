import Description from '../Description';
import Heading from '../Heading';
import Container from '../common/Container';

const AboutSummary = () => {
  return (
    <section className="mt-10 md:mt-20">
      <Container>
        <Heading
          title="Lorem, ipsum dolor sit amet consectetur"
          component="h2"
          className="text-center"
        />
        <Description
          text="Suspendisse ut magna porttitor, sollicitudin ligula at, molestie dolor. Vivamus a ligula ut velit placerat egestas at id leo. Nulla ac volutpat nunc. Nulla facilisi. Pellentesque tempus tellusut magna porttitor scelerisque."
          className="max-w-3xl text-center mx-auto"
        />
      </Container>
    </section>
  );
};

export default AboutSummary;
