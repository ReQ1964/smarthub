import React from 'react';
import { Alert, Button, Flex, Text } from '@mantine/core';
import { IconAlertCircle, IconRefreshAlert } from '@tabler/icons-react';

interface IErrorStateProps {
  title?: string;
  message?: string;
  refetch: () => void;
}

const ErrorState = ({
  title = 'An error occurred',
  message = 'Please try again later',
  refetch,
}: IErrorStateProps) => (
  <Alert
    icon={<IconAlertCircle size={24} />}
    title={title}
    color="red"
    autoContrast={true}
    radius="md"
    className="shadow-lg p-4 max-w-[400px] mx-auto flex flex-col"
  >
    <Text>{message}</Text>
    <Flex
      justify="flex-end"
      align="center"
      direction="row"
      mt="md"
      className="sm:justify-center"
    >
      <Button
        onClick={refetch}
        color="red"
        leftSection={<IconRefreshAlert size={18} />}
      >
        Try Again
      </Button>
    </Flex>
  </Alert>
);

export default ErrorState;
