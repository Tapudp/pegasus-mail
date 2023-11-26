import React from 'react';
import { Button } from 'react-native';

export default function SendButton({ title = 'Send', pressHandler, isDisabled = false }) {
  return <Button disabled={isDisabled} title={title} onPress={pressHandler} />;
}
