import styled from '@emotion/styled'

export const LoaderWrapper = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  box-shadow: 19px 0 0 7px, 38px 0 0 3px, 57px 0 0 0;
  transform: translateX(-38px);
  animation: d1 0.5s infinite alternate linear;
  @keyframes d1 {
    50% {
      box-shadow: 19px 0 0 3px, 38px 0 0 7px, 57px 0 0 3px;
    }
    100% {
      box-shadow: 19px 0 0 0, 38px 0 0 3px, 57px 0 0 7px;
    }
  }
  /* width: 20px;
  height: 20px;
  border-radius: 50%;
  background: radial-gradient(farthest-side, #ffa516 94%, #0000) top/4px 4px
      no-repeat,
    conic-gradient(#0000 30%, #ffa516);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 4px), #000 0);
  animation: s3 1s infinite linear;

  @keyframes s3 {
    100% {
      transform: rotate(1turn);
    }
  } */
`
