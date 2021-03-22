import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, SafeAreaView, FlatList, View } from 'react-native';
import { Appbar } from 'react-native-paper';

import { getNews, logout } from '../store/actions';

import ArticleCard from '../components/ArticleCard';

/*
// ToDO List
1. Error handling
    a. handle if no-artilcles available
    c. show error msg if any error occured
2. isLoading state handling
3. Currently showing only showing 10 news articles, onscroll load more articles
4. Pull to refresh and load new articles
5. Article View -> To read full article info.
6. Display other info like Author, Source etc.

*/

const DashBoardScreen = (props) => {
    const { navigation, getNewsFunc, logoutFunc, news, isLoading, isError, errorMsg, isLoggedIn } = props;
    console.log('props...', { getNewsFunc, news, isLoading, isError, errorMsg });

    useEffect(() => {
        getNewsFunc();
    }, [getNewsFunc]);

    useEffect(() => {
        if (!isLoggedIn) {
            navigation.reset({
                index: 0,
                routes: [{ name: 'StartScreen' }],
            });
        }
    }, [navigation, isLoggedIn]);

    const rederItem = ({ item }) => {
        return <ArticleCard article={item} />;
    };
    return (
        <SafeAreaView style={styles.container}>
            <Appbar style={styles.top}>
                <Appbar.Action icon="home" onPress={() => console.log('Pressed dashboard icon')} />
                <Appbar.Action
                    icon="logout"
                    onPress={logoutFunc}
                />
            </Appbar>
            <View style={styles.newsView}>
                <FlatList
                    data={news}
                    renderItem={rederItem}
                    keyExtractor={item => item.uri}
                />
            </View>

        </SafeAreaView>

    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: StatusBar.currentHeight,
    },

    newsView: {
        backgroundColor: '#f2f2f2',
        marginHorizontal: 10,
    },

    top: {
        // position: 'absolute',
        // left: 0,
        // right: 0,
        // top: 0,
        justifyContent: 'space-between',
    },

});

const mapDispatchToProps = dispatch => {
    return {
        getNewsFunc: () => dispatch(getNews()),
        logoutFunc: () => dispatch(logout()),
    };
};

const mapStateToProps = state => {
    return {
        news: state.news.news,
        isLoading: state.news.isLoading,
        isError: state.news.isError,
        errorMsg: state.news.errorMsg,
        isLoggedIn: state.auth.isLoggedIn,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoardScreen);

