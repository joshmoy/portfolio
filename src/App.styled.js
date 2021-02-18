import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  background: transparent;
  height: 70px;
  position: fixed;
  bottom: 0;
  right: 100px;
  z-index: 1000;
  a:not(:last-of-type) {
    margin-right: 50px;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    color: #000;
  }
`;

export const Section1 = styled.div`
  margin-bottom: 100px;
  .image-div {
    .desc {
      color: #fefefe;
      font-size: 20px;
      text-align: right;
      margin: 5px 10px 0 0;
    }
  }
  .text-div {
    position: relative;
    h2 {
      font-size: 80px;
      line-height: 20px;
      z-index: 100;
      position: relative;
    }
    h3 {
      font-size: 70px;
      line-height: 20px;
      span {
        color: #63a191;
      }
    }
    .circle {
      background-color: #d1e8e2;
      position: absolute;
      width: 80px;
      height: 80px;
      top: 0;
      border-radius: 50%;
    }
    .chevron {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      -webkit-animation: pulse 2s infinite;
      animation: pulse 2s infinite;
      margin-top: 200px;
    }
    img {
      width: 30px;
      height: 30px;
    }

    @keyframes pulse {
      0% {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
      }
      50% {
        -webkit-transform: translate(0, 10px);
        transform: translate(0, 10px);
      }
      100% {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
      }
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

export const About = styled.div`
  position: relative;
  margin: 400px 0 200px;
  .story {
    font-size: 9.16667rem;
    font-weight: 600;
    position: absolute;
    z-index: 2;
    top: 50%;
    right: 0;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    text-align: center;
    text-transform: lowercase;

    h2 {
      opacity: 0.1;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transition: all 0.5s 0.6s ease-out;
      transition: all 0.5s 0.6s ease-out;
      -webkit-transform: translate(-50%, -50%) rotate(90deg);
      -ms-transform: translate(-50%, -50%) rotate(90deg);
      transform: translate(-50%, -50%) rotate(90deg);
      white-space: nowrap;
    }
  }
  .green-bg {
    width: 600px;
    height: 300px;
    background-color: #63a191;
    position: relative;
  }
  .ash-bg {
    width: 560px;
    height: 300px;
    background-color: #d1e8e2;
    position: absolute;
    top: 2rem;
    left: 2rem;
    padding: 1rem 0 0 2rem;

    .quote {
      font-size: 30px;
      width: 400px;
      span {
        font-weight: 500;
      }
    }
  }
`;

export const Tech = styled.div`
  margin: 200px 0;
  position: relative;
  /* height: 100vh; */
  .story {
    font-size: 4rem;
    font-weight: 600;
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 5rem;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    text-align: center;
    text-transform: lowercase;

    h2 {
      opacity: 0.1;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transition: all 0.5s 0.6s ease-out;
      transition: all 0.5s 0.6s ease-out;
      -webkit-transform: translate(-50%, -50%) rotate(-90deg);
      -ms-transform: translate(-50%, -50%) rotate(-90deg);
      transform: translate(-50%, -50%) rotate(-90deg);
      white-space: nowrap;
    }
  }

  .languages {
    width: 900px;
    margin: 0 auto;
    h3 {
      font-size: 30px;
    }

    img {
      width: 100px;
      height: 100px;
    }
  }
`;

export const Contact = styled.div`
  position: relative;
  height: 100vh;
  max-height: 100vh;
  /* padding-top: 100px; */

  h2 {
    font-size: 80px;
    line-height: 20px;
    position: relative;
    text-align: center;
    padding-top: 250px;
    span {
      color: #63a191;
    }
  }

  p {
    text-align: center;
    font-size: 30px;
    letter-spacing: 5px;
    line-height: 20px;
    font-weight: 300;
  }

  .icons {
    width: 700px;
    margin: 100px auto 0;
    position: relative;
    z-index: 50;
    img {
      width: 100px;
      height: 100px;
    }
  }
  .story {
    /* font-size: 3rem; */
    font-weight: 600;
    position: absolute;
    z-index: 2;
    top: 30%;
    left: 5rem;
    text-align: center;
    text-transform: lowercase;

    h2 {
      font-size: 8rem !important;
      opacity: 0.1;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transition: all 0.5s 0.6s ease-out;
      transition: all 0.5s 0.6s ease-out;
      white-space: nowrap;
    }
  }
`;
