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
  message,
  refetch,
}: IErrorStateProps) => (
  <Alert
    icon={<IconAlertCircle size={24} />}
    title={title}
    color="red"
    autoContrast={true}
    radius="md"
    className="shadow-lg p-4 max-w-[400px] mx-auto flex"
  >
    <Text className="flex-grow">
      {message || 'Products failed to fetch. Please try again later.'}
    </Text>
    <Flex justify="flex-end" align="center" direction="row" mt="md">
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
