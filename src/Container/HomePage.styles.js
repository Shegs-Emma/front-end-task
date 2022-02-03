import styled from "styled-components";

const HomepageContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const HomeHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 3rem 0;
  border-bottom: 1px solid #e6e7e9;
`;

const P = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #353b50;
  text-align: left;
`;

const Span = styled.span`
  font-size: 12px;
  font-weight: 300;
  text-align: left;
  margin-top: 0.8rem;
  margin-bottom: ${({ cred }) => (cred ? "0.5rem" : "")};
`;

const HomeHeaderItems = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
`;

const HomeBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 3rem auto;
`;

const BodyLevelOne = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
`;

const RightSide = styled.div`
  display: flex;
  width: 20%;
  justify-content: space-between;
`;

const VisaSide = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-between;
`;

const PayPalSide = styled.div`
  display: flex;
  width: 55%;
  justify-content: space-between;
`;

const BodyLevelTwo = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2rem;
  padding-bottom: 2rem;
  justify-content: space-between;
  border-bottom: 1px solid #e6e7e9;
`;

const LeftSideBody = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-start;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: -1rem;
`;

const FormField = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const InputTagArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  justify-content: space-between;
`;

const Input = styled.div`
  border: 1px solid #e6e7e9;
  border-radius: 5px;
  width: 100%;
  background: #eff0f2;
  text-align: left;
  text-align: ${({ button, check }) => (button || check ? "center" : "")};
  padding: 1rem 0 1rem 1rem;
  padding: ${({ button }) => (button ? "1rem 0 1rem 0" : "")};
  margin-left: ${({ noPr }) => (noPr ? "-1rem" : "")};
  background: ${({ button, check }) => (button || check ? "#3f67e9" : "")};
  color: ${({ button, check }) => (button || check ? "#fff" : "")};
  width: ${({ check }) => (check ? "20%" : "")};
  font-weight: ${({ check }) => (check ? "600" : "")};

  font-size: 13px;

  font-size: ${({ check }) => (check ? "15px" : "")};
`;

const AnyRow = styled.div`
  width: 100%;
  display: flex;
  margin-top: 1rem;
  margin-top: ${({ sub }) => (sub ? "-1rem" : "")};
  justify-content: ${({ sub }) => (sub ? "space-between" : "")};
`;

const HomeSubBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 3rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #e6e7e9;
`;

const H3 = styled.h3`
  font-weight: 100px;
  font-size: medium;
`;

const H2 = styled.h2`
  font-weight: 800px;
  font-size: large;
`;

const HomeBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

export {
  HomepageContainer,
  HomeHeader,
  P,
  Span,
  HomeHeaderItems,
  HomeBody,
  BodyLevelOne,
  LeftSide,
  RightSide,
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
  HomeBottom,
  H2,
};
