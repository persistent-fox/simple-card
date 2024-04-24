import srcImg from "./../../imgs/card.jpg";
import { CustomButton } from "../Button.styled";
import { Paragraph } from "../Paragraph.styles";
import { CardWrapper } from "../CardWrapper.styled";
import styled from "./Card.module.scss";
import { Title } from "../Title.styled";

type CardPropsType = {
  title?: string;
  description?: string;
};

export function Card({ title, description }: CardPropsType) {
  return (
    <CardWrapper>
      <figure className={styled.frame}>
        <img className={styled.image} src={srcImg} alt="" />
      </figure>
      <div className={styled.wrapper}>
        <figcaption className={styled.info}>
          <Title>{title || "Headline"}</Title>
          <Paragraph type="for-card">
            {description ||
              "Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."}
          </Paragraph>
        </figcaption>
        <div className={styled.buttonWrapper}>
          <CustomButton btnType="primary">See more</CustomButton>
          <CustomButton btnType="outlined">Save</CustomButton>
        </div>
      </div>
    </CardWrapper>
  );
}
