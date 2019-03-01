import React from "react";
import PropTypes from "prop-types";
import { Container, Content, View, Text, Thumbnail } from "native-base";

class MasonryScreen extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <View aspectRatio={1}>
            <View style={{ flexDirection: "row" }}>
              <Thumbnail
                square
                style={{ flex: 1, height: 150 }}
                source={{
                  uri:
                    "http://edibleapple.com/wp-content/uploads/2009/11/steve-jobs-bill-gates-1991.jpg"
                }}
              />
              <Thumbnail
                square
                style={{ flex: 2 }}
                source={{
                  uri:
                    "http://edibleapple.com/wp-content/uploads/2009/11/steve-jobs-bill-gates-1991.jpg"
                }}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Thumbnail
                square
                style={{ flex: 2 }}
                source={{
                  uri:
                    "http://edibleapple.com/wp-content/uploads/2009/11/steve-jobs-bill-gates-1991.jpg"
                }}
              />
              <Thumbnail
                square
                style={{ flex: 3 }}
                source={{
                  uri:
                    "http://edibleapple.com/wp-content/uploads/2009/11/steve-jobs-bill-gates-1991.jpg"
                }}
              />
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default MasonryScreen;
