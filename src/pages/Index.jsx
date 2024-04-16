import React, { useState } from "react";
import { Box, Flex, Heading, Input, Button, Text, VStack, HStack, Divider, Spacer, IconButton } from "@chakra-ui/react";
import { FaPaperPlane, FaRobot, FaUser } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      const newMessage = {
        id: messages.length + 1,
        text: inputText,
        sender: "user",
      };
      setMessages([...messages, newMessage]);
      setInputText("");
      // TODO: Integrate with LLM API to get response and add to messages
    }
  };

  return (
    <Flex h="100vh">
      <Box w="30%" bg="gray.100" p={4}>
        <Heading size="lg" mb={4}>
          LLM Chatbox
        </Heading>
        <VStack spacing={4} align="stretch" h="80vh" overflowY="auto">
          {messages.map((msg) => (
            <HStack key={msg.id} bg="white" p={2} borderRadius="md">
              <Box bg={msg.sender === "user" ? "green.500" : "blue.500"} color="white" borderRadius="full" p={2}>
                {msg.sender === "user" ? <FaUser /> : <FaRobot />}
              </Box>
              <Text>{msg.text}</Text>
            </HStack>
          ))}
        </VStack>
        <Divider my={4} />
        <HStack>
          <Input value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="Type your message..." />
          <IconButton icon={<FaPaperPlane />} onClick={handleSendMessage} colorScheme="blue" />
        </HStack>
      </Box>
      <Spacer />
      <Box w="70%" bg="gray.200" p={4}>
        <Heading size="lg" mb={4}>
          2D Game Screen
        </Heading>
        {/* TODO: Implement 2D game screen */}
      </Box>
    </Flex>
  );
};

export default Index;
