import React from "react";
import {
  PaddingContainer,
  FlexContainer,
  Heading,
  ParaText,
  BlueText,
  IconContainer,
} from "../styles/Global.styled";
import { BsLinkedin, BsTwitter, BsYoutube, BsInstagram } from "react-icons/bs";
import {
  ShowcaseParticleContainer,
  ShowcaseImageCard,
  ShowcaseImage,
} from "../styles/Showcase.styled";
import Showcaseimg from "../assets/Showcaseimg.png";

export default function Showcase() {
  return (
    <PaddingContainer id="Home" left="3%" right="10%" top="15%" bottom="10%">
      <FlexContainer fullWidthChild>
        <div>
          <Heading as="h4" size="h4">
            Hello!
          </Heading>

          <Heading as="h1" size="h2" top="0.5rem" bottom="1rem">
            I am <BlueText>Vankamix</BlueText>
          </Heading>

          <Heading as="h3" size="h3">
            <BlueText>Frontend Developer</BlueText>
          </Heading>

          <ParaText as="p" top="2rem" bottom="4rem">
            I am a full-stack developer with a passion for creating engaging and
            user-centric experiences.
          </ParaText>

          <FlexContainer gap="20px">
            <IconContainer size="1.5rem" color="white">
              <BsLinkedin />
            </IconContainer>
            <IconContainer size="1.5rem" color="white">
              <BsTwitter />
            </IconContainer>
            <IconContainer size="1.5rem" color="white">
              <BsYoutube />
            </IconContainer>
            <IconContainer size="1.5rem" color="white">
              <BsInstagram />
            </IconContainer>
          </FlexContainer>
        </div>

        <FlexContainer justify="flex-end">
          <ShowcaseParticleContainer>
            <ShowcaseImageCard>
              <ShowcaseImage src={Showcaseimg} alt="Showcase" />
            </ShowcaseImageCard>
          </ShowcaseParticleContainer>
        </FlexContainer>
      </FlexContainer>
    </PaddingContainer>
  );
}
