import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const BookDetail = ({ book }) => {
  // console.log('bookdata', book.volumeInfo.imageLinks.smallThumbnail);
  const { title } = book.volumeInfo;
  const { smallThumbnail, thumbnail } = book.volumeInfo.imageLinks;
  const authors = book.volumeInfo.authors.map(name => name);
  const url = book.saleInfo.buyLink;
  // console.log('link', url);

  const { thumbnailStyle, headerTextStyle, headerContentStyle, thumbnailContainerStyle, imageStyle } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: smallThumbnail }} />
          {/* <Text>Book Detail</Text> */}
          {/* <Text>{book.volumeInfo.title}</Text> */}
        </View>
        <View style={headerContentStyle}>
          {/* <Text style={headerTextStyle}>{title}</Text> */}
          <Text>{authors}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={imageStyle} source={{ uri: thumbnail }} />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>Buy Now</Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default BookDetail;
