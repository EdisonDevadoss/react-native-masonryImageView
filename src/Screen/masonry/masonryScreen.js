import React from "react";
import PropTypes from "prop-types";
import { Container, Content, Text, View } from "native-base";
import Masonry from "react-native-masonry";

class MasonryScreen extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <View style={{ flex: 1, flexGrow: 10, padding: 5 }}>
            <Masonry
              sorted
              columns={2}
              bricks={[
                {
                  uri:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrihFrWDQKHcnhVDoLebh-ucYbfx26cmEsuS7aMvDQWhugiMoegg"
                },
                {
                  uri:
                    "http://theoaksatsacredrocks.com/wp-content/uploads/2017/02/nature-hike.jpg"
                },
                {
                  uri:
                    "https://images.pexels.com/photos/60006/spring-tree-flowers-meadow-60006.jpeg?cs=srgb&dl=bloom-blossom-flora-60006.jpg&fm=jpg"
                },
                {
                  uri:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ZLetF3wGrYTiytmeX0I5Nkuhtd8ewPv4W10aGZbMEcDUU822"
                },
                {
                  uri:
                    "http://theoaksatsacredrocks.com/wp-content/uploads/2017/02/nature-hike.jpg"
                },
                {
                  uri:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrihFrWDQKHcnhVDoLebh-ucYbfx26cmEsuS7aMvDQWhugiMoegg"
                }
              ]}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

export default MasonryScreen;
