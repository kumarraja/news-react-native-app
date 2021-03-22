/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import AvatarIcon from './Avatar';

const ArticleCard = ({ article }) => (
    <Card style={styles.cardView} key={article.uri}>
        <Card.Title
            title={(article.title).substring(0, 50)}
            subtitle={`${article.dataType} | ${article.date}`}
            left={() => <AvatarIcon size={40} iconName="newspaper-variant-multiple" />}
        />
        <Card.Cover source={{ uri: article.image }} />
        <Card.Content>
            <Title>{article.title}</Title>
            <Paragraph>{(article.body).substring(0, 200)}</Paragraph>
        </Card.Content>

    </Card>
);

export default ArticleCard;

const styles = StyleSheet.create({
    cardView: {
        marginVertical: 5,
    },
});