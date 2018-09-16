import React from 'react';
import styled from 'styled-components';

// Additional features to add:
// Use @media media queries to remove mini-ad from display when window is resized

const StyledHighlightBlock = styled.div`
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #484848;
  font-size: 16px;
  font-weight: 275;
`;

const AdBox = styled.div`
  box-shadow: 0 0 2px #e6e6e6;
  margin: 30px 20px 20px 10px;
  padding: 15px 20px 15px 20px;
  font-size: 13px;
  letter-spacing: 0.5px;
`;

const HighlightBox = styled.div`
  box-shadow: 0 0 2px #e6e6e6;
  margin: 20px 20px 10px 10px;
  padding: 15px 20px 15px 20px;
  font-size: 14px;
  font-weight: 340;
  line-height: 1.4;
  letter-spacing: 0.25px;
`;

const StyledThumb = styled.img`
  height: 18px;
  width: 18px;
  margin: 0px 0px -3px 2px;
`;

const StyledBulb = styled.img`
  display: inline;
  float: right;
  height: 40px;
  width: 40px;
  margin: 0px 0px -3px 2px;
`;

const StyledLink = styled.a`
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: 0.5px;
  text-decoration: none;
`;

const RatingsContainer = styled.div`
  margin: 7px 0px 12px 0px;
`;

const HighlightTitle = styled.div`
  font-weight: 420;
  font-size: 12px;
  color: #898989;
  margin-top: 8px;
  margin-bottom: 10px;
`;


class PromoBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false
    }; // TODO: implement hover feature for helpful links
  }

  handleHoverOn() {
    this.setState({ hovering: true });
  }

  handleHoverOff() { 
    this.setState({ hovering: false });
  }

  render() {
    const linkColor = {
      color: this.state.hovering ? '#00abb2' : '#898989'
    };
    return(
      <StyledHighlightBlock>
        <AdBox>
          <StyledBulb src='https://a0.muscache.com/airbnb/static/page3/icon-uc-light-bulb-b34f4ddc543809b3144949c9e8cfcc8d.gif'></StyledBulb>
          <div style={{'fontWeight': '400'}}>{this.props.miniAd.title}</div>
          <div>{this.props.miniAd.description}</div>
        </AdBox>
        <HighlightBox>
          <HighlightTitle>HOME HIGHLIGHTS</HighlightTitle>
          {this.props.highlights.map((highlight, index) => {
            return (
              <div key={index}>
                <div><span style={{'fontWeight': '400'}}>{highlight.title} &#183; </span>{highlight.description}</div>
                <RatingsContainer>
                  <StyledLink href='#' style={linkColor} onMouseEnter={() => this.handleHoverOn()} onMouseLeave={() => this.handleHoverOff()}>Helpful
                    <StyledThumb src='https://s3-us-west-1.amazonaws.com/betterbnb-description/defaultHelpful.png'></StyledThumb></StyledLink>
                  <span>&#183; </span>
                  <StyledLink href='#' style={linkColor} onMouseEnter={() => this.handleHoverOn()} onMouseLeave={() => this.handleHoverOff()}>Not helpful
                    </StyledLink>
                </RatingsContainer>
              </div>
            );
          })}
        </HighlightBox>
      </StyledHighlightBlock>
    )
  }
}

export default PromoBar;