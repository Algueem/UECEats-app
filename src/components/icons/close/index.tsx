import { X } from 'lucide-react-native';
import React from 'react';
import { colors } from '../../../../utils/colors';

interface CloseIconProps {
  size?: number;
  color?: string;
}

const CloseIcon = (props: CloseIconProps) => {
  return (
    <X size={props.size || 20} color={props.color || colors.redStrong} />
  );
};

export default CloseIcon;