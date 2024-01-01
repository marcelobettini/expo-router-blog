import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import { Post } from "../../entities/Post";
import { s } from "../../s";
import PostTitle from "../../components/PostTitle";
import useFetch from "../../hooks/useFetch";
export default function index() {
  const { data, isLoading, error } = useFetch<Post[]>("posts");
  return (
    <SafeAreaView style={s.container}>
      <Text style={s.title}>All Articles</Text>
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
