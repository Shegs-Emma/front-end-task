import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { FaDotCircle } from "react-icons/fa";
import {
  HomepageContainer,
  HomeHeader,
  P,
  HomeHeaderItems,
  HomeBody,
  BodyLevelOne,
  LeftSide,
  RightSide,
  Span,
  VisaSide,
  PayPalSide,
  BodyLevelTwo,
  LeftSideBody,
  Form,
  FormField,
  InputTagArea,
  Input,
  AnyRow,
  HomeSubBody,
  H3,
  H2,
  HomeBottom,
} from "./HomePage.styles";
import human from "../asssets/image-icon.png";
import payPal from "../asssets/PayPal.svg.png";
import visa from "../asssets/visacard.png";
import discover from "../asssets/discover.png";
import master from "../asssets/master.png";

const HomePage = () => {
  return (
    <HomepageContainer>
      <HomeHeader>
        <HomeHeaderItems>
          <P>TRIPS</P>
          <P>RECENTLY VIEWED</P>
          <P>BOOKINGS</P>
          <img src={human} alt="human-logo" className="image" />
        </HomeHeaderItems>
      </HomeHeader>

      <HomeBody>
        <BodyLevelOne>
          <LeftSide>
            <P>Payment Information</P>
            <Span>Choose your method of payment</Span>
          </LeftSide>
          <RightSide>
            <VisaSide>
              <img src={visa} alt="socials" className="icon_logoVisa" />
              <img src={discover} alt="socials" className="icon_logoVisa" />
            </VisaSide>
            <PayPalSide>
              <GoPrimitiveDot size="1.8rem" color="#F1F2F3" />
              <img src={payPal} alt="socials" className="icon_logoPay" />
            </PayPalSide>
          </RightSide>
        </BodyLevelOne>
        <BodyLevelTwo>
          <LeftSideBody>
            <img src={master} alt="master" className="master" />
          </LeftSideBody>
          <Form>
            <FormField>
              <InputTagArea>
                <Span cred>Credit card number</Span>
                <Input>4556 4552 0998 2263</Input>
              </InputTagArea>

              <InputTagArea>
                <Span cred>Credit card number</Span>
                <Input noPr>4556 4552 0998 2263</Input>
              </InputTagArea>
            </FormField>

            <FormField>
              <InputTagArea>
                <Span cred>Security code</Span>
                <Input>420</Input>
              </InputTagArea>

              <InputTagArea>
                <Span cred>Postal code</Span>
                <Input noPr>10119</Input>
              </InputTagArea>
            </FormField>

            <AnyRow>
              <FaDotCircle className="dot" />
              <Span cred>Use this card for next time purchase</Span>
            </AnyRow>

            <AnyRow>
              <Input button>Add card</Input>
            </AnyRow>
          </Form>
        </BodyLevelTwo>
      </HomeBody>

      <HomeSubBody>
        <AnyRow sub>
          <H3>Subtotal</H3>
          <H3>&#8358;2,497.00</H3>
        </AnyRow>
        <AnyRow sub>
          <H3>Estimated TAX</H3>
          <H3>&#8358;119.64</H3>
        </AnyRow>
        <AnyRow sub>
          <H3>
            Promotional Code: <Span>Z4KXLM9A</Span>
          </H3>
          <H3>-&#8358;60.00</H3>
        </AnyRow>
      </HomeSubBody>

      <HomeBottom>
        <Input check>Complete payment</Input>
        <H2>TOTAL: &#8358;2556.64</H2>
      </HomeBottom>
    </HomepageContainer>
  );
};

export default HomePage;
