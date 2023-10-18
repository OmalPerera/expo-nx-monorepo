import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { AppNavigator } from './navigator/AppNavigator';
import 'react-native-gesture-handler';
import { ApolloProvider } from '@apollo/client';
import { client } from '@m-repo/network';
import { Text, View } from 'react-native';
import { withExpoSnack, styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

export const App = () => {
  return (
    <StyledView className="flex-1 items-center justify-center bg-black">
      <StyledText className="text-gray-500">Try editing me! 🎉</StyledText>
    </StyledView>
    // <Provider store={store}>
    //   <ApolloProvider client={client}>
    //     <AppNavigator isNewUser={false} />
    //   </ApolloProvider>
    // </Provider>
  );
};

export default withExpoSnack(App);
