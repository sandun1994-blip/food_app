import {
  Dimensions,
  ImageBackground,
  ImageProps,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {BORDERRADIUS, COLORS, FONTSIZE, SPACING} from '../theme/theme';
import CustomIcon from './CustomIcon';

type Props = {
  name: string;
  id: string;
  type: string;
  rosted: string;
  imagelink_square: ImageProps;
  special_ingredient: string;
  average_rating: number;
  price: any;
  buttonPressHandler: any;
  index: any;
};

const CARD_WIDTH = Dimensions.get('window').width * 0.32;

const CoffeeCard = ({
  name,
  average_rating,
  buttonPressHandler,
  id,
  imagelink_square,
  price,
  rosted,
  special_ingredient,
  type,
  index,
}: Props) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.CardLinearGradientContainer}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
      <ImageBackground
        source={imagelink_square}
        style={styles.CardImageBG}
        resizeMode="cover">
        <View style={styles.CardRaitingContainer}>
          <CustomIcon
            name={'star'}
            color={COLORS.primaryOrangeHex}
            size={FONTSIZE.size_18}
          />
          <Text style={styles.CardRatingText}>{average_rating}</Text>
        </View>
      </ImageBackground>
      <Text>{name}</Text>
      <Text>{special_ingredient}</Text>
      <View>
        <Text>$
            <Text>{price.price}</Text>
        </Text>
      </View>
    </LinearGradient>
  );
};

export default CoffeeCard;

const styles = StyleSheet.create({
  CardLinearGradientContainer: {},
  CardImageBG: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: BORDERRADIUS.radius_20,
    marginBottom: SPACING.space_15,
    overflow: 'hidden',
  },
  CardRaitingContainer: {},
  CardRatingText: {},
});
