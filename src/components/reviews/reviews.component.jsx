import { ReviewCard } from "./_partials/review-card/review-card.component";

const Reviews = () => (
  <section className="pt-10   md:pt-24">
    <h2 className="block  text-center  text-3xl  font-heading  font-bold  mb-5  md:mb-10  text-gray-600  px-6">
      What customers say about Fetch!
    </h2>

    <div className="container  flex  gap-4  overflow-x-auto  pb-10   md:pb-24">
      <ReviewCard
        author="Zara Corbin"
        body="Chelsea is the most amazing dog walker.  So reliable and amazing with my dog Isla. I couldn’t ask for more. I would have no hesitation recommending her."
        date="November 2022"
        rating="5.0"
      />

      <ReviewCard
        author="Angela Atkinson"
        body="Chelsea is friendly and reliable. She took the time to meet our dogs and
        take key information before starting the house visits. It’s comforting
        to know our dogs are checked on and fussed by someone who clearly cares
        about them. It’s great to have photos on social media and really quick
        response time to communication. Highly recommend being part of the
        Fetch! family."
        date="November 2022"
        rating="5.0"
      />

      <ReviewCard
        author="Robin Brotherwood"
        body="Amazing service, Chelsea is extremely professional, taking lots of details before embarking on the first walk and now our dog cannot wait for his regular Monday walk with her. Highly recommended."
        date="November 2022"
        rating="5.0"
      />

      <ReviewCard
        author="Evie Lowe"
        body="Chelsea is very professional and always very good at keeping us up to date. It’s lovely to see photos from their walks every-time. She is easily contactable and we feel very safe leaving our dog in her care!"
        date="October 2022"
        rating="5.0"
      />

      <ReviewCard
        author="Megan Gillett"
        body="Friendly, caring person who obviously has love for all animals in her care. My dog is always happy to see her and go out on walks. Great communication. Pictures posted on social media which I love to see all the fun they're having."
        date="October 2022"
        rating="5.0"
      />

      <ReviewCard
        author="Sian Lloyd"
        body="Chelsea is super friendly and my dog loves his walks with her, always on time and sends updates of bookings and how walks go, would highly recommend!"
        date="April 2022"
        rating="5.0"
      />
    </div>
  </section>
);

export { Reviews };
