import styled from "styled-components";
import Julia from "../../Images/julia.jpg";
import Julia2 from "../../Images/julia2.jpg";

const AboutMe = () => {
  return (
    <div>
      <GreetingBox>
        <PicWrapper>
          <InnerWrapper>
            <GreetingPic src={Julia} alt="Julia" />
          </InnerWrapper>
        </PicWrapper>
        <GreetingText>
          <Header>Julia Kellogg</Header>
          <StyledParagraph>
            My name is Julia Elizabeth Kellogg Henry (JEKH). I’m an artist from
            the suburbs of Massachusetts and the mountains of Utah. In 2023 I
            began traveling full-time with my partner, together we have been to
            over 24 countries. Living on the road has given me constant
            inspiration for my art and poetry. It is through these lenses that I
            interpret the world and it is in a free, (and often messy) creative
            state that I feel most alive.
          </StyledParagraph>
          <StyledParagraph>
            Art has always been a part of my life. Growing up in a family of
            painters, musicians, photographers, and dancers—It was always
            certain to me that I would be an artist. I can’t remember a time
            when I didn’t love to draw, paint, photograph and collage my
            experiences. I have filled dozens of journals and sketchbooks with
            the overflow that spills out of my mind. In 2021 I published my
            first collection of poetry called “Tomorrow’s Waves.” I often use
            poetry to grapple with the challenging truths of life and painting
            to immortalize the beautiful things I never want to forget. I find
            most of my inspiration from the natural beauty I encounter on my
            travels, as well as the people I hold most dear and the many artists
            I admire.
          </StyledParagraph>
        </GreetingText>

      </GreetingBox>

      <GreetingBox>
        <GreetingText>
            <StyledParagraph>
            Beyond creating, I am always learning. Whether it's understanding the history of every place I visit,
            mastering different recipies, expanding my fluency in the three languages I speak, or diving into new 
            hobbies whenever I can, I believe learning is a lifelong journey. As an empathetic activist, I aim to 
            make a positive, sustainable impact on the world. This is a space where everyone is welcome, especially
              those who have ever felt misunderstood by the world.
            </StyledParagraph>
            <StyledParagraph>
            I’m so happy to be sharing this journey with you. Thank you for visiting my website and helping make my dreams a reality.
            Your support truly means the world to me!
            </StyledParagraph>
        </GreetingText>
        <PicWrapper>
          <InnerWrapper>
            <GreetingPic src={Julia2} alt="Julia2" />
          </InnerWrapper>
        </PicWrapper>
      </GreetingBox>

    </div>
  );
};

const GreetingBox = styled.div`
  display: flex;
  justify-content: flex-start; /* Aligns items to the start */
  flex-direction: row;
  margin: 1rem;
  height: 100vh; /* Adjusted to full viewport height */
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem;
`;


const PicWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Aligns the picture to the top */
  min-width: 45rem;
  max-width: 75rem;
  position: relative; /* Changed to relative for better control */
  padding: 0 0 0 2.5rem;
  height: fit-content;
`;

const GreetingPic = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10%;
`;

const GreetingText = styled.div`
  display: flex;
  justify-content: flex-start; /* Aligns items to the start */
  flex-direction: column;
  align-items: center; /* Center items horizontally */
  padding: 5rem;
  overflow-y: auto;
  max-height: calc(100vh - 10rem);
  min-width: 10rem;

  /* Hide vertical scrollbar for Webkit browsers */
  &::-webkit-scrollbar {
    width: 0; /* Hides the scrollbar */
    background: transparent; /* Ensures background is transparent */
  }

  /* Hide vertical scrollbar for Firefox */
  scrollbar-width: none; /* Hides scrollbar for Firefox */

  /* Hide vertical scrollbar for Internet Explorer and Edge */
  -ms-overflow-style: none; /* Hides scrollbar */
`;

// Styled component for the header
const Header = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

const StyledParagraph = styled.p`
  font-size: 2rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  width: 100%;
  align-items: center;
`;

export default AboutMe;
