import { View, Text, ActivityIndicator, FlatList } from "react-native";
import React from "react";
import { s } from "../../s";
import useFetch from "../../hooks/useFetch";
import { User } from "../../entities/User";
import AuthorName from "../../components/AuthorName";

export default function authors() {
  const { data, isLoading, error } = useFetch<User[]>("users");
  console.log(data);

  return (
    <View style={s.container}>
      {isLoading ? <ActivityIndicator /> : null}
      {error ? <Text>{error}</Text> : null}
      {data ? (
        <FlatList
          data={data}
          renderItem={({ item }) => <AuthorName {...item} />}
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
    </View>
  );
}
