import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import { s } from "../../s";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import useFetch from "../../hooks/useFetch";
import { Post } from "../../entities/Post";
import PostTitle from "../../components/PostTitle";
export default function AuthorDetails() {
  const { id, name, username, email } = useLocalSearchParams();
  const { data, isLoading, error } = useFetch<Post[]>(`posts?userId=${id}`);
  return (
    <SafeAreaView style={s.container}>
      <View style={s.authorDetailsContainer}>
        <Text style={s.title}>All Articles by {name}</Text>
        <Text style={s.authorDetailsText}>@{username}</Text>
        <Text style={s.authorDetailsText}>{email}</Text>
      </View>
      {isLoading && <ActivityIndicator />}
      {error && <Text>{error}</Text>}
      {data ? (
        <FlatList
          data={data}
          renderItem={({ item }) => <PostTitle {...item} />}
          ItemSeparatorComponent={() => (
            <View
              style={{
                borderWidth: 0.5,
                borderColor: "rgba(0, 0, 0, 0.219)",
                marginBottom: 15,
              }}
            />
          )}
          keyExtractor={(item) => item.id.toString()} //keyExtractor should return string
        />
      ) : (
        <ActivityIndicator />
      )}
    </SafeAreaView>
  );
}
