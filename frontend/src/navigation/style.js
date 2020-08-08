import styled, { keyframes } from 'styled-components';

const hideMenu = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const showMenu = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

export const NavigationStyle = styled.div`
  .nav-bar {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;

    .menu-btn {
      align-self: flex-start;
      flex-direction: column;
      display: flex;
      height: 100%;
      width: 33.3%;

      > img {
        width: 50px;    
        height: 52px;
        cursor: pointer;
      }
    }

    .app-name {
      align-self: flex-start;
      flex-direction: column;
      display: flex;
      height: 100%;
      width: 33.3%;
      font-size: 26px;
      font-weight: bold;
      text-align: center;
      span {
        margin-top: 9px;
      }
    }

    .logout-btn {
      align-self: flex-end;
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 33.3%;

      > div {
        align-self: flex-end;
        margin-right: 20px;
        margin-top: 15px;
        cursor: pointer;
      }
    }
  }
  .left-side-menu-wrapper {
    position: relative;
    z-index: 1;

    .left-side-menu {
      position: absolute;
      left: 0;
      top: 0;
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: lightgray;
      height: calc(100vh - 70px);
      width: 200px;
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
      
      div {
        padding: 5px;
        
        a:link {
          color: black;
        }
        
        a:visited {
          color: black;
        }
        
        a:hover {
          color: darkgray;
        }
        
        a:active {
          color: black;
        }
      }
    }

    .animation-hide {
      animation-name: ${hideMenu};
      animation-duration: 1s;
      transform: translateX(-100%);
    }

    .animation-show {
      animation-name: ${showMenu};
      animation-duration: 1s;
      transform: translateX(0%);
    }
  }
`;