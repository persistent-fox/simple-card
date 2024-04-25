import srcImgWebp from "../imgs/card.webp";
import srcImgJpg from "../imgs/card.jpg";
import { CustomButton } from "./Button.styled";
import { Paragraph } from "./Paragraph.styles";
import { Title } from "./Title.styled";
import styled from "styled-components";

type CardPropsType = {
  title?: string;
  description?: string;
};

export function Card({ title, description }: CardPropsType) {
  return (
    <CardWrapper>
      <figure>
        <picture>
          <source srcSet={srcImgWebp} type="image/webp" />
          <source srcSet={srcImgJpg} type="image/jpeg" />
          <img src={srcImgJpg} alt="image" />
        </picture>
      </figure>
      <div className="wrapper">
        <figcaption>
          <Title>{title || "Headline"}</Title>
          <Paragraph type="for-card">
            {description ||
              "Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."}
          </Paragraph>
        </figcaption>
        <div className="button-wrapper">
          <CustomButton as="a" btnType="primary">
            See more
          </CustomButton>
          <CustomButton btnType="outlined">Save</CustomButton>
        </div>
      </div>
    </CardWrapper>
  );
}

export const CardWrapper = styled.article`
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  max-width: 300px;
  padding: 10px;
  width: 100%;

  figure {
    max-width: 280px;
    max-height: 170px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
    overflow: hidden;
    margin-bottom: 10px;
  }

  source,
  img {
    width: 100%;
  }

  figcaption {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  .wrapper {
    padding: 10px;
  }

  .button-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    margin-top: 10px;
  }
`;
