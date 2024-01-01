import { memo } from "react";
import { TouchableOpacity, Text } from "react-native";
import { s } from "../s";
import { User } from "../entities/User";
import { router } from "expo-router";

function AuthorName(author: User) {
  const handlePress = () => {
    console.log("author in AuthorName:", author);
    router.push({
      pathname: "/authorDetails",
      params: {
        id: author.id,
        name: author.name,
        username: author.username,
        email: author.email,
      },
    });
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={s.articleTitle}>{author.name}</Text>
    </TouchableOpacity>
  );
}
export default memo(AuthorName);
