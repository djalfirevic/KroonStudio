/* eslint-disable */
import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import Gist from "./Gist";

const GistList = ({ gists, onFetchNewGists, onRefreshList, refreshing, showAvatar }) => {
  const renderItem = ({ item }) => {
    const filename = Object.keys(item.files)[0];
    return (
      <TouchableOpacity onPress={() => showAvatar(item.owner.avatar_url)}>
        <Gist url={item.owner.avatar_url} text={filename} />
      </TouchableOpacity>
    );
  };

  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: "#CED0CE"
        }}
      />
    );
  };
  return (
    <FlatList
      data={gists}
      keyExtractor={(item, index) => index.toString()}
      onEndReached={onFetchNewGists}
      onEndReachedThreshold={0.5}
      initialNumToRender={5}
      onRefresh={onRefreshList}
      refreshing={refreshing}
      renderItem={renderItem}
      ItemSeparatorComponent={renderSeparator}
    />
  );
};

export default GistList;
