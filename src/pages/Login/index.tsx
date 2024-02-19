import React from "react";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export function Login() {
  const navigate = useNavigate();
  return (
    <Flex w="100%" h="100vh" align="center" justify="center">
      <Box>
        <form>
          <Text margin="0">Авторизация</Text>
          <Flex direction="column" gap={4}>
            <Input placeholder="E-mail" name="email" />
            <Input placeholder="Пароль" name="password" />
            <Flex marginTop="30px">
              <Button
                onClick={() => navigate("/")}
                w="100px"
                h="30px"
                colorScheme="teal"
                variant="solid"
              >
                Войти
              </Button>
            </Flex>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
}
