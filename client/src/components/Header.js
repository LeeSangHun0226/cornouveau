import React from 'react';
// import { NavLink } from 'react-router-dom';
import './Header.css';
import ResponsiveFactor from '../ResponsiveFactor';
import { LinkContainer } from 'react-router-bootstrap';
import { Image, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
// import FaAlignJustify from 'react-icons/lib/fa/align-justify';
import logo from '../images/logo.png';
// const Header = () => {
//   return (
//     <div className="header">
//       <NavLink exact to="/" className="item" activeClassName="active">홈 </NavLink>
//       <NavLink to="/about/sanghoon " className="item" activeClassName="active"> 소개 </NavLink>
//       <NavLink to="/posts" className="item" activeClassName="active"> 포스트 </NavLink>
//       <NavLink to="/me" className="item" activeClassName="active"> 마이페이지 </NavLink>
//       <NavLink to="/login" className="item" activeClassName="active"> 로그인 </NavLink>
//     </div>
//   );
// };

export default class Header extends ResponsiveFactor {

  state = {
    isOpen: false,
    aboutHover: false,
    ourdogHover: false,
  }

  openAboutHover = () => {
    this.setState({
      aboutHover: true,
    });
  }

  closeHover = () => {
    this.setState({
      aboutHover: false,
      ourdogHover: false,
    });
  }

  openOurdogHover = () => {
    this.setState({
      ourdogHover: true,
    });
  }

  renderHeader = () => {
    return (
      // <div style={{ position: 'absolute', width: '100%' }}>
      <div>
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <LinkContainer to="/">
              <Image
                className="navbar-logo"
                src={logo}
              />
            </LinkContainer>
          </Navbar.Brand>
           <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavDropdown eventKey={1} title="ABOUT" id="basic-nav-dropdown">
              <LinkContainer to="/about/cornouveau">
                <MenuItem eventKey={1.1}>Cor Nouveau</MenuItem>
              </LinkContainer>
              <LinkContainer to="/about/italian">
                <MenuItem eventKey={1.2}>Italian Greyhounds</MenuItem>
              </LinkContainer>
              <LinkContainer to="/about/news">
                <MenuItem eventKey={1.3}>News</MenuItem>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to="/campaign">
              <NavItem eventKey={2}>CAMPAIGN</NavItem>
            </LinkContainer>
            <LinkContainer to="/gallery">
              <NavItem eventKey={3}>GALLERY</NavItem>
            </LinkContainer>
            <NavDropdown eventKey={4} title="OUR DOG" id="basic-nav-dropdown">
              <LinkContainer to="/ourdog/sire">
                <MenuItem eventKey={4.1}>Sire</MenuItem>
              </LinkContainer>
              <LinkContainer to="/ourdog/dam">
                <MenuItem eventKey={4.2}>Dam</MenuItem>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to="/adoptions">
              <NavItem eventKey={5} href="#">ADOPTION</NavItem>
            </LinkContainer>
            <LinkContainer to="/products">
              <NavItem eventKey={6} href="#">PRODUCT</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }

  // renderHeader = () => {
  //   if (this.state.width > 1024) {
  //     if (!this.state.aboutHover && !this.state.ourdogHover) {
  //       return (
  //         <div className="header">
  //           <div className="header_logo">
  //             <Image
  //               style={{ width: '300px' }}
  //               src={logo}
  //             />
  //           </div>
  //           <button className="button" onMouseEnter={this.openAboutHover}>
  //             <NavLink to="/about" className="item" activeClassName="active">ABOUT</NavLink>
  //           </button>
  //           <button className="button" onMouseEnter={this.closeHover}>
  //             <NavLink to="/campaign" className="item" activeClassName="active">CAMPAIGN</NavLink>
  //           </button>
  //           <button className="button" onMouseEnter={this.closeHover}>
  //             <NavLink to="/gallery" className="item" activeClassName="active">GALLERY</NavLink>
  //           </button>
  //           <button className="button" onMouseEnter={this.openOurdogHover}>
  //             <NavLink to="/ourdog" className="item" activeClassName="active">OUR DOG</NavLink>
  //           </button>
  //           <button className="button" onMouseEnter={this.closeHover}>
  //             <NavLink to="/adoptions" className="item" activeClassName="active">ADOPTION</NavLink>
  //           </button>
  //           <button className="button" onMouseEnter={this.closeHover}>
  //             <NavLink to="/product" className="item" activeClassName="active">PRODUCT</NavLink>
  //           </button>
  //         </div>
  //       );
  //     }
  //
  //     if (this.state.ourdogHover) {
  //       return (
  //         <div>
  //         <div className="header_click">
  //           <div className="header_logo">
  //             <Image
  //               style={{ width: '300px' }}
  //               src={logo}
  //             />
  //           </div>
  //           <button className="button" onMouseEnter={this.openAboutHover}>
  //             <NavLink exact to="/about" className="item" activeClassName="active">ABOUT</NavLink>
  //           </button>
  //           <button className="button" onMouseEnter={this.closeHover}>
  //             <NavLink to="/campaign" className="item" activeClassName="active">CAMPAIGN</NavLink>
  //           </button>
  //           <button className="button" onMouseEnter={this.closeHover}>
  //             <NavLink to="/gallery" className="item" activeClassName="active">GALLERY</NavLink>
  //           </button>
  //           <button className="button" onMouseEnter={this.openOurdogHover}>
  //             <NavLink to="/ourdog" className="item" activeClassName="active">OUR DOG</NavLink>
  //           </button>
  //           <button className="button" onMouseEnter={this.closeHover}>
  //             <NavLink to="/adoptions" className="item" activeClassName="active">ADOPTION</NavLink>
  //           </button>
  //           <button className="button" onMouseEnter={this.closeHover}>
  //             <NavLink to="/product" className="item" activeClassName="active">PRODUCT</NavLink>
  //           </button>
  //         </div>
  //         <div className="header_click">
  //           <div className="header_click_ourdog_items">
  //             <NavLink to="/ourdog/sire" className="item_click" activeClassName="active">Sire</NavLink>
  //             <NavLink to="/ourdog/dam" className="item_click" activeClassName="active">Dam</NavLink>
  //           </div>
  //         </div>
  //       </div>
  //       )
  //     }
  //
  //     return (
  //       <div>
  //       <div className="header_click">
  //         <div className="header_logo">
  //           <Image
  //             style={{ width: '300px' }}
  //             src={logo}
  //           />
  //         </div>
  //         <button className="button" onMouseEnter={this.openAboutHover}>
  //           <NavLink exact to="/about" className="item" activeClassName="active">ABOUT</NavLink>
  //         </button>
  //         <button className="button" onMouseEnter={this.closeHover}>
  //           <NavLink to="/campaign" className="item" activeClassName="active">CAMPAIGN</NavLink>
  //         </button>
  //         <button className="button" onMouseEnter={this.closeHover}>
  //           <NavLink to="/gallery" className="item" activeClassName="active">GALLERY</NavLink>
  //         </button>
  //         <button className="button" onMouseEnter={this.openOurdogHover}>
  //           <NavLink to="/ourdog" className="item" activeClassName="active">OUR DOG</NavLink>
  //         </button>
  //         <button className="button" onMouseEnter={this.closeHover}>
  //           <NavLink to="/adoptions" className="item" activeClassName="active">ADOPTION</NavLink>
  //         </button>
  //         <button className="button" onMouseEnter={this.closeHover}>
  //           <NavLink to="/product" className="item" activeClassName="active">PRODUCT</NavLink>
  //         </button>
  //       </div>
  //       <div className="header_click">
  //         <div className="header_click_about_items">
  //           <NavLink to="/about/cornouveau" className="item_click" activeClassName="active">CORNOUVEAU</NavLink>
  //           <NavLink to="/about/italian" className="item_click" activeClassName="active">Italian</NavLink>
  //         </div>
  //       </div>
  //     </div>
  //     );
  //   }
  //
  //   if (this.state.width < 1024 && this.state.isOpen) {
  //     if (!this.state.aboutHover && !this.state.ourdogHover) {
  //       return (
  //         <div className="header_open">
  //           <div className="header_logo">
  //             <Image
  //               style={{ width: '200px' }}
  //               src={logo}
  //             />
  //           </div>
  //           <button
  //             onClick={this.isOpenMenu}
  //             style={{
  //               outline: 'none',
  //               border: 0,
  //               background: 'black',
  //               display: 'flex',
  //               flex: 1,
  //               alignSelf: 'flex-end',
  //               position: 'absolute',
  //               focus: { outline: 0 },
  //             }}
  //           >
  //             <FaAlignJustify
  //               size={'3.5rem'}
  //               color={'white'}
  //               style={{
  //                 margin: '1.3rem',
  //               }}
  //             />
  //           </button>
  //           <button className="button_open" onMouseEnter={this.openAboutHover}>
  //             <NavLink exact to="/about" className="item_open" activeClassName="active">ABOUT</NavLink>
  //           </button>
  //           <button className="button_open" onMouseEnter={this.closeHover}>
  //             <NavLink to="/campaign" className="item_open" activeClassName="active">CAMPAIGN</NavLink>
  //           </button>
  //           <button className="button_open" onMouseEnter={this.closeHover}>
  //             <NavLink to="/gallery" className="item_open" activeClassName="active">GALLERY</NavLink>
  //           </button>
  //           <button className="button_open" onMouseEnter={this.openOurdogHover}>
  //             <NavLink to="/ourdog" className="item_open" activeClassName="active">OUR DOG</NavLink>
  //           </button>
  //           <button className="button_open" onMouseEnter={this.closeHover}>
  //             <NavLink to="/adoptions" className="item_open" activeClassName="active">ADOPTION</NavLink>
  //           </button>
  //           <button className="button_open" onMouseEnter={this.closeHover}>
  //             <NavLink to="/product" className="item_open" activeClassName="active">PRODUCT</NavLink>
  //           </button>
  //         </div>
  //       );
  //     }
  //
  //     if (this.state.ourdogHover) {
  //       return (
  //         <div>
  //           <div className="header_open">
  //             <div className="header_logo">
  //               <Image
  //                 style={{ width: '200px' }}
  //                 src={logo}
  //               />
  //             </div>
  //             <button
  //               onClick={this.isOpenMenu}
  //               style={{
  //                 outline: 'none',
  //                 border: 0,
  //                 background: 'black',
  //                 display: 'flex',
  //                 flex: 1,
  //                 alignSelf: 'flex-end',
  //                 focus: { outline: 0 },
  //               }}
  //             >
  //               <FaAlignJustify
  //                 size={'3.5rem'}
  //                 color={'white'}
  //                 style={{
  //                   margin: '1.3rem',
  //                 }}
  //               />
  //             </button>
  //             <button className="button_open" onMouseEnter={this.openAboutHover}>
  //               <NavLink exact to="/about" className="item_open" activeClassName="active">ABOUT</NavLink>
  //             </button>
  //             <button className="button_open" onMouseEnter={this.closeHover}>
  //               <NavLink to="/campaign" className="item_open" activeClassName="active">CAMPAIGN</NavLink>
  //             </button>
  //             <button className="button_open" onMouseEnter={this.closeHover}>
  //               <NavLink to="/gallery" className="item_open" activeClassName="active">GALLERY</NavLink>
  //             </button>
  //             <button className="button_open" onMouseEnter={this.openOurdogHover}>
  //               <NavLink to="/ourdog" className="item_open" activeClassName="active">OUR DOG</NavLink>
  //             </button>
  //             <div className="header_click_mobile">
  //               <div className="header_click_about_items_mobile">
  //                 <NavLink to="/ourdog/sire" className="item_click" activeClassName="active">Sire</NavLink>
  //                 <NavLink to="/ourdog/dam" className="item_click" activeClassName="active">Dam</NavLink>
  //               </div>
  //             </div>
  //             <button className="button_open" onMouseEnter={this.closeHover}>
  //               <NavLink to="/adoptions" className="item_open" activeClassName="active">ADOPTION</NavLink>
  //             </button>
  //             <button className="button_open" onMouseEnter={this.closeHover}>
  //               <NavLink to="/product" className="item_open" activeClassName="active">PRODUCT</NavLink>
  //             </button>
  //           </div>
  //         </div>
  //       );
  //     }
  //
  //     return (
  //       <div>
  //         <div className="header_open">
  //           <div className="header_logo">
  //             <Image
  //               style={{ width: '200px' }}
  //               src={logo}
  //             />
  //           </div>
  //           <button
  //             onClick={this.isOpenMenu}
  //             style={{
  //               outline: 'none',
  //               border: 0,
  //               background: 'black',
  //               display: 'flex',
  //               flex: 1,
  //               alignSelf: 'flex-end',
  //               position: 'absolute',
  //               focus: { outline: 0 },
  //             }}
  //           >
  //             <FaAlignJustify
  //               size={'3.5rem'}
  //               color={'white'}
  //               style={{
  //                 margin: '1.3rem',
  //               }}
  //             />
  //           </button>
  //           <button className="button_open" onMouseEnter={this.openAboutHover}>
  //             <NavLink exact to="/about" className="item_open" activeClassName="active">ABOUT</NavLink>
  //           </button>
  //           <div className="header_click_mobile">
  //             <div className="header_click_about_items_mobile">
  //               <NavLink to="/about/cornouveau" className="item_click" activeClassName="active">CORNOUVEAU</NavLink>
  //               <NavLink to="/about/italian" className="item_click" activeClassName="active">Italian</NavLink>
  //             </div>
  //           </div>
  //           <button className="button_open" onMouseEnter={this.closeHover}>
  //             <NavLink to="/campaign" className="item_open" activeClassName="active">CAMPAIGN</NavLink>
  //           </button>
  //           <button className="button_open" onMouseEnter={this.closeHover}>
  //             <NavLink to="/gallery" className="item_open" activeClassName="active">GALLERY</NavLink>
  //           </button>
  //           <button className="button_open" onMouseEnter={this.openOurdogHover}>
  //             <NavLink to="/ourdog" className="item_open" activeClassName="active">OUR DOG</NavLink>
  //           </button>
  //           <button className="button_open" onMouseEnter={this.closeHover}>
  //             <NavLink to="/adoptions" className="item_open" activeClassName="active">ADOPTION</NavLink>
  //           </button>
  //           <button className="button_open" onMouseEnter={this.closeHover}>
  //             <NavLink to="/product" className="item_open" activeClassName="active">PRODUCT</NavLink>
  //           </button>
  //         </div>
  //       </div>
  //     )
  //   }
  //
  //   return (
  //     <div className="header">
  //       <div className="header_logo">
  //         <Image
  //           style={{ width: '200px' }}
  //           src={logo}
  //         />
  //       </div>
  //       <button
  //         style={{
  //           background: 'black',
  //           border: 0,
  //           outline: 'none',
  //         }}
  //         onClick={this.isOpenMenu}
  //       >
  //         <FaAlignJustify
  //           size={'3.5rem'}
  //           style={{
  //             color: 'white',
  //             margin: '1.3rem',
  //           }}
  //         />
  //       </button>
  //     </div>
  //   );
  // }

  isOpenMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  isClosedMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
      </div>
    );
  }
}

// const Header = () => {
//   return (
//     <div>
//       {navbarInstance}
//     </div>
//   )
// }
//
// const navbarInstance = (
//   <Navbar inverse collapseOnSelect>
//     <Navbar.Header>
//      <Navbar.Brand>
//        <a href="#">React-Bootstrap</a>
//      </Navbar.Brand>
//      <Navbar.Toggle />
//    </Navbar.Header>
//     <Navbar.Collapse>
//       <Nav pullRight>
//         <LinkContainer to="/">
//           <Button>
//             홈
//           </Button>
//         </LinkContainer>
//         <LinkContainer to="/about/sanghoon">
//           <Button>
//             소개
//           </Button>
//         </LinkContainer>
//         <LinkContainer to="/posts">
//           <Button>
//             포스트
//           </Button>
//         </LinkContainer>
//       </Nav>
//     </Navbar.Collapse>
//   </Navbar>
// );

// export default Header;
