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
  box-sizing: content-box;
  margin: 30px 20px 20px 10px;
  padding: 15px 20px 15px 20px;
  font-size: 13px;
  letter-spacing: 0.5px;
`;

const HighlightBox = styled.div`
  color: #484848;
  box-shadow: 0 0 2px #e6e6e6;
  margin: 20px 20px 10px 10px;
  padding: 15px 20px 15px 20px;
  font-size: 16px;
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
  display: inline-block;
  float: right;
  height: 40px;
  width: 40px;
  margin: 0px 0px -3px 2px;
`;

const StyledLink = styled.a`
  font-size: 14px;
  color: #898989;
  line-height: 1.3;
  letter-spacing: 0.5px;
  text-decoration: none;
`;

const RatingsLine = styled.div`
  margin: 4px 0px 8px 0px;
`;

const highlightTitle = {
  fontWeight: '420',
  fontSize: '12px',
  color: '#898989',
  marginTop: '8px',
  marginBottom: '10px'
};

const title = {
  fontWeight: '400',
  marginBottom: '5px'
};

class PromoBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}; // TODO: implement hover feature for helpful links
  }

  render() {
    return(
      <StyledHighlightBlock>
        <AdBox>
          <StyledBulb src='https://a0.muscache.com/airbnb/static/page3/icon-uc-light-bulb-b34f4ddc543809b3144949c9e8cfcc8d.gif'></StyledBulb>
          <div style={title}>{this.props.miniAd.title}</div>
          <div>{this.props.miniAd.description}</div>
        </AdBox>
        <HighlightBox>
          <div style={highlightTitle}>HOME HIGHLIGHTS</div>
          {this.props.highlights.map((highlight, index) => {
            return (
              <div key={index}>
                <div><span style={title}>{highlight.title} &#183; </span>{highlight.description}</div>
                <RatingsLine>
                  <StyledLink href='#'>Helpful<StyledThumb src='https://s3-us-west-1.amazonaws.com/betterbnb-description/defaultHelpful.png'></StyledThumb></StyledLink>
                  <span>&#183; </span>
                  <StyledLink href='#'>Not helpful</StyledLink>
                </RatingsLine>
              </div>
            );
          })}
        </HighlightBox>
      </StyledHighlightBlock>
    )
  }
}

export default PromoBar;